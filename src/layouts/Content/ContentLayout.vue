<template>
  <main class="bg-white h-full">
    <section class="mr-5 xs:m-5 px-5 pt-5 h-full bg-slate-50 rounded-t-2xl">
      <UnauthorizeView v-if="!isAuthorize" />
      <slot v-else />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useCurrentUserStore } from '@/modules/current-user/currentUserStore';
import UnauthorizeView from '@/modules/exception/UnauthorizeView.vue';

const route = useRoute();
const store = useCurrentUserStore();
const { authorities } = storeToRefs(store);
const isAuthorize = ref<boolean>(true);

watch(
  () => authorities.value,
  () => {
    isAuthorize.value = store.isAuthorize(route.meta.authorities);
  }
);
</script>

<style scoped></style>
