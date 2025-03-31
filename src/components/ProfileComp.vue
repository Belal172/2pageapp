<template>
    <div>
      <h2>Count: {{ count }}</h2>
      <button @click="increment">Increment</button>
      <p>Double Count: {{ doubleCount }}</p>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations, mapGetters } from 'vuex';
  
  export default {
    name:'ProfileComp',
    computed: {
      ...mapState(['count']),
      ...mapGetters(['doubleCount'])
    },
    methods: {
      ...mapMutations(['increment'])
    }
  };
  </script>
  
