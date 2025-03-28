<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h2></h2>
    <p>
        Lets build 2 page appplication

    </p>
    <ChildComp @ChildEvent="handleMessage" />
</div>
</template>

<script>
import ChildComp from './ChildComp.vue';

export default {
    name: 'HelloWorld',
    components: {
        ChildComp
    },
   
    props: {
        msg: String,
    },
    methods: {
        handleMessage(message) {
            alert(message);
            console.warn(message);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1 {
    color: #42b983;
}

h3 {
    margin: 40px 0 0;

}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
