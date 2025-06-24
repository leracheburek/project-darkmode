<script setup>
import { ref } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import Down from '../assets/img/Chevron Down.svg'
import Czech from '../assets/img/czech.jpg'
import English from '../assets/img/english.jpg'
import Polich from '../assets/img/polich.jpg'
import Button from './ui/Button.vue';

const active = ref(false)
const languageList = [{
    id: 1,
    name: 'English',
    icon: English,
},
{
    id: 2,
    name: 'Polish',
    icon: Polich,
},
{
    id: 3,
    name: 'Czech',
    icon: Czech,
}]

const selectedLanguage = ref(languageList[0])
const handleClick = (item) => {
    selectedLanguage.value = item
    active.value = false
}

const link = [
    {
        id: 1,
        name: 'Realizations',

    },

    {
        id: 2,
        name: 'Services ',
        icon: Down
    },

    {
        id: 3,
        name: 'Contact'
    },

    {
        id: 4,
        name: 'TechBlog'
    }]

</script>
<template>
    <header class="border-b-[1px] border-black dark:border-white">
        <div class="max-w-[1312px] mx-auto py-[14.5px]">
            <div class="flex justify-between items-center  ">
                <div class="flex items-center">
                    <img src="../assets/img/logo.svg" alt="logo.img">
                    <h1 class="text-[32px] font-ibm font-normal">maal</h1>
                </div>
                <nav>
                    <ul class="flex gap-[32px] text-[18px] font-montserrat font-medium">
                        <li v-for="item in link" :key="item"><a href="#" class="flex items-center gap-[10px]">{{
                            item.name }}
                                <img v-if="item.icon" :src="item.icon" alt="icon" class="w-4 h-4" />
                            </a></li>
                    </ul>
                </nav>
                <div class="flex gap-[16px] items-center">
                    <Button type="buttonHeader">Let's talk</Button>
                    <ThemeSwitcher />
                    <div class="relative inline-block text-left">
                        <button @click="active = !active" class="flex items-center gap-2 text-sm font-medium">
                            <img src="../assets/img/font-page.svg" alt="" class=" dark:hidden w-10 h-10">
                            <img src="../assets/img/white.jpg" alt="" class=" hidden dark:block w-9 h-9 rounded-[50%]">
                        </button>

                        <ul v-if="active"
                            class="absolute left-[-40px] mt-[40px] bg-white border-black dark:bg-black dark:border-white border-[1px] rounded-[25px] px-[10px] shadow z-10 text-center">
                            <li v-for="item in languageList" :key="item" @click="handleClick(item);"
                                class="cursor-pointer px-[25px] py-[10px] flex justify-center items-center gap-[25px] text-[18px] font-normal font-ibm">
                                {{ item.name }}
                                <img v-if="item.icon" :src="item.icon" alt="icon" class="w-6 h-4 rounded-[4px]">

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
