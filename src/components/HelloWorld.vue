<template>
<div class="hello">
    <h2></h2>
    <p>
        Lets build 2 page appplication

    </p>
    <ChildComp @ChildEvent="handleMessage" />
</div>
<SlutComp>
    <template v-slot:header>
        <h1>Shree</h1>
    </template>
    <template v-slot:content>
        <p>lorem</p>
    </template>
    <template v-slot:footer>
        <button>buy me</button>
    </template>
</SlutComp>
<SlutComp>
    <template v-slot:header>
        <h1>Keyboard </h1>
    </template>
    <template v-slot:content>
        <p>This is very good </p>
    </template>
    <template v-slot:footer>

    </template>

</SlutComp>

<button @click="tab='JavaComp'">Load Java</button>
<button @click="tab='PhpComp'">Load PHP</button>
<component :is="tab" />
</template>

<script>
import ChildComp from './ChildComp.vue';
import JavaComp from './JavaComp.vue';
import PhpComp from './PhpComp.vue';
import SlutComp from './SlutComp.vue';

export default {
    name: 'HelloWorld',
    components: {
        ChildComp,
        SlutComp,
        JavaComp,
        PhpComp
    },

    props: {
        msg: String,
    },
    methods: {
        handleMessage(message) {
            alert(message);
            console.warn(message);
        }
    },
    data() {
        return {
            tab: "JavaComp"
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
