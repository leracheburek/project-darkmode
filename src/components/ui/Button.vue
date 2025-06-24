<template>
  <button
    :class="[
      type === 'buttonHeader'
        ? 'font-montserrat font-semibold  border-[2px] border-[#4bfa9160] py-[8px] px-[20px] rounded-[100px]'
        : ''
    ]"
  >
   <slot></slot> 
  </button>
</template>

<script setup>
defineProps({
    type:{
        type:String,
    }
})
</script>