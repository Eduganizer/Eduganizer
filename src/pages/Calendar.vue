<template>
  <q-page class="row items-center justify-evenly"></q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default defineComponent({
  name: 'PageCalendar',
  components: { VueCal },
  setup() {
    return {};
  },
});
</script>
