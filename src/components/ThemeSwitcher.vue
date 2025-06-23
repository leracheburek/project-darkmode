  <template>
    <div class="relative inline-block text-left">
      <button class="flex items-center gap-2" @click="toggleDark">
        <img src="../assets/img/moon-svgrepo-com.svg" alt="" class="w-[25px] h-[24px] dark:hidden " />
        <img src="../assets/img/lightSun.svg" alt="" class="w-[25px] h-[24px] hidden dark:block">
      </button>
    </div>
  </template>

<script setup>
import { onMounted, ref } from 'vue'
const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.theme
  if (saved === 'dark') {
    document.documentElement.classList.add('dark')
    isDark.value = true
  }
})

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.theme = isDark.value ? 'dark' : 'light'
}
</script>