<template>
    <div flex="~" justify="center" items="center" h="100vh">
        <RouterLink :to="{ name: 'Home' }">
            <el-button type="primary"> Home </el-button>
        </RouterLink>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
