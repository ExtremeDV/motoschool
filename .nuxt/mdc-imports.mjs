import _RemarkEmoji from 'remark-emoji'
import _Highlight from '/app/motoschool/node_modules/.pnpm/@nuxtjs+mdc@https+++pkg.pr.new+@nuxtjs+mdc@c44090f_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}}