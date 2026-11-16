export default {
  '**/*.{js,mjs,ts,tsx}': filenames => [
    `eslint --fix ${filenames.map(filename => `"${filename}"`).join(' ')}`,
  ],
};
