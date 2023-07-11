import fs from 'fs'
import genTokens from './gen.js'
import path from 'path'

const CONFIG_FIGMA_FILE = path.join(process.cwd(), '.', 'config.figma.json')

// const path = './figma.config.json'

export default function figmaApi() {
  fs.access(CONFIG_FIGMA_FILE, fs.F_OK, err => {
    if (err) {
      throw new Error(
        '\x1b[31m\n\n❌ Config file was not found!\n\nPlease, create a `figma.config.json` in the root folder with the FIGMA_APIKEY and FIGMA_ID keys\n\n'
      )
    }
    fs.readFile(CONFIG_FIGMA_FILE, 'utf8', (err, data) => {
      if (err) throw err
      const {FIGMA_APIKEY, FIGMA_ID} = JSON.parse(data)
      const FIGMA_OUTDIR = 'tokens/json'
      if (!FIGMA_APIKEY) {
        throw new Error('\x1b[31m\n\n❌ No Figma API key found!\n\n')
      } else if (!FIGMA_ID) {
        throw new Error('\x1b[31m\n\n❌ No Figma ID found!\n\n')
      } else {
        if (!FIGMA_OUTDIR)
          // eslint-disable-next-line no-console
          console.warn('⚠️ No outdir found, default outdir is `./tokens.json`')
        fs.mkdir(FIGMA_OUTDIR, null, err => {
          if (err) {
            throw new Error(`\x1b[31m\n\n❌ ${err}!\n\n`)
          }
          genTokens(FIGMA_APIKEY, FIGMA_ID, FIGMA_OUTDIR)
        })
      }
    })
  })
}