/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: ['standard-with-typescript', 'prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}
