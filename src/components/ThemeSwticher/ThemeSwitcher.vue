<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="relative h-8 w-8 rounded-full"
      >
        <img
          :src="dropdownItem[mode].icon"
          :alt="dropdownItem[mode].alt"
          :class="`mr-2 ${isDark ? 'invert' : ''}`"
        >
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-42"
      align="end"
    >
      <DropdownMenuGroup>
        <DropdownMenuItem
          v-for="{theme, icon, alt, label} in dropdownItem"
          :key="theme"
          @click="onThemeChange(theme)"
        >
          <img
            :src="icon"
            :alt="alt"
            :class="`mr-2 ${isDark ? 'invert' : ''}`"
          >
          {{ label }}
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { useColorMode, useDark } from '@vueuse/core';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useI18n } from '@/hooks';
import lightIcon from './icons/light.svg';
import darkIcon from './icons/dark.svg';
import systemIcon from './icons/system.svg';

const { t } = useI18n();
const mode = useColorMode();
const isDark = useDark();

const dropdownItem = {
  light: {
    theme: 'light',
    icon: lightIcon,
    alt: 'light',
    label: t('label.theme.light')
  },
  dark: {
    theme: 'dark',
    icon: darkIcon,
    alt: 'dark',
    label: t('label.theme.dark')
  },
  auto: {
    theme: 'auto',
    icon: systemIcon,
    alt: 'system',
    label: t('label.theme.system')
  }
};

const onThemeChange = (theme: any) => {
  mode.value = theme;
};

</script>

<style scoped>

</style>