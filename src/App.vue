<template>
  <div id="app">
    <div class="container">
      <div class="nav flex-column">
        <router-link to="/">
          Панель закладок
        </router-link>
        <router-link to="/add">
          Добавить закладку
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/styles/index.scss';
</style>
