<script>
export default {
  name: 'DirectoryItem',
  functional:true,
  props: {
    name: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    },
    isDir: {
      type: Boolean,
      default: false
    }
  },
  render:function (h,context){
    const {isDir,name}=context.props;
    const item=(<div class={isDir?'dir-item':''}>{name}</div>)
      return(
          item
      )
  }
}
</script>


<style scoped>
  .dir-item{
    color:aqua;
  }
</style>
