<template>
<button @click="addnum"> 数子是{{ num }}</button>
</template>

<script>
  export default{
    data(){
      
      return {
        num:0
      }
    },

    methods: {
      addnum(){
        this.num++
      }
    },
  }
</script>