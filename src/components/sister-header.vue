<template>
    <el-row justify="center" p="2em">
        <el-col :xl="3" :lg="3" :md="4" :sm="4" :xs="5">
            <div>logo</div>
        </el-col>

        <el-col :xl="8" :lg="8" :md="8" :sm="12" :xs="12">
            <sister-routes
                justify="start"
                items="center"
                item-position="start"
                :span="24"
                :xl="8"
                :lg="4"
                :md="4"
                :sm="4"
                :xs="12"
            />
        </el-col>
        <el-col
            :xl="4"
            :lg="8"
            :md="8"
            :sm="8"
            :xs="7"
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
