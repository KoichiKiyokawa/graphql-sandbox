/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: ['standard-with-typescript', 'prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            message: 'Use queryField instead of queryFields',
            selector: 'MemberExpression > Identifier[name="queryFields"]',
          },
          {
            message: 'Use mutationField instead of mutationFields',
            selector: 'MemberExpression > Identifier[name="mutationFields"]',
          },
          {
            message: 'Use subscriptionField instead of subscriptionFields',
            selector: 'MemberExpression > Identifier[name="subscriptionFields"]',
          },
        ],
      },
    },
  ],
}
