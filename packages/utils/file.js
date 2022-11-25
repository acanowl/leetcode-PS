// 动态新建文件夹的方法
import { mkdirSync, statSync, readFile, writeFile } from 'fs'
import { dirname, isAbsolute, join, relative, sep, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * 创建文件夹
 * @param {*} pathname
 */
export const mkdirFile = pathname => {
  // 需要判断是否是绝对路径（避免不必要的 bug）
  pathname = isAbsolute(pathname) ? pathname : join(__dirname, pathname)
  // 获取相对路径
  pathname = relative(__dirname, pathname)

  // path.sep 避免平台差异带来的 bug
  const floders = pathname.split(sep)

  let pre = '' // 最终用来拼合的路径
  floders.forEach(floder => {
    try {
      // 没有异常，文件已经创建，提示用户该文件已经创建
      statSync(join(__dirname, pre, floder))
    } catch (err) {
      // 抛出异常，文件不存在则创建文件
      try {
        // 避免父文件还没有创建的时候，先创建子文件所出现的意外 bug，这里选择同步创建文件
        mkdirSync(join(__dirname, pre, floder))
      } catch (error) {
        console.log(err, 'mkdirSync catch')
      }
    }
    pre = join(pre, floder) // 路径拼合
  })
}

/**
 * 重写文件
 * @param {String} pathname
 * @param {String} tempname
 * @param {Function} format
 */
export const rewriteFile = ({ pathname, tempname, format = res => res }) => {
  readFile(tempname, 'utf8', (err, res) => {
    if (err) return console.log('读取文件失败', err.message)
    writeFile(resolve(pathname), format(res), err => {
      if (err) return console.log('生成文件失败', err.message)
    })
  })
}
