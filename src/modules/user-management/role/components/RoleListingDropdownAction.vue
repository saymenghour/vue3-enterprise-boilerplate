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
      <RouterLink :to="`./roles/${role.id}`">
        <DropdownMenuItem class="cursor-pointer">
          <Eye class="mr-2 h-4 w-4" />
          {{ t('viewDetails') }}
        </DropdownMenuItem>
      </RouterLink>
      <RouterLink :to="`./roles/${role.id}/edit`">
        <DropdownMenuItem class="cursor-pointer">
          <SquarePen class="mr-2 h-4 w-4" />
          {{ t('role.edit') }}
        </DropdownMenuItem>
      </RouterLink>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { useTranslation } from '@/composables';
import { Button } from '@/lib/shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/lib/shadcn/ui/dropdown-menu';
import { Eye, MoreHorizontal, SquarePen } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import type { Role } from '../roleType';

defineProps<{
  role: Role;
}>();

const { t } = useTranslation();
</script>
