<template>
  <q-page class="column items-center justify-evenly" style="heigth: 100%">
    <div>
      <h2 style="font-size: 20px">Add new plans for today</h2>
    </div>
    <div class="wrapper-button">
      <q-btn
        round
        color="primary"
        icon="add"
        style="padding: 15px"
        class="float-button"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
export default defineComponent({
  name: 'PageCalendar',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.wrapper-button {
  display: flex;
}
</style>
