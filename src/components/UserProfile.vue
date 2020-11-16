<template>
  <div>
    <v-navigation-drawer class="user_sidebar" fixed permanent left dark>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <router-link :to="item.path" class="itemLink">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="user_info" v-for="user in users" :key="user.id">
      <img class="user_img" src="../assests/profilepic.png" />
      <div>
        <div class="user_detail">
          <strong>Name:</strong> <br />{{ user.userName }}
        </div>
        <div class="user_detail">
          <strong>Wallet Address: </strong> <br />{{ user.walletAddress }}
        </div>
        <div class="user_detail">
          <strong>Total token worth: </strong>
          <br />{{ user.totalTokenWorth }}
        </div>
        <div class="user_detail">
          <strong>Emission token balance:</strong>
          <br />{{ user.emissionTokenBalance }}
        </div>
        <div class="user_detail">
          <strong>Plastic Token balance:</strong> <br />
          {{ user.plasticTokenBalance }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      users: [
        {
          userName: "Mia Mouldings",
          id: 1,
          tokenBalance: 100,
          totalTokenWorth: "1324$",
          emissionTokenBalance: 473.5,
          plasticTokenBalance: 348.3,
          walletAddress: "3PBSHtr4znZEEjCkgxd1CzGXT18m9eFdpYH",
        },
      ],
      items: [
        {
          title: "My Transacton History",
          icon: "mdi-home-city",
          path: "/myaccount/transactions",
        },
        {
          title: "My Recycled History",
          icon: "mdi-account",
          path: "/myaccount/statistics",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.user {
  &_sidebar {
    width: 100px;
    max-height: 100vh;
    position: sticky;

    color: darkgreen;
    background-color: #2e5eaa;
  }
  &_info {
    margin-left: 400px;
    margin-top: -100px;
  }
  &_img {
    width: 200px;
    height: 200px;
  }
  &_detail {
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
.itemLink {
  text-decoration: none;
}
</style>
