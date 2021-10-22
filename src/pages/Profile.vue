<template>
  <q-page class="column"> <ProfileCard /></q-page>
</template>

<script lang="ts">
import ProfileCard from 'src/components/Profile/ProfileCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageProfil',
  components: { ProfileCard },
  setup() {
    return {};
  },
});
</script>
