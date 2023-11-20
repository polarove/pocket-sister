<template>
    <el-row justify="center" items="center" p="2em">
        <el-col :xl="4" :lg="4" :md="6" :sm="12" :xs="12">
            <sister-logo />
        </el-col>

        <el-col :xl="12" :lg="12" :md="8" :sm="6" :xs="6">
            <sister-routes
                justify="start"
                items="center"
                item-position="center"
                :span="24"
                :xl="4"
                :lg="4"
                :md="4"
                :sm="12"
                :xs="12"
            />
        </el-col>
        <el-col
            :xl="4"
            :lg="4"
            :md="4"
            :sm="6"
            :xs="6"
            class="inline-align text-end"
        >
            <sister-locale />
            <sister-theme size="1.75em" class="ml-1em" />
        </el-col>
    </el-row>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.inline-align {
    > * {
        display: inline-block;
        vertical-align: middle;
    }
}
</style>
