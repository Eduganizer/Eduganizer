<template>
  <q-card class="my-card text-white custom-card">
    <div class="avatar-wrapper">
      <img src="../../assets/avatar-gratuit.png" alt="avatar" class="avatar" />
    </div>
    <p class="header">Hello Tom!</p>
  </q-card>
  <q-card class="my-card table-summary">
    <q-card-section>
      <div class="text-h4">Summary</div>
    </q-card-section>
    <q-markup-table w>
      <thead>
        <tr>
          <th class="text-left">Today</th>
          <th class="text-right">Subject</th>
          <th class="text-right">Time (h)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompositionComponent',
  setup() {
    return {};
  },
});
</script>
<style scoped>
.custom-card {
  margin: 13px 13px;
  border-radius: 10px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #1977f2;
  background-image: linear-gradient(0deg, #1977f2 0%, #1977f2 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.custom-card--small {
  height: 10vh;
  margin: 5px 13px 15px 13px;
  border-radius: 10px;
  background-color: #1977f2;
  background-image: linear-gradient(0deg, #1977f2 0%, #1977f2 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.header {
  text-align: center;
  font-family: sans-serif;
  font-size: 30px;
  margin: auto;
}
.avatar {
  width: 140px;
  height: 140px;
  margin: 10px auto 0 auto;
  border-radius: 50%;
}
.avatar-wrapper {
  margin: 0 auto;
  margin-top: 20px;
}
.header2 {
  font-size: 50px;
  font-family: sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}
.table-summary {
  margin: 5px 13px 15px 13px;
}
</style>
