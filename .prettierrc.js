module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^(react|react-native)$', '<THIRD_PARTY_MODULES>', '^@', '^[./](?!.styles$).*$', '^./styles$'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 200,
  bracketSpacing: true,
  semi: false,
}
