<template>
    <span class="text"> {{ content }} </span>
</template>

<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<style lang="scss" scoped>
.text {
    position: relative;
    user-select: none;
    white-space: nowrap;
    &:hover {
        color: var(--el-color-primary);
    }
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        bottom: 0;
        width: 0px;
        height: 1px;
        background-color: var(--el-color-primary);
        border-radius: 5px;
    }
    &:hover::before {
        width: 100%;
        transition: width 0.15s ease-in-out;
    }
}
</style>
