<template>
  <v-container>
    <v-container>
      <center>
        <h1>Statistics</h1>
        <h2>You already recycled 22 kg plastic and 2kg of CO2</h2>
        <p>{{ userAddress }}</p>
      </center>
    </v-container>
    <v-container>
      <center>
        <h2>Badges</h2>
        <v-row>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/lowCarbon.png"
            ></v-img>
            <h3>Lowering your carbon footprint</h3>
            <p>Save 500 kg of CO2</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/plasticRecycle.png"
            ></v-img>
            <h3>Recycle master</h3>
            <p>Recycle 1000 kg of plastic</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/PlanetSaviour.png"
            ></v-img>
            <h3>Planet saver</h3>
            <p>50 times recycle</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/Traveller.png"
            ></v-img>
            <h3>Traveller</h3>
            <p>Visit three different bins</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/Friends.png"
            ></v-img>
            <h3>Be kind</h3>
            <p>Make 10 friends</p>
          </v-col>
          <v-col>
            <v-img
              contain
              max-height="200"
              max-width="200"
              src="../assests/badge/first.png"
            ></v-img>
            <h3>People's person</h3>
            <p>First time recycled</p>
          </v-col>
        </v-row>
      </center>
    </v-container>
    <v-container>
      <center>
        <h2>Recycle History</h2>
      </center>
    </v-container>
    <v-container>
      <center>
        <v-simple-table class="statistics_table">
          <template v-slot:default>
            <thead class="statistics_heading">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Plastic Type</th>
                <th>Dimensions (cm)</th>
                <th>Weight (g)</th>
                <th>Bin #</th>
                <th>Bin Country</th>
                <th>Got COOLs</th>
                <th>Got SAVERs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020-11-20</td>
                <td>12:39</td>
                <td>PP</td>
                <td>2 x 10 x 5</td>
                <td>800</td>
                <td>51</td>
                <td>Italy</td>
                <td>1.20</td>
                <td>1.26</td>
              </tr>
              <tr>
                <td>2020-11-27</td>
                <td>12:41</td>
                <td>PP</td>
                <td>14 x 10 x 20</td>
                <td>741</td>
                <td>12</td>
                <td>Italy</td>
                <td>1.51</td>
                <td>1.6</td>
              </tr>
              <tr>
                <td>2020-12-10</td>
                <td>17:39</td>
                <td>PP</td>
                <td>21 x 5 x 5</td>
                <td>360</td>
                <td>51</td>
                <td>Italy</td>
                <td>1.18</td>
                <td>1.22</td>
              </tr>
              <tr>
                <td>2020-12-28</td>
                <td>19:32</td>
                <td>CA</td>
                <td>12 x 10 x 5</td>
                <td>244</td>
                <td>14</td>
                <td>Italy</td>
                <td>3.38</td>
                <td>5.33</td>
              </tr>
              <tr>
                <td>2020-12-29</td>
                <td>11:34</td>
                <td>CA</td>
                <td>2 x 1 x 15</td>
                <td>128</td>
                <td>14</td>
                <td>Italy</td>
                <td>3.40</td>
                <td>5.38</td>
              </tr>
              <tr>
                <td>2020-12-30</td>
                <td>11:09</td>
                <td>ABS</td>
                <td>10 x 10 x 15</td>
                <td>512</td>
                <td>14</td>
                <td>Italy</td>
                <td>1.75</td>
                <td>2.05</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </center>
    </v-container>
  </v-container>
</template>

<script>
import recyclingHistoryData from "../data/recyclingHistoryData.json";

export default {
  name: "Transactions",
  data() {
    return {
      badgeWidth: 200,
      badgeHeight: 200,
      recyclingHistoryData: recyclingHistoryData.recyclingHistory,
      userAddress: "3PBSHtr4znZEEjCkgxd1CzGXT18m9eFdpYH",
      marketValueSaverUSD: 1.45,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>