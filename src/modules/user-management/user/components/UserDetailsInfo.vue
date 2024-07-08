<template>
  <Card class="flex">
    <div class="p-2">
      <Avatar
        :src="user?.profileImageUrl"
        :size="128"
      />
    </div>

    <section class="p-4 w-auto min-w-72">
      <section class="flex items-center">
        <h2 class="text-lg font-medium">
          {{ user?.fullName }}
        </h2>
        <p
          v-if="user?.username"
          class="ml-2 text-sm"
        >
          @{{ user?.username }}
        </p>
      </section>

      <section class="mt-2 flex flex-col gap-y-1">
        <p class="flex flex-row gap-x-6">
          <span class="w-20">{{ t('email') }}</span>
          <span>{{ user?.email }}</span>
        </p>
        <p class="flex flex-row gap-x-6">
          <span class="w-20">{{ t('status') }}</span>
          <span><UserStatus :status="user?.status" /></span>
        </p>
      </section>
    </section>
  </Card>
</template>

<script setup lang="ts">
import { Avatar, Card } from '@/components';
import { useTranslation } from '@/composables';
import type { User } from '../userType';
import UserStatus from './UserStatus.vue';

type UserDetailsInfoProps = {
  user: User | undefined;
};

defineProps<UserDetailsInfoProps>();

const { t } = useTranslation();
</script>

<style scoped></style>
