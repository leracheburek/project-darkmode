  <template>
    <div class="relative inline-block text-left">
    <button class="flex items-center gap-2" @click="toggleDark" >
      <img src="../assets/img/sun-svgrepo-com.svg" alt="" class="w-5 h-5 dark:hidden " />
      <img src="../assets/img/lightSun.svg" alt="" class="w-5 h-5 hidden dark:block">
    </button>
<!-- 
    <ul v-if="active"
      class="absolute right-0 mt-2 w-[135px] text-center bg-white border rounded-[20px] shadow-md z-10">
      <li v-for="item in dropdowns" :key="item.name" @click="handleClick(item)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
        <img :src="item.icon" alt="" class="w-5 h-5" />
        <span>{{ item.name }}</span>
      </li>
    </ul> -->
  </div>
  </template>

<script setup>
import { onMounted, ref } from 'vue'
// import Sun from '../assets/img/sun-svgrepo-com.svg'
// import Moon from '../assets/img/moon-svgrepo-com.svg'
// import SunActiveIcon from '../assets/img/ButtonLight.png'
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




// const active = ref(false)

// const dropdowns = [
//   { name: 'Sun',
//    icon: Sun ,
//    sunClass: 'hidden dark:block',
//    iconActive: SunActiveIcon,
//   },
//   { name: 'Moon',
//    icon: Moon,
//   moonClass: 'hidden dark:block' }
// ]

// const selectedVal = ref(dropdowns[0])

// const handleClick = (item) => {
//   selectedVal.value = item
//   active.value = false
// }
</script>