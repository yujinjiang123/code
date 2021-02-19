<template >
  <div class="container">
    <template v-for="(item,index) in list">
      <directory-item :key="index"
                      :name="item.name"
                      :is-dir="item.isDir"
                      @click.native="test"
                      />
        <directory v-if="item.isDir&&item.open"
                   class="children-container"
                   :list="item.children"/>
    </template>
  </div>
</template>

<script>
import DirectoryItem from "@/components/DirectoryItem";

export default {
  name: 'Directory',
  components: {
    DirectoryItem
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods:{
    test(){
      console.log(1)
    }
  }
}
</script>


<style scoped>
.container {
  width: 200px;
}

.children-container {
  margin-left: 24px;
}
</style>
