span
<template>
  <sister-header />
  <full-page>
    <full-page-item flex justify-center>
      <div class="lg:w-85vw lt-lg:w-90vw mt-1em trans">
        <sister-timeline />
      </div>
    </full-page-item>
  </full-page>
  <sister-footer />
</template>

<script setup lang="ts">
const seo = {
  title: '妹妹的记事本',
  description: 'seo描述',
  keywords: '妹妹的记事本，记事本，日记',
}

useSeoMeta(seo)
</script>

<style lang="scss" scoped>
@media screen and (max-width: 576px) {
  .trans {
    transform: translateX(-5%);
  }
}
</style>
