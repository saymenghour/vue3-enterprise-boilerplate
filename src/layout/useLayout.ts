import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref } from 'vue';

export const useUseLayoutStore = defineStore('useLayout', () => {
  const collapsed = ref<boolean>(false);
  const showSubMenu = ref<boolean>(false);

  function toggleCollapsed() {
    collapsed.value = !collapsed.value;
    showSubMenu.value = false;
  }

  function toggleSubMenu() {
    showSubMenu.value = !showSubMenu.value;
  }

  return {
    collapsed,
    toggleCollapsed,
    showSubMenu,
    toggleSubMenu,
  };

});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUseLayoutStore, import.meta.hot));
}
