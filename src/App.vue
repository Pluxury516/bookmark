<template>
  <div id="app">
    <div class="app-container">
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
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 50px;
}

.app-container{
display: flex;
justify-content: space-evenly;
}

.nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-top: 15px;
    margin-left: 5px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
