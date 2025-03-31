<template>
<div class="sluts">
    <header>
    <slot name="header"></slot>
</header>
<content>
    <slot name="content"></slot>
</content>
<footer>
    <slot name="footer"><button>Ankit buy fast</button></slot>
</footer>
</div>
</template>
<script>
export default{
    name:'SlutComp'
}
</script>
<style csoped>
.sluts{
    margin: 0 auto;
    border: 1px solid;
    width: 250px;
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
}
</style>