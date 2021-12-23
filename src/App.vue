<template>
  <div id="app">
    <header class="header">
      <h4 class="header__title">
        Закладки
      </h4>
    </header>
    <div class="app">
      <div class="app__nav">
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
}

.header{
  width: 100%;
  background-color: #3367d6;
  height: 60px;
  display: flex;
  align-items: center;
  &__title{
    color: #fff;
    padding: 40px;
  }
}

.app{
  display: flex;
  justify-content: center;
  padding-top: 50px;
  &__nav{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    a{
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
}
</style>
