<template>
  <div id="LiveviewHyt">
    <div class="box">
      <div class="header">
        <section class="header_left">
          <div>
            <img src="../assets/imgs/u33.svg" alt="" />
            <span>刷新</span>
          </div>
          <div>
            <img src="../assets/imgs/u35.svg" alt="" />
            <span>存储为视图</span>
          </div>
          <div class="search">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary">搜索</el-button>
          </div>
        </section>
        <section class="header_right">
          
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveviewHyt",
  components: {},
  props: {},
  data() {
    return {
      input: "",
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
#LiveviewHyt {
  background-color: rgba(242, 242, 242, 1);
  color: #000000;
  .box {
    background-color: #ffffff;
    margin: 1vw;
    padding: 1vw;
    .header {
      display: flex;
      align-items: center;
      .search {
        display: flex;
      }
    }
  }
}
</style>
