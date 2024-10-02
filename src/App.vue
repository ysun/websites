<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img src="/src/assets/img/logo.png" alt="Logo" srcset="" draggable="false">
        <el-text class="mx-1 timeclock" type="info">{{ datetime }}<el-icon @click="changyan_model=true"><Comment /></el-icon></el-text>
        
      </el-header>
      <el-container>
        <el-aside  id="menuRef">
          <div @click="sitmenu"><el-icon :size="30"><Operation /></el-icon></div>
          <el-menu default-active="" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false">
            <lmenu />
          </el-menu>
        </el-aside>
        <el-container id="bodyRef">
          <el-main>
            <layout />
            <comment />
          </el-main>
          <el-footer>Copyright © gwt805 2024</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import lmenu from "@/components/menu.vue";
import layout from "@/components/layout.vue";
import { ref, provide,watch, onMounted,onUnmounted } from "vue";
import comment from "@/components/comment.vue";
import { Operation } from "@element-plus/icons-vue";

const timeintervel = ref()
const datetime = ref("");
const isCollapse = ref(false)
const yyfooter = ref()
const changyan_model = ref(false)
provide("changyan_model", changyan_model)
const sitmenu = () => { isCollapse.value ? isCollapse.value = false : isCollapse.value = true }

watch (isCollapse, (newVal, oldVal) => {
  console.log(newVal,oldVal)
  const menuref:any = document.getElementById("menuRef")
  const bodyref:any = document.getElementById("bodyRef")
  if (isCollapse.value) {
    menuref.style.width = "65px";
    bodyref.style.width =  bodyref.offsetWidth + 135 + 'px';
    bodyref.style.marginLeft = "65px"
  }
  else {
    menuref.style.width = "200px";
    bodyref.style.width =  bodyref.offsetWidth - 135 + 'px';
    bodyref.style.marginLeft = "200px"
  }
}, { deep: true });


const timeReplace = (num: number) => {
  if (num < 10) { return "0" + num; }
  else { return num; }
};

const getDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const week = ["日", "一", "二", "三", "四", "五", "六"];
  const weekday = week[day];
  const weekday_month_year_date_time = `${year} 年 ${timeReplace(month)} 月 ${timeReplace(date)} 日 (${weekday}) ${timeReplace(hour)}:${timeReplace(minute)}:${timeReplace(second)}`;

  datetime.value = weekday_month_year_date_time;
};

onMounted(() => {
  timeintervel.value = setInterval(getDateTime, 1000);
  yyfooter.value = setInterval(()=>{
    if (document.getElementsByClassName("module-cmt-footer")[0]) {
      document.getElementsByClassName("module-cmt-footer")[0].remove()
      clearInterval(yyfooter.value)
    }
  }, 1000)
})

onUnmounted(()=>{clearInterval(timeintervel.value)})

window.addEventListener("resize", () => {
  const menuref:any = document.getElementById("menuRef")
  const bodyref:any = document.getElementById("bodyRef")

  if (isCollapse.value) {
    menuref.style.width = "65px";
    bodyref.style.width =  window.innerWidth - 65 + 'px';
    bodyref.style.marginLeft = "65px"
  }
  else {
    menuref.style.width = "200px";
    bodyref.style.width =  window.innerWidth - 200 + 'px';
    bodyref.style.marginLeft = "200px"
  }
})

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 || event.which === 189)) {
    event.preventDefault();
  }
}, false);

document.addEventListener('mousewheel', (e: any) => {
  if ((e.wheelDelta && e.ctrlKey) || e.detail) {
    e.preventDefault();
  }
}, {
  capture: false,
  passive: false
});
</script>
<style scoped lang="less">
.common-layout {
  .el-container {
    width: 100%;
    height: 100%;

    .el-header {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid gray;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      font-family: var(--fontFamily);
      user-select: none;

      @media screen and (max-width: 350px) {
        img {
          display: none;
        }
      }

      img {
        width: 30px;
        height: 30px;
        margin-top: 5px;
      }

      .el-text {
        line-height: 40px;
        font-size: 20px;

        .el-icon {
          margin-left: 10px;
        }
      }
    }

    .el-container {
      width: 100%;
      height: calc(100% - 40px);
      position: absolute;
      top: 40px;
      left: 0;

      .el-aside {
        width: 200px;
        height: 100%;
        border-right: 1px solid gray;

        div {
          width: 100%;
          height: 30px;
          border-bottom: 1px solid gray;
          display: flex;
          justify-content: center;
        }

        .el-menu-vertical-demo {
          height: calc(100% - 31px);
          overflow: auto;
        }
      }

      .el-container {
        width: calc(100% - 200px);
        height: 100%;
        margin: -40px 0 0 200px;
        .el-main {
          width: 100%;
          height: calc(100% - 20px);
          position: absolute;
          
        }
        .el-footer {
          width: 100%;
          height: 20px;
          position: absolute;
          bottom: 0;
          left: 0;
          line-height: 20px;
          text-align: center;
          user-select: none;
        }
      }
    }
  }
}
</style>