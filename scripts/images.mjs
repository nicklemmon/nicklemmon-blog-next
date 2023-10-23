import sharp from "sharp";
import fs from "fs";
import path from "path";
import { deleteAsync } from "del";

const RAW_IMAGES_PATH = `${process.cwd()}/src/images`
const OPTIMIZED_IMAGES_PATH = `${process.cwd()}/public/images/posts`
const OPTIMIZED_WIDTH = 1200
const OPTIMIZED_HEIGHT = 800

async function cleanImages() {
  await deleteAsync(`${process.cwd()}/public/images/posts/**`)
}

async function optimizeImages() {
  // Clear out any optimized images
  await cleanImages()

  // Retrieve array of raw image file buffers
  const images = await getImages()

  // Make the optimized images dir if it doesn't exist
  if (!fs.existsSync(OPTIMIZED_IMAGES_PATH)) {
    fs.mkdirSync(OPTIMIZED_IMAGES_PATH, { recursive: true })
  }

  // Create a new optimized image for each raw image
  images.forEach((image) => {
    return sharp(image.file)
      .grayscale()
      .linear(1)
      .resize(OPTIMIZED_WIDTH, OPTIMIZED_HEIGHT)
      .toFile(`${OPTIMIZED_IMAGES_PATH}/${image.slug}.webp`)
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
