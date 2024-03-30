<template>
    <h3>条件渲染</h3>
    <div v-if="flag">你能看见我吗</div>
</template>

<script>
    export default{
        data (){
            return{
                flag:true$Env:http_proxy="http://127.0.0.1:7890";$Env:https_proxy="http://127.0.0.1:7890"
            }
        },
        methods:{

        }
    } 
</script>