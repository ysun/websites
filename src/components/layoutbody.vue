<template>
    <div class="main-body" v-for="item in data" :id="id">
        <div class="card-title"><el-icon :size="20">
                <Paperclip />
            </el-icon><span>{{ item.name }}</span></div>
        <div class="div-card">
            <div class="div-card-body" v-for="db in item.data" :title="db.name" @click="npage(db.link)">
              <img :src="db.imgUrl">
                <a>
                    <p>{{ db.name }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Paperclip } from "@element-plus/icons-vue";

defineProps({
  data: Array<any>,
  id: String
  })

const npage = (url: string) => { window.open(url); };
</script>

<style scoped lang="less">
.main-body {
  width: 100%;

  .card-title {
    height: 25px;
    font-size: 20px;
    color: skyblue;
    font-family: var(--fontFamily);

    .el-icon {
      position: relative;
      top: 3px;
    }
  }

  .div-card {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    &::after {
      content: '';
      flex: auto;
    }

    @media screen and (max-width: 550px) {
      display: flex;
      flex-direction: column;

      .div-card-body {
        width: 100% !important;
      }
    }

    .div-card-body {
      width: calc(100% / 6 - 10px);
      height: 50px;
      display: flex;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.2);
      opacity: 0.6;
      border-radius: 10px;
      margin-bottom: 10px;
      backdrop-filter: blur(10px);

      img {
        width: 30px;
        height: 30px;
        margin: auto 0;
        padding-left: 10px;
      }

      a {
        text-decoration: none;
        line-height: 50px;
        padding-left: 10px;
      }
    }

    .div-card-body:hover {
      opacity: 0.9;
    }
  }
}
</style>