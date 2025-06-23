<script setup>
import { ref } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const openActive = ref(false);
const languageList = ['UKR', 'ENG']
const selectedlanguageList = ref(languageList[0]);
const handlClick = (item) => {
    selectedlanguageList.value = item;
    openActive.value = false;
}
</script>

<template>
    <header class="max-w-[1312px] mx-auto">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <img src="../assets/img/logo.svg" alt="logo.img">
                <h1 class="text-[32px] font-alternates font-medium">maal</h1>
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
                <button class="font-montserrat font-semibold text-[18px]">Let's talk</button>
                <ThemeSwitcher />
                <!-- 
                <div class="relative">
                    <button class="flex items-center gap-2" @click="active = !active">
                        <img :src="selectedVal.icon" alt="">
                        <img src="../assets/img/Button.svg" alt="">
                    </button>
                    <ul v-if="active"
                        class="absolute right-0 mt-[41px] w-[135px] text-center bg-white border-[1px] rounded-[20px] shadow-md z-10">
                        <li v-for="item in dropdowns" :key="item.name" @click="handleClick(item)"
                            class="px-4 py-2 hover:bg-gray-100 cursor-pointer font-montserrat flex items-center gap-2">
                            {{ item.name }}
                            <img :src="item.icon" alt="">
                        </li>
                    </ul>
                </div> -->
                <div>
                    <button @click="openActive = !openActive" class="flex">
                        <img src="../assets/img/font-page.svg" alt="">
                        <h2>{{ selectedlanguageList }}</h2>
                    </button>
                    <ul v-if="openActive">
                        <li v-for="item in languageList" :key="item" @click="handlClick(item)">
                            {{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>