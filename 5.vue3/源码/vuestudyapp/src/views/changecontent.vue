<template>
<div>
    <div style="display: flex;">
        <h3 style="padding-right: 10px;" @click="box=0" :class="box==0?'show':' '">手机号</h3>
        <h3 @click="box=1" :class="box==1?'show':' '">邮箱</h3>
    </div>

    <div class="phonebox" v-if="box==0"><input placeholder="手机号"/></div>
    <div class="email" v-if="box==1"><input placeholder="邮箱"/></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            box:0
        }
    },
}

</script>

<style>
.show {
    color: pink;
}
</style>