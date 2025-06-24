<template>
    <section class="max-w-[1280px] m-auto pt-[112px]">
        <div class="flex flex-col justify-center items-center gap-[16px] pb-[80px] ">
            <h1 class="text-[48px] font-montserrat font-semibold">How can we help you?</h1>
            <p class="text-[18px] text-center font-ibm font-normal w-[55%] leading-[150%]">Through our experience in
                developing e-commerce and Fintech applications we have learned how to build
                almost any service available through the web. We have mastered building and maintaining IT
                infrastructure for ourselves and our clients. Now we can use our skills with You in mind.</p>
        </div>
        <div class="border-[1px] border-gray-300 flex rounded-[20px]">
            <div>
                <div class="w-[420px] h-[146.2px] border-[1px] border-gray-300 flex flex-col justify-center pl-[32px] bg-[#9999991A] dark:bg-black "
                    v-for="item in sectoin" :key="item.id">
                    <div class="flex gap-[16px] ">
                        <img v-if="item.icon" :src="item.icon" alt="">
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/img/PictureFrame.svg" alt="">
                <div class="pl-[64px] pt-[24px] flex flex-col gap-[24px]">
                    <h2 class="text-[32px] font-montserrat font-semibold">Web App Development</h2>
                    <p class="text-[18px] font-ibm font-normal w-[90%]">From simple business portfolios to complex
                        interactive
                        web applications, we can realize almost any service available through the Web. We will take care
                        of the aesthetics, accessibility, stability and performance of your web application.</p>
                    <Button type="buttonHeader" class="w-[149px] h-[43px]">Learn more</Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import WebApp from '../assets/img/webApp.svg'
import Ecommerce from '../assets/img/e-commerce.svg'
import Business from '../assets/img/business.svg'
import Hosting from '../assets/img/hosting.svg'
import ITconsulting from '../assets/img/it-consulting.svg'
import Button from './ui/Button.vue';

const sectoin = ref([
    {
        id: 1,
        name: 'Web App Development',
        icon: WebApp
    },
    {
        id: 2,
        name: 'E-commerce',
        icon: Ecommerce
    },
    {
        id: 3,
        name: 'Business Management and ERP Systems',
        icon: Business
    },
    {
        id: 4,
        name: 'Hosting and IT Infrastructure',
        icon: Hosting
    },
    {
        id: 5,
        name: 'IT Consulting',
        icon: ITconsulting
    }
])

</script>