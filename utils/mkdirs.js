import { mkdirFile, rewriteFile } from '@ao/utils'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { resolve } from 'path'
import { DEF_SPLIT, PATH_COLLECTION, PATH_TEMPLATE } from './config.js'

const argv = yargs(hideBin(process.argv)).argv
const { exec, _ } = argv
let filename = _.join(DEF_SPLIT)

/**
 * 生成算法题集md模板
 */
const createProblemSet = () => {
  const pathname = resolve(`./${PATH_COLLECTION}/${filename}`)
  const tempname = resolve(`./${PATH_TEMPLATE}/index.md`)
  // 创建文件夹
  mkdirFile(pathname)
  // 生成文件
  rewriteFile({
    pathname: `${pathname}\\index.md`,
    tempname: tempname,
    format: res => {
      const psname = filename.slice(
        filename.indexOf(DEF_SPLIT) + 1,
        filename.length
      )
      return res.replace('##', `## ${psname}`)
    }
  })
}

const creatorFnMap = { createProblemSet }
creatorFnMap[exec] && creatorFnMap[exec]()
