<template>
  <div id="app">
    <header-nav v-show="$route.path!='/'"></header-nav>
    <router-view />
  </div>
</template>