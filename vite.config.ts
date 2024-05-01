import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { webUpdateNotice } from "@plugin-web-update-notification/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Navigation-Websites/',
  build: {
    outDir: "docs"
  },
  plugins: [
    vue(),
    webUpdateNotice({
      versionType: "build_timestamp",
      checkInterval: 1000,
      checkOnWindowFocus: true,
      locale: "zh_CN",
      localeData: {
        en_US: {
          title: "📢 system update",
          description: "System update, please refresh the page",
          buttonText: "refresh",
          dismissButtonText: "dismiss",
        },
        zh_CN: {
          title: "📢 系统更新",
          description: "有新版本发布, 请刷新页面",
          buttonText: "好的",
          dismissButtonText: "取消",
        }
      }
    })
  ],
  resolve:{
    alias:{
      '@': resolve(__dirname,'./src')
    }
  },
  server: {
    open: true
  }
})
