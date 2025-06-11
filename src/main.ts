import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
//import disableDevtool from'disable-devtool';
import "element-plus/theme-chalk/dark/css-vars.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// https://github.com/theajack/disable-devtool/blob/master/README.cn.md
//disableDevtool({url: "https://www.baidu.com/",  timeOutUrl: "https://www.baidu.com/"});

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, {
    locale: zhCn,
});

app.mount("#app");
