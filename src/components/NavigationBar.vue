<template>
  <div class="nav-bar">
    <v-card text tile>
      <v-toolbar dark color="blue-grey darken-1" class="hidden-xs-and-down">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <img class="logo" src="../assests/logo.png" />
            {{ appTitle }}
          </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="navbar_items">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
            text
          >
            {{ item.title }}
          </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">
                About
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in subItems" :key="index">
                <router-link class="toLinks" :to="item.path">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <v-spacer />

        <img class="icon" src="../assests/linkedin.png" />
        <img class="icon" src="../assests/pngegg.png" />

        <router-link class="toUserProfile" to="/myaccount">
          <v-btn icon>
            <v-icon>fas fa-user-circle</v-icon>
          </v-btn>
          <span class="profilelink">My profile</span>
        </router-link>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      appTitle: "Fanplastic",
      menuItems: [
        { title: "Ranking", path: "/ranking" },
        { title: "World Map", path: "/worldmap" },
        { title: "Send Tokens", path: "/sendtokens" },
      ],
      subItems: [
        { title: "FAQ", path: "/faq" },
        { title: "Investors", path: "/investors" },
        { title: "Contact", path: "/contact" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.navbar {
  &_items {
    text-align: center;
  }
}
.toUserProfile {
  text-decoration: none;
  color: white;
}
.toLinks {
  text-decoration: none;
}
.logo {
  width: 30px;
  height: 30px;
}
.icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
</style>
