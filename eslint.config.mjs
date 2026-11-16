import path from 'node:path';
import { fileURLToPath } from 'node:url';

import antfu from '@antfu/eslint-config';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default antfu(
  {
    react: true,
    typescript: true,
    jsonc: false,

    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },

    ignores: [
      '**/*.md',
      'dist/*',
      'node_modules',
      'coverage',
      'docs/',
      'server/bin/',
      'server/models/',
    ],
  },

  // Custom rules (cogroom-mobile과 같음)
  {
    rules: {
      'max-params': ['error', 3],
      'max-lines-per-function': ['error', 110],
      'curly': ['error', 'all'], // 단일 문장 if에도 항상 중괄호(가독성·편집 안전)
      'antfu/curly': 'off', // antfu 기본(중괄호 생략)을 끔 — 위 curly로 대체
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['README.md', 'CLAUDE.md'],
        },
      ],
      'node/prefer-global/process': 'off',
      'ts/no-use-before-define': 'off', // 컴포넌트 아래에 보조 함수를 두는 걸 허용
      'no-console': 'off',
      'no-cond-assign': 'off',
      'regexp/no-super-linear-backtracking': 'off',
      'regexp/no-unused-capturing-group': 'off',
    },
  },

  // TypeScript-specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'ts/consistent-type-definitions': ['error', 'type'],
      'ts/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
    },
  },

  // 화면 문구는 로케일(src/shared/lib/i18n/locales)에만 — JSX에 영어 문구를 바로 쓰지 않게.
  {
    files: ['src/**/*.tsx'],
    ignores: ['src/**/*.test.tsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSXText[value=/[A-Za-z]/]',
          message: '화면 문구는 로케일(src/shared/lib/i18n/locales)에 두고 t()로 쓰세요.',
        },
      ],
    },
  },

  // Better TailwindCSS plugin
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...betterTailwindcss.configs.recommended,
    settings: {
      'better-tailwindcss': {
        entryPoint: path.resolve(__dirname, './src/shared/styles/global.css'),
      },
    },
    rules: {
      ...betterTailwindcss.configs.recommended.rules,
      'better-tailwindcss/no-unnecessary-whitespace': 'warn',
      'better-tailwindcss/no-unknown-classes': 'warn',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    },
  },
);
