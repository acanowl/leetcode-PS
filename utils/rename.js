import { readdirSync, renameSync } from 'fs'
import { join } from 'path'
import { DEF_SPLIT, PATH_COLLECTION } from './config.js'

const pathname = PATH_COLLECTION

const getFiles = async dir => await readdirSync(dir)

const rename = async () => {
  const files = await getFiles(pathname)
  for (let i = 0; i < files.length; i++) {
    const oldname = files[i]
    const curname = oldname.replaceAll('.', DEF_SPLIT).replaceAll('_', DEF_SPLIT)
    try {
      await renameSync(join(pathname, oldname), join(pathname, curname))
    } catch (error) {
      await renameSync(join(pathname, oldname), join(pathname, curname))
    }
  }
}

rename()
