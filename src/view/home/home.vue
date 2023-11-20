span
<template>
    <sister-header />
    <full-page>
        <full-page-item flex justify-center>
            <div class="w-85vw p-1em">
                <sister-timeline />
            </div>
        </full-page-item>
    </full-page>
    <sister-footer />
</template>

<script setup lang="ts">
const seo = {
    title: '标题',
    description: 'seo描述',
    keywords: 'seo关键字',
}

useSeoMeta(seo)
</script>

<style lang="scss" scoped></style>
