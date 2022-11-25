import { mkdirFile, rewriteFile } from '@ao/utils'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { resolve } from 'path'

const argv = yargs(hideBin(process.argv)).argv
const { exec, _ } = argv
const [filename] = _

/**
 * 生成算法题集md模板
 */
const createProblemSet = () => {
  const pathname = resolve(`./project/collection/${filename}`)
  const tempname = resolve('./project/template/index.md')
  // 创建文件夹
  mkdirFile(pathname)
  // 生成文件
  rewriteFile({
    pathname: `${pathname}\\index.md`,
    tempname: tempname,
    format: res => {
      const psname = filename.slice(filename.indexOf('.') + 1, filename.length)
      return res.replace('##', `## ${psname}`)
    }
  })
}

const creatorFnMap = { createProblemSet }
creatorFnMap[exec] && creatorFnMap[exec]()
