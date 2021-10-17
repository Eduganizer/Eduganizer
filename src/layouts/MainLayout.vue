<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Eduganizer </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="wrapper-list">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'My Profile',
    caption: 'quasar.dev',
    icon: 'person',
    link: '/profile',
  },
  {
    title: 'Calendar',
    caption: 'quasar.dev',
    icon: 'today',
    link: '/calendar',
  },
  {
    title: 'Statistic',
    caption: 'quasar.dev',
    icon: 'insights',
    link: '/statistic',
  },
  {
    title: 'Goals',
    caption: 'quasar.dev',
    icon: 'track_changes',
    link: '/goals',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
.wrapper-list {
  margin-top: 50px;
}
</style>
