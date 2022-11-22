// 动态新建文件夹的方法
import { mkdirSync, statSync } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
let __dirname = dirname(fileURLToPath(import.meta.url))
__dirname = __dirname.slice(0, __dirname.indexOf('packages'))

export const mkdirFile = pathname => {
  // 需要判断是否是绝对路径（避免不必要的 bug）
  pathname = path.isAbsolute(pathname)
    ? pathname
    : path.join(__dirname, pathname)

  // 获取相对路径
  pathname = path.relative(__dirname, pathname)

  // path.sep 避免平台差异带来的 bug
  const floders = pathname.split(path.sep)

  let pre = '' // 最终用来拼合的路径
  floders.forEach(floder => {
    try {
      // 没有异常，文件已经创建，提示用户该文件已经创建
      statSync(path.join(__dirname, pre, floder))
    } catch (err) {
      // 抛出异常，文件不存在则创建文件
      try {
        // 避免父文件还没有创建的时候，先创建子文件所出现的意外 bug，这里选择同步创建文件
        mkdirSync(path.join(__dirname, pre, floder))
      } catch (error) {
        console.log(err, 'mkdirSync catch')
      }
    }
    pre = path.join(pre, floder) // 路径拼合
  })
}
