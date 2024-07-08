<template>
  <section>
    <PageContentSectionHeader>
      <SectionTitle>{{ title }}</SectionTitle>
    </PageContentSectionHeader>
    <Card>
      <slot />
    </Card>
  </section>
</template>

<script setup lang="ts">
import Card from '../ui/Card.vue';
import SectionTitle from '../ui/SectionTitle.vue';
import PageContentSectionHeader from './PageContentSectionHeader.vue';

type PageContentSectionProps = {
  title?: string;
};

defineProps<PageContentSectionProps>();
</script>

<style scoped>

</style>