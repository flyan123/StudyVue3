<template>
<button @click="onclick">数字：{{ num }}</button>
</template>

<script>
  export default{
    data(){
      return {
        num:0,
      }
    },
    methods:{
      onclick(){
        this.num++
      }
    },
    mounted(){
      console.log('为',{num})
    }

  }
</script>