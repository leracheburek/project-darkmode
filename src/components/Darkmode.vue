  <template>
    <button class="flex items-center gap-2" @click="toggleDark">
      <img src="../assets/img/Button.svg" alt="">
    </button>
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