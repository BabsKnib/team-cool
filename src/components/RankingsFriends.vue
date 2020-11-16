<template>
  <div class="my-4">
    <center>
      <v-container class="filtering">
        <h1>Rankings</h1>
        <v-row>
          <v-col>
            <a href="/ranking">
              <h2>Top 100</h2>
            </a>
          </v-col>
          <v-col>
            <a href="/countryranking">
              <h2>Country</h2>
            </a>
          </v-col>
          <v-col>
            <a href="/friendsranking">
              <h2><u>Friends</u></h2>
            </a>
          </v-col>
        </v-row>
      </v-container>
      <div class="inline"></div>
    </center>
    <v-simple-table class="ranking_table">
      <template v-slot:default>
        <thead class="ranking_heading">
          <tr>
            <td>Position</td>
            <td>Address</td>
            <td>Recycled plastic (kg)</td>
            <td>Saved emission (kg)</td>
            <td>Recycled items</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL</td>
            <td>12</td>
            <td>1</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL</td>
            <td>12</td>
            <td>1</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL</td>
            <td>12</td>
            <td>1</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>4</td>
            <td>3PGfXB5bEz7EkbtGMNUYop5aior5X6bUbvL</td>
            <td>12</td>
            <td>1</td>
            <td>1234</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "Rankings",
};
</script>

<style scoped lang="scss">
.ranking {
  &_table {
    width: 60%;
    margin: 30px auto;
    border: 1px solid black;
  }
  &_heading {
    font-weight: bold;
  }
}

.filtering {
  max-width: 400px;
}

a {
  color: white !important;
  text-decoration: none;
}
</style>
