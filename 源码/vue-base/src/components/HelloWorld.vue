<template>
<div v-bind:id="idname" v-bind:class="msg">测试</div>
</template>

<script>
export default{
    data(){
        return{
            msg:"active",
            idname:'123'
        }
    }
}
</script>