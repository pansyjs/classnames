import { Config } from '@pansy/cli'

const config: Config = {
  banner: true,
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: 'classNames',
    sourceMap: true,
  }
}

export default config
