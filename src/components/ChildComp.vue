<template>
<button @click="sendMessage">Click me</button>
</template>

<script>
export default{
    name:'ChildComp',
    methods:{
       sendMessage(){
        this.$emit("ChildEvent","Hello from child");
       }
    },
}
</script>