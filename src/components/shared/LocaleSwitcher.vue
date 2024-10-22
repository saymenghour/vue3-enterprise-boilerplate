<!-- <template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Globe class="text-gray-700 relative h-5 w-5 mr-2 cursor-pointer" />
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-42"
      align="end"
    >
      <DropdownMenuGroup>
        <DropdownMenuItem
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          @click="
            () => {
              $i18n.locale = locale;
              setLocale(locale);
            }
          "
        >
          {{ $t(`locale.${locale}`) }}
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { setLocale } from '@/services/localStorage';
import { Globe } from 'lucide-vue-next';
</script>

<style scoped></style> -->
