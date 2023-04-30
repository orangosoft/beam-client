/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: 'Beam Client',
  media: 'media',
  hideGenerator: true,
  excludePrivate: true,
  sidebarLinks: {
    Github: 'https://github.com/orangosoft/beam-client',
  },
  disableSources: true,
  plugin: './typedoc-plugins/defaults.cjs',
  customCss: './theme/style.css',
}
