<template>
    <div
        @click="toggleDark()"
        cursor="pointer"
        :text="size"
        :class="isDark ? 'i-mdi:weather-night' : 'i-mdi:white-balance-sunny'"
        class="toggle"
    ></div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@composable/theme'
defineProps<{ size: string }>()
</script>

<style lang="scss" scoped>
.toggle {
    &:hover {
        color: var(--el-color-primary);
    }
}
</style>
