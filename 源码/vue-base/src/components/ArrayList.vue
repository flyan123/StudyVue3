<template>
    <h3>数组变化侦测</h3>
    <button @click="addListHandle">添加数据</button>
    <ul>
        <li v-for="(name,index) in names" :key="index">{{ name }}</li>
    </ul>
    <button @click="concatHandle">合并数组</button>
    <h3>数组1</h3>
    <p v-for="(one,index) in num1" :key="index">{{one}}</p>
    <h3>数组2</h3>
    <p v-for="(two,index) in num2" :key="index">{{two}}</p>
   
</template>

<script>
    export default{
        data(){
            return{
                names:["aaa","bbb","ccc"],
                num1:[3,2,1],
                num2:[1,2,3]
            }
        },
        methods:{
            addListHandle(){
            // 1.变更方法:引起UI自动更新
                // this.names.push('ddd')
            // 2.替换一个数组:不会引起UI自动更新
                this.names.concat('eee')
                // console.log(this.names.concat('eee'))
                this.names = this.names.concat('eee')
            },
            concatHandle(){
                this.num1=this.num1.concat(this.num2)
            }
        }
    }
</script>