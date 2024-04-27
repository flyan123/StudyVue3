<template>
    <!-- 静态局部 -->
    <Listli :name="123" />
    <!-- 动态局部引入 -->
    <dongprops v-for="dongprope in dongpropes"
    :key="dongprope.id"
    :name="dongprope.name"
    :age="dongprope.age"
    :city="dongprope.city"
    />
    <!-- 静态全局  -->
    <quanjuprops :text="全局" />
</template>

<script>
import Listli from '@/components/Listli.vue'
import dongprops from '@/components/dongprops.vue'

export default {  
    components: {  
        Listli ,// 注册 Listli 组件  
        dongprops
    },  
    data() {
        return {
            dongpropes:[
                {'id':0 ,'name':'a','age':10,'city':'南京'},
                {'id':1 ,'name':'b','age':11,'city':'上海'},
                {'id':2 ,'name':'c','age':12,'city':'杭州'}
            ] 
        }
    },
}

</script>
