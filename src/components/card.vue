<template>
    <div class="wrapper" @mouseleave="reset" @mousemove="rotate($event)">
        <div class="rotate" ref="target">
            <slot> </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref } from 'vue'
import { useElementBounding } from '@vueuse/core'
import { useElementTransform } from '@vueuse/motion'

const target = ref<HTMLElement | null>(null)
const { width, height } = useElementBounding(target)
const { transform, stop } = useElementTransform(target)

const rotate = (event: any) => {
    let X = event.offsetX / width.value.toFixed(2)
    let Y = event.offsetY / height.value.toFixed(2)
    let rX = (X - 0.5) * 25
    let rY = -(Y - 0.5) * 25

    transform.rotateX = rY
    transform.rotateY = rX
}

const init = () => {
    transform.rotateX = 0
    transform.rotateY = 0
    transform.rotateZ = 0
}
init()

const reset = () => {
    transform.rotateX = 0
    transform.rotateY = 0
}
</script>

<style scoped lang="scss">
.wrapper {
    width: 500px;
    height: 720px;
    transform-style: preserve-3d;
    perspective: 800px;
    user-select: none;

    &:hover {
        cursor: pointer;
    }

    .rotate {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        transition: transform 0.5s ease-out;
        overflow: hidden;
    }
}
</style>
