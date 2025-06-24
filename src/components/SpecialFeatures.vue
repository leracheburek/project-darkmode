<template>
    <div class="bg-gray-100  dark:bg-black">
        <h1 class="text-center text-[36px] font-montserrat font-semibold pt-[112px] pb-[80px]">
            What makes us special?
        </h1>

        <div class="flex gap-[24px] overflow-x-auto scrollbar-hide scroll-smooth" ref="scrollContainer">
            <div v-for="card in cards" :key="card.id"
                class="w-[800px] h-[300px] flex-shrink-0  rounded-[20px] border border-[#ccc] bg-white p-[24px] flex justify-between">
                <div class="pt-[32px] w-[54%] flex flex-col gap-[16px]">
                    <h2 class="text-[32px] font-montserrat font-semibold dark:text-black">
                        {{ card.header }}
                    </h2>
                    <p class="text-[14px] font-ibm font-normal dark:text-black">{{ card.content }}</p>
                </div>
                <img :src="card.img" alt="" />
            </div>
        </div>

        <div class="flex justify-center gap-4 mt-6">
            <button @click="scrollLeft" class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                left
            </button>
            <button @click="scrollRight" class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                right
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Img from '../assets/img/Placeholder Image.svg'

const cards = [
    {
        id: 1,
        header: 'Flexible implementation process',
        content: 'We can adapt to various requirements for our management process and progress reporting. We do not force any communication form or frequency of meetings on our customers.',
        img: Img
    },
    {
        id: 2,
        header: 'Flexible implementation process',
        content: 'We can adapt to various requirements for our management process and progress reporting. We do not force any communication form or frequency of meetings on our customers.',
        img: Img
    },
    {
        id: 3,
        header: 'Flexible implementation process',
        content: 'We can adapt to various requirements for our management process and progress reporting. We do not force any communication form or frequency of meetings on our customers.',
        img: Img
    },
    {
        id: 4,
        header: 'Flexible implementation process',
        content: 'We can adapt to various requirements for our management process and progress reporting. We do not force any communication form or frequency of meetings on our customers.',
        img: Img
    }
]

const scrollContainer = ref(null)

const scrollLeft = () => {
    scrollContainer.value.scrollBy({
        left: -320,
        behavior: 'smooth'
    })
}

const scrollRight = () => {
    scrollContainer.value.scrollBy({
        left: 320,
        behavior: 'smooth'
    })
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
