module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'next/core-web-vitals',
    'plugin:cypress/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['./src/**/*.tsx'],
      rules: { '@typescript-eslint/explicit-function-return-type': 1 },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['use-encapsulation'],
  rules: {
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['error', 'info', 'table', 'warn'],
      },
    ],
    'no-unused-vars': ['error', { destructuredArrayIgnorePattern: '^_' }],
    'use-encapsulation/prefer-custom-hooks': ['warn', { allow: ['useMemo'] }],
  },
};
