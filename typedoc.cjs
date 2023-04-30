/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: 'Beam Client',
  media: 'media',
  hideGenerator: true,
  excludePrivate: true,
  sidebarLinks: {
    Github: 'git@github.com:orangosoft/beam-client.git',
  },
  disableSources: true,
  plugin: './typedoc-plugins/defaults.cjs',
  customCss: './theme/style.css',
}
