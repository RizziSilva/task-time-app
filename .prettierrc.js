module.exports = {
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^(react|react-native|@react-navigation/native-stack)$', '<THIRD_PARTY_MODULES>', '^@', '^[./](?!.styles$).*$', '^./styles$'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  printWidth: 200,
  bracketSpacing: true,
  semi: false,
}
