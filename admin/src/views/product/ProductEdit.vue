<template>
  <div>
    <H2>{{isNew ? '新建':'编辑'}}项目</H2>
    <ele-form :form-data="data" :form-desc="fields" :request-fn="submit"></ele-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ProductEdit extends Vue {
  @Prop(String) id!: string;

  data = {};
  fields = {
    name: { label: "项目名称", type: "input" },
    address: { label: "地址", type: "input" },
    // price: 0,
    cover: { label: "封面", type: "input" }
  };

  get isNew() {
    return !this.id;
  }
  // 创建和编辑方法
  async submit(v) {
    const url = this.isNew ? `product` : `product/${this.id}`;
    const method = this.isNew ? "post" : "put";

    await this.$http[method](url, v);
    this.$message.success("保存成功");
    this.data = {};
    this.$router.go(-1);
  }

  async fetch() {
    const res = await this.$http.get(`product/${this.id}`);
    this.data = res.data;
  }

  created() {
    !this.isNew && this.fetch();
  }
}
</script>

<style>
</style>