import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'color-base': 'color-neutral-800 dark:color-neutral-300',
      'bg-base': 'bg-white dark:bg-#111',
      'bg-secondary': 'bg-#eee dark:bg-#222',
      'border-base': 'border-#8882',

      'color-active': 'color-primary-600 dark:color-primary-400',
      'border-active': 'border-primary-600/25 dark:border-primary-400/25',
      'bg-active': 'bg-#8881',

      'icon-btn': 'rounded-full hover:bg-active op50 hover:op100 flex items-center justify-center transition-all',

      'z-graph-bg': 'z-5',
      'z-graph-link': 'z-10',
      'z-graph-node': 'z-11',
      'z-graph-link-active': 'z-12',
      'z-graph-node-active': 'z-13',

      'z-panel-content': 'z-50',
      'z-panel-no-mobile': 'z-55',
      'z-panel-nav': 'z-60',
      'z-panel-goto': 'z-70',
      'z-panel-terminal': 'z-80',
    },
    [/^badge-color-(\w+)$/, ([, color]) => `bg-${color}-400:20 dark:bg-${color}-400:10 text-${color}-700 dark:text-${color}-300 border-${color}-600:10 dark:border-${color}-300:10`],
    [/^bg-glass(:\d+)?$/, ([, opacity = ':75']) => `bg-white${opacity} dark:bg-#111${opacity} backdrop-blur-5`],
  ],
  // theme: {
  //   colors: {
  //     primary: {
  //       50: '#E9F4E7',
  //       100: '#D2E8CF',
  //       200: '#A9D3A2',
  //       300: '#7CBC71',
  //       400: '#579E4B',
  //       DEFAULT: '#579E4B',
  //       500: '#49833E',
  //       600: '#396831',
  //       700: '#2C5026',
  //       800: '#1D3419',
  //       900: '#0F1C0D',
  //       950: '#080E07',
  //     },
  //   },
  // },
  theme: {
    colors: {
      primary: {
        50: '#E6F3FF',
        100: '#CCE7FF',
        200: '#99CFFF',
        300: '#66B8FF',
        400: '#33A0FF',
        DEFAULT: '#0078D4', // VS Code 的标志性蓝色
        500: '#0067B8',
        600: '#005699',
        700: '#004580',
        800: '#003366',
        900: '#002233',
        950: '#001119',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Poppins',
        mono: 'IBM Plex Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
