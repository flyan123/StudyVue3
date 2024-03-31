<template>
    <h3>列表渲染</h3>
    <!-- 数组只有两个值：下标index，值item -->
    <p v-for="(item,index) in names"> {{ item }}-{{ index }}</p>
    <!-- 对象有三个值： 值value,键key，下标index-->
    <div v-for="(value,key,index) of Objects">{{ value }}-{{ key }}-{{ index }}</div>
    <p v-for="name of names"> {{ name }}</p>
    <div v-for="item in result">
        <p>{{ item.title }}</p>
        <p>{{ item.id }}</p>
        <img :src="result.src"/>
    </div>
</template>

<script>

    export default{
        data(){
            return {
                names:["one","two","three"],
                Objects:{
                    "name":"梨花",
                    "age":25,
                },
                result:[
                    {
                        "id":1,
                        "title":'第一个',
                        "src":"",
                    },
                    {
                        "id":2,
                        "title":'第2个',
                        "src":"",
                    }
                ]
            }
        }
    }
</script>