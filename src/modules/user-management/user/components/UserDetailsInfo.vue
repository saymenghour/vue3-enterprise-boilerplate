<template>
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
      <p class="ml-2 text-sm">
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
</template>

<script setup lang="ts">
import { Avatar } from '@/components';
import type { User } from '../userType';
import UserStatus from './UserStatus.vue';
import { useI18n } from '@/composables';

type UserDetailsInfoProps = {
  user: User | undefined;
};

defineProps<UserDetailsInfoProps>();

const { t } = useI18n();
</script>

<style scoped></style>
