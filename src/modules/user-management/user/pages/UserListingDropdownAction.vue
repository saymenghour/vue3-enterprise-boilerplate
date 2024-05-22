<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MoreHorizontal } from 'lucide-vue-next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/lib/shadcn/ui/dropdown-menu';
import { Button } from '@/lib/shadcn/ui/button';
import type { User } from '../userType';

defineProps<{
  user: User
}>();
</script>

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
          View details
        </DropdownMenuItem>
      </RouterLink>
      <DropdownMenuItem>Edit user</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>