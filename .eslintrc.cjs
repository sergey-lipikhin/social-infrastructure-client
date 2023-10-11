module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@mate-academy/eslint-config-react-typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-refresh',
  ],
  'rules': {
    'no-shadow': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error'
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
        ]
      }
    ]
  }
}
