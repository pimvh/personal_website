module.exports = {
    'locales': ['en', 'nl'],
    'defaultLocale': 'nl',
    'pages': {
      '*': ['common'],
      '/404': ['error'],
      '/': ['index'],
      '/aboutme' : ['aboutme'],
      '/contact' : ['contact'],
      '/blog' : ['blog'],
      '/projects' : ['projects'],
      '/resources' : ['resources'],
      '/blog/[id]' : ['blog']
    }
}
