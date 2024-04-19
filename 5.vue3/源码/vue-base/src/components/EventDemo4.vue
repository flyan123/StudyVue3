<template>
    <h3>方法 事件处理器</h3>
    <button @click="addCount('HelloWorld')">+1按钮</button>
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
            addCount(msg){
                console.log(msg)
                this.num+=1;
            }
        }
    }
</script>