<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="w-8 h-8 p-0"
      >
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <RouterLink :to="`./users/${user.id}`">
        <DropdownMenuItem>
          <Eye class="mr-2 h-4 w-4" />
          {{ t('label.viewDetails') }}
        </DropdownMenuItem>
      </RouterLink>
      <RouterLink :to="`./users/${user.id}/edit`">
        <DropdownMenuItem>
          <SquarePen class="mr-2 h-4 w-4" />
          {{ t('label.userManagement.user.edit') }}
        </DropdownMenuItem>
      </RouterLink>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Eye, MoreHorizontal, SquarePen } from 'lucide-vue-next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/lib/shadcn/ui/dropdown-menu';
import { Button } from '@/lib/shadcn/ui/button';
import type { User } from '../userType';
import { useI18n } from '@/composables';

defineProps<{
  user: User
}>();

const { t } = useI18n();
</script>