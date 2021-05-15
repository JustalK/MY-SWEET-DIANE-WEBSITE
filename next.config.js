const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['https://media.graphcms.com/'],
    loader: 'imgix',
    path: ''
  },
  async headers () {
    return [
      {
        source: '/:all*(svg|jpg|png|mp4)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate'
          }
        ]
      }
    ]
  }
}
