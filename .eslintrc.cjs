module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  settings: {
    react: {
     version: "detect",
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'import', 'unused-imports', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    "react/prop-types": "off",
    // Additional Liniting
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'block-scoped-var': 'error',
    'eqeqeq': ['error', 'smart'],
    'prefer-const': 'error',
    'eol-last': 'error',
    'prefer-arrow-callback': 'off',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'semi': 'error',
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-warning-comments': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'no-unused-vars': 'off',
    'node/no-missing-import': 'off',
    'node/no-empty-function': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-require': 'off',
    'node/shebang': 'off',
    'no-dupe-class-members': 'off',
    'require-atomic-updates': 'off',
    'unused-imports/no-unused-imports': 0,
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'sort-imports': [
      1,
      {
        ignoreDeclarationSort: true
      }
    ],
    'import/order': [
      1,
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index']
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true
      }
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'describe',
        property: 'only'
      },
      {
        object: 'it',
        property: 'only'
      }
    ]
  }
};
