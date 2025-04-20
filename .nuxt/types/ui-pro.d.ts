import * as uiPro from '#build/ui-pro'
import type { DeepPartial } from '@nuxt/ui'

type AppConfigUIPro = DeepPartial<typeof uiPro>

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /**
     * Nuxt UI Pro theme configuration
     * @see https://ui.nuxt.com/getting-started/theme#customize-theme
     */
    uiPro?: AppConfigUIPro
  }
}

export {}
