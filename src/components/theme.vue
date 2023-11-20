<template>
    <div
        @click="toggleDark()"
        class="c-p text-3xl"
        :class="isDark ? 'i-mdi:weather-night' : 'i-mdi:white-balance-sunny'"
    ></div>
</template>

<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
