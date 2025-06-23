<script setup>
import { ref } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const active = ref(false)
const languageList = ['UKR', 'ENG']
const selectedLanguage = ref(languageList[0])
const handleClick = (item) => {
    selectedLanguage.value = item
    active.value = false
}
</script>

<template>
    <header class="border-b-[1px] solid ">
        <div class="max-w-[1312px] mx-auto py-[14.5px]">
            <div class="flex justify-between items-center  ">
                <div class="flex items-center">
                    <img src="../assets/img/logo.svg" alt="logo.img">
                    <h1 class="text-[32px] font-ibm font-normal">maal</h1>
                </div>
                <nav>
                    <ul class="flex gap-[32px] text-[18px] font-montserrat font-medium">
                        <li><a href="#">Realizations</a></li>
                        <li class="relative group">
                            <a href="#">Services ▾</a>
                        </li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">TechBlog</a></li>
                    </ul>
                </nav>
                <div class="flex gap-[16px] items-center">
                    <button
                        class="font-montserrat font-semibold text-[18px] border-[2px] border-[#4bfa9160] py-[8px] px-[20px] rounded-[100px]">Let's
                        talk</button>
                    <ThemeSwitcher />
                    <div class="relative inline-block text-left">
                        <button @click="active = !active" class="flex items-center gap-2">
                            <h2 class="text-sm font-medium">{{ selectedLanguage }}</h2>
                        </button>

                        <ul v-if="active"
                            class="absolute mt-2 w-[100px] bg-white border rounded shadow z-10 text-center">
                            <li v-for="item in languageList" :key="item" @click="handleClick(item)"
                                class="cursor-pointer px-4 py-2 hover:bg-gray-100">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
