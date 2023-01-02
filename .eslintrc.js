module.exports = {
  extends: ['@linkupst/react'],
  overrides: [
    {
      files: ['./src/core/store/*/index.ts'],
      rules: {
        'no-param-reassign': [
          'error',
          { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
      },
    },
  ],
};
