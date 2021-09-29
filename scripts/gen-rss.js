const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Jimuel Palaca',
    site_url: 'https://jimuelpala.ca',
    feed_url: 'https://jimuelpala.ca/feed.xml'
  })

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
