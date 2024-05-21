<template>
    <el-menu-item index="1" @click="scrollToDiv('usually')">
        <el-icon><CaretRight /></el-icon><template #title>常用站点</template>
    </el-menu-item>
    <el-menu-item index="2" @click="scrollToDiv('web')">
        <el-icon><CaretRight /></el-icon><template #title>WEB 框架</template>
    </el-menu-item>
    <el-menu-item index="3" @click="scrollToDiv('ui')">
        <el-icon><CaretRight /></el-icon><template #title>UI 框架</template>
    </el-menu-item>
    <el-menu-item index="4" @click="scrollToDiv('python')">
        <el-icon><CaretRight /></el-icon><template #title>Python 相关</template>
    </el-menu-item>
    <el-menu-item index="5" @click="scrollToDiv('codeware')">
        <el-icon><CaretRight /></el-icon><template #title>Code 工具</template>
    </el-menu-item>
    <el-menu-item index="6" @click="scrollToDiv('ai_soft')">
        <el-icon><CaretRight /></el-icon><template #title>AI 应用</template>
    </el-menu-item>
    <el-menu-item index="7" @click="scrollToDiv('email')">
        <el-icon><CaretRight /></el-icon><template #title>邮箱</template>
    </el-menu-item>
    <el-menu-item index="8" @click="scrollToDiv('cloud_dist')">
        <el-icon><CaretRight /></el-icon><template #title>网盘</template>
    </el-menu-item>
    <el-menu-item index="9" @click="scrollToDiv('msg_notif')">
        <el-icon><CaretRight /></el-icon><template #title>消息通知</template>
    </el-menu-item>
    <el-menu-item index="10" @click="scrollToDiv('notes')">
        <el-icon><CaretRight /></el-icon><template #title>在线笔记</template>
    </el-menu-item>
    <el-menu-item index="11" @click="scrollToDiv('api')">
        <el-icon><CaretRight /></el-icon><template #title>免费 API</template>
    </el-menu-item>
    <el-menu-item index="12" @click="scrollToDiv('picture')">
        <el-icon><CaretRight /></el-icon><template #title>图片&绘图</template>
    </el-menu-item>
    <el-menu-item index="13" @click="scrollToDiv('works')">
        <el-icon><CaretRight /></el-icon><template #title>求职神器</template>
    </el-menu-item>
    <el-menu-item index="14" @click="scrollToDiv('bottools')">
        <el-icon><CaretRight /></el-icon><template #title>装机工具</template>
    </el-menu-item>
    <el-menu-item index="15" @click="scrollToDiv('other')">
        <el-icon><CaretRight /></el-icon><template #title>其他工具</template>
    </el-menu-item>
</template>

<script setup lang="ts">
import { CaretRight } from "@element-plus/icons-vue";
const scrollToDiv = (id:string) => {
  const testDiv = document.getElementById(id);
  if (testDiv) {testDiv.scrollIntoView(true);}
};
</script>

<style scoped lang="less">
.el-menu-item:hover {
    font-size: 18px;
    background: transparent;
}
</style>