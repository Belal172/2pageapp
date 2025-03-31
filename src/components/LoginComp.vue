<template>
<div class="login-form">
    <h1>login form</h1>
    <Form action="" @submit="onsubmit">
        <label for="email">Email:<Field type="email" name="email" id="email" :rules="validateEmail" /></label><br>
        <ErrorMessage name="email" />
        <button>Signup</button>

    </form>
</div>
</template>

<script>
import {
    Field,
    Form,
    ErrorMessage
} from 'vee-validate';
export default {
    name: 'LoginComp',
    components: {
        Field,
        Form,
        ErrorMessage
    },
    methods: {
        onsubmit(values) {
            console.warn(values)

        },
        validateEmail(values) {
            if (!values) {
                return 'this field is required';
            }
            return true;
        }
       
    },

}
</script>
