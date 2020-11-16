<template>
  <div>
    <h1 class="world_title">Available Bins in the World</h1>
    <img class="world_map" src="../assests/worldmap.png" />
    <v-simple-table class="world_table">
      <template v-slot:default>
        <thead class="world_heading">
          <tr>
            <td><p>Address</p></td>
            <td><p>Country</p></td>
            <td><p>Recycled plastic (kg)</p></td>
            <td><p>Saved emission (kg)</p></td>
          </tr>
        </thead>
        <tbody v-for="bin in bins" :key="bin.address">
          <tr>
            <td>{{ bin.address }}</td>
            <td>{{ bin.country }}</td>
            <td>{{ bin.colletedPlastic }}</td>
            <td>{{ bin.savedEmission }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import binsData from "../data/binsData.json";

export default {
  name: "WorldMap",
  data() {
    return {
      bins: binsData.bins,
    };
  },
};
</script>

<style scoped lang="scss">
.world {
  &_title {
    margin-top: 20px;
    text-align: center;
  }
  &_table {
    width: 60%;
    margin: 30px auto;
    border: 1px solid black;
  }
  &_heading {
    font-weight: bold;
  }
}
.world_map {
  margin-left: 25%;
  height: 110%;
}
</style>
