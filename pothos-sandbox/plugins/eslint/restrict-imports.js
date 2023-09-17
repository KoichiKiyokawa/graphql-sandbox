module.exports = {
  rules: {
    'custom-no-import-db-except-index': {
      /** @param {import('eslint').Rule.RuleContext} context */
      create(context) {
        return {
          /** @param {import('estree').ImportDeclaration} node */
          ImportDeclaration(node) {
            if (node.source.value === 'src/lib/db') {
              if (!context.filename.endsWith('src/index.ts')) {
                context.report({
                  node,
                  message: 'src/lib/db import is only allowed in src/index.ts',
                })
              }
            }
          },
        }
      },
    },
  },
}
