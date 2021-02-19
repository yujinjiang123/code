<template>
  <div>
    <input list="search-list" type="text" @change="$emit('update:keyword')" :value="keyword"/>
    <button @click="search">搜索</button>
    <datalist id="search-list">
      <option v-for="item in searchList" :key="item" :value="item" />
    </datalist>
  </div>
</template>


<script>
export default {
  name: "SearchInput",
  props: {
    keyword: {
      type: String,
      required: false,
      default: ''
    },
    searchList: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    search() {
      this.$emit('search', this.keyword);
    }
  }
}
</script>

<style scoped>


</style>