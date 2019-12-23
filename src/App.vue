<template>
  <div id="app">
    <header-nav v-show="$route.path!='/'"></header-nav>
    <router-view />
    <footer-nav v-show="$route.path!='/'"></footer-nav>
  </div>
</template>