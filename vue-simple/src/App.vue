<template>
  <div id="app">
        <directory :list="files" />
  </div>
</template>

<script>

import Directory from "@/components/Directory";
import {searchList} from "@/apis/search";

export default {
  name: 'App',
  components: { Directory},
  watch:{
    keyword(newval){
      console.log(newval)
    }
  },
  data: () => ({
    keyword: '',
    searchList: [],
    files: [{
      name: 'filename',
      open: false,
      isDir: false,
      children: [],
    }, {
      name: 'filename',
      open: false,
      isDir: true,
      children: [{
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }, {
        name: 'childFile',
        open: false,
        isDir: true,
        children: [{
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }, {
          name: 'childFile',
          open: false,
          children: [],
        }],
      }, {
        name: 'childFile',
        open: false,
        children: [],
      }],
    }, {
      name: 'filename',
      open: false,
      isDir: false,
      children: [],
    }, {
      name: 'filename',
      open: false,
      isDir: false,
      children: [],
    }, {
      name: 'filename',
      open: false,
      isDir: false,
      children: [],
    }]
  }),
  methods: {
    async getSearchList() {
      const res = await searchList(this.keyword);
      this.searchList = res;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
