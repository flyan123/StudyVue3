<template>
    <h3>方法 事件处理器</h3>
    <button @click="addCount">+1按钮</button>
    <p>{{ num }}</p>
</template>

<script>
    export default{
        data(){
            return{
                num:0,
            }
        },
        methods:{
            addCount(){
               this.num+=1;
               console.log("点击了"+this.num);
            }
        }
    }
</script>