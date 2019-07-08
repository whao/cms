<template>
  <div class="container has-text-centered">
    <amplify-authenticator :signInConfig="signInConfig"></amplify-authenticator>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              signInConfig: {
                  header: '用户登录'
              }
          }
      }
  }
</script>
