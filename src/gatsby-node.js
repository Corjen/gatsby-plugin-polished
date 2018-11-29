// Add Babel plugin
try {
  require.resolve(`babel-plugin-polished`)
} catch (e) {
  throw new Error(
    `'babel-plugin-polished' is not installed which is needed by plugin 'gatsby-plugin-polished'`
  )
}

exports.onCreateBabelConfig = ({ stage, actions }, pluginOptions) => {
  const ssr = stage === `build-html` || stage === `build-javascript`
  console.log('ADDING POLISHED')
  actions.setBabelPlugin({
    name: `babel-plugin-polished`,
    stage,
    options: { ...pluginOptions, ssr }
  })
}
