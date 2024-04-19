<template>
<h3>{{  listname.name}}</h3>
<p>{{ listishasshuju}}</p>
</template>

<script>
    export default {
        data(){
            return {
                 listname:{
                    name:'是否有数据',
                    content:['前端','后端','全栈']
                 }
            }
        },
        // 计算属性
        computed:{
            listishasshuju(){
                return this.listname.content.length>0?"yes":"No"
            }
        }
    }
</script>