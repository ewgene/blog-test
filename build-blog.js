const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')
const path = './blog'
const excludedFiles = ['blogs.json', 'ContentHelper.ts', 'build-blog.js']

function fetchPaths () {
  const files = fs.readdirSync(path)
  const langs = files.filter(x => !excludedFiles.includes(x))

  const paths = {}

  langs.map((x) => {
    paths[x] = []
    fs.readdirSync(path + '/' + x).map((subfile) => {
      paths[x].push(`/${x}/${subfile}`)
    })
  })
  return paths
}

function getFiles (files) {
  const filelist = {}

  Object.keys(files).map((lang) => {
    filelist[lang] = []

    files[lang].forEach((langFile) => {
      const markdownFile = fs.readFileSync(`${path}/${langFile}`, 'utf-8')
      const fileContents = parseMarkdown(markdownFile)
      const date = fileContents.date
      const slug = fileContents.slug
      const shortPath = langFile

      filelist[lang].push({ date, slug, path: shortPath })
    })
  })

  return filelist
}

function generateJson (slugFile) {
  fs.writeFile(`${path}/blogs.json`, JSON.stringify(slugFile), (err) => {
    if (err) { throw new Error(err) }
  })
}

function generatesRouteBySlug () {
  const paths = fetchPaths()
  const slugFile = getFiles(paths)
  generateJson(slugFile)
  return slugFile
}

generatesRouteBySlug()
