<template>
<ul>
    <li>{{ name }}</li>
    <li>{{ age }}</li>
    <li>{{ city }}</li>
</ul>
</template>
<script>
export default{
    props:['name','age','city']
}
</script>