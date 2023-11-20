<template>
    <div class="full-page">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.full-page {
    width: 100vw;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
</style>
