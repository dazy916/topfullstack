<template>
  <div>
    <avue-crud
      v-if="option.column"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del  ="remove"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
@Prop(String) resource:string

  data = {};
  option = {};

  async fetch() {
    const res = await this.$http.get(`${this.resource}`);
    this.data = res.data;
  }
    async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async create(row, done) {
    const data = JSON.parse(JSON.stringify(row))//深拷贝
    delete data.$index//删除$index
    await this.$http.post(`${this.resource}`, data);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }
  async update(row, index, done) {
    const data = JSON.parse(JSON.stringify(row))//深拷贝
    delete data.$index//删除$index
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
  }

  async remove(row) {
    try{

    await this.$confirm("是否确认删除？");
    }catch{
      return
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>

<style>
</style>