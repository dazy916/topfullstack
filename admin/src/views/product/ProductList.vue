<template>
  <div>
    <H2>项目列表</H2>
    <el-button type="success" size="small" @click="$router.push('/product/create')">创建项目</el-button>
    
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(col,name) in fields"
        :prop="name"
        :key="name"
        :label="col.label"
        :width="col.width"
      ></el-table-column>
      <el-table-column label="操作" :width="200">
        <template v-slot="{row}">
          <el-button
            type="success"
            size="small"
            @click="$router.push(`/product/edit/${row._id}`)"
          >编辑</el-button>
          <el-button type="danger" size="small" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ProductList extends Vue {
  data = {};
  fields = {
    _id: { label: "ID" },
    name: { label: "项目名称" },
    address: { label: "地址" },
    price: 0,
    cover: { label: "封面" }
  };

  async fetch() {
    const res = await this.$http.get("product");
    this.data = res.data;
  }

  async remove(row) {
    await this.$confirm('是否确认删除？')
    await this.$http.delete(`product/${row._id}`);
    this.$message.success('删除成功')
    this.fetch()
  }

  created() {
    this.fetch();
  }
}
</script>

<style>
</style>