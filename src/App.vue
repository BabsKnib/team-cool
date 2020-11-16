<template>
  <v-app>
    <v-main>
      <NavigationBar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar';

export default {
  name: 'App',

  components: {
    NavigationBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
* {
  background-color: #2e5eaa;
  color: white;
}
</style>
