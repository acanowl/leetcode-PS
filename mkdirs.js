import { mkdirFile } from '@ao/utils'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv
const { name, _: [path] } = argv

mkdirFile(`${name}${path}`)

// TODO 生成文件
