<template>
    <el-config-provider :locale="locale">
        <RouterView />
    </el-config-provider>
</template>

<script setup lang="ts">
const locale_store = LocaleStore()
const locale = computed(() => {
    return useSupportedUILocale.find(
        (item: SupportedUILocale) => item.language === locale_store.getLocale
    )?.locale
})
</script>
