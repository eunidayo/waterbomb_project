<template>
  <div id="app">
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/login02">Login02</router-link>
      <router-link to="/mypage">Mypage</router-link>
      <router-link to="/myticket_empty">Myticket Empty</router-link>
      <router-link to="/myticket">Myticket</router-link>
      <router-link to="/payment_guest">Payment Guest</router-link>
      <router-link to="/payment_success">Payment Success</router-link>
      <router-link to="/payment">Payment</router-link>
      <router-link to="/ticket_selection">Ticket Selection</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* 스타일 추가 가능 */
</style>
