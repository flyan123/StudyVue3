<template>
    <h3>内联事件处理器</h3>
    <button @click="num++">+1按钮</button>
    <p>{{ num }}</p>
</template>

<script>
    export default{
        data(){
            return{
                num:0,
            }
        }
    }
</script>