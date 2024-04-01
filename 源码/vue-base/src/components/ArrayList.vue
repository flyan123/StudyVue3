<template>
    <h3>数组变化侦测</h3>
    <ul>
        <li v-for="(name,index) in names" :key="index">{{ name }}</li>
    </ul>
</template>

<script>
    export default{
        data(){
            return{
                names:["aaa","bbb","ccc"]
            }
        },
        methods:{
            
        }
    }
</script>