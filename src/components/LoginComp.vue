<template>
    <div class="login-form">
      <h1>Login Form</h1>
      <Form @submit="onsubmit">
        <label for="email">Email:</label>
        <Field name="email" type="email" id="email" :rules="validateEmail" /><br>
        <ErrorMessage name="email" style="color: red;" /><br>
  
        <label for="password">Password:</label>
        <Field name="password" type="password" id="password" :rules="validatePassword" /><br>
        <ErrorMessage name="password" style="color: red;" /><br>
  
        <button type="submit">Signup</button>
      </Form>
    </div>
  </template>
  
  <script>
  import { Field, Form, ErrorMessage } from 'vee-validate';
  
  export default {
    name: 'LoginComp',
    components: {
      Field,
      Form,
      ErrorMessage
    },
    methods: {
      onsubmit(values) {
        console.warn("Form Submitted:", values);
      },
      validateEmail(value) {
        if (!value) return 'Email field is required';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value) ? true : 'Please enter a valid email address';
      },
      validatePassword(value) {
        if (!value) return 'Password field is required';
        return value.length >= 6 ? true : 'Password must be at least 6 characters long';
      }
    }
  }
  </script>
  