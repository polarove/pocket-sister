import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import ja from 'element-plus/dist/locale/ja.mjs'

export const useSupportedLocale: Map<string, string> = new Map([
    ['en', 'English'],
    ['ja', '日本語'],
    ['zh-CN', '简体中文'],
])

export const useSupportedUILocale: SupportedUILocale = [
    {
        language: 'en',
        locale: en,
    },
    {
        language: 'ja',
        locale: ja,
    },
    {
        language: 'zh-CN',
        locale: zhCn,
    },
]
