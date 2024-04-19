<template>
    <h3>事件传参</h3>
    <p @click="getNameHandle(name,$event)" v-for="(name,index) in names" :key="index">{{ name }}</p>
</template>

<script>
    export default{
        data(){
            return{
                names:["aaa","bbb","ccc"]
            }
        },
        methods:{
            getNameHandle(name,e){
                console.log(name)
                console.log(e)
            }
        }
    }
</script>