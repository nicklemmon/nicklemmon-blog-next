const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const del = require('del')

const RAW_IMAGES_PATH = `${process.cwd()}/src/images`
const OPTIMIZED_WIDTH = 1200
const OPTIMIZED_HEIGHT = 800

async function cleanImages() {
  await del(`${process.cwd()}/public/images/posts/**`)
}

async function optimizeImages() {
  await cleanImages()

  const images = await getImages()

  images.forEach((image) => {
    return sharp(image.file)
      .grayscale()
      .linear(1)
      .resize(OPTIMIZED_WIDTH, OPTIMIZED_HEIGHT)
      .toFile(`${process.cwd()}/public/images/posts/${image.slug}.webp`)
      .catch((err) => {
        console.log(`file "${image.slug}" was not processed due to ${err}`)
      })
  })
}

/** Retrieves all raw, un-optimized images for optimization */
async function getImages() {
  const dir = fs.readdirSync(RAW_IMAGES_PATH)

  return Promise.all(
    dir.map(async (filename) => {
      const file = fs.readFileSync(path.join(RAW_IMAGES_PATH, filename))
      const slug = filename.replace(/\.jpg$/, '')

      return {
        file,
        slug,
      }
    })
  )
}

optimizeImages()
