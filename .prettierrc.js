module.exports = {
  useTabs: false,
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '**/*.svx',
      options: { parser: 'markdown' },
    },
    {
      files: '**/*.ts',
      options: { parser: 'typescript' },
    },
    {
      files: '**/CHANGELOG.md',
      options: {
        requirePragma: true,
      },
    },
  ],
}
