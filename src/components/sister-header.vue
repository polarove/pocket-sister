<template>
    <el-row justify="center" items="center" m="lt-lg:1em lg:2em">
        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="24">
            <sister-logo />
        </el-col>

        <el-col :xl="10" :lg="10" :md="10" :sm="12" :xs="12" mt="lt-sm:1em">
            <sister-routes
                justify="start"
                items="center"
                item-position="start"
                :span="24"
                :xl="6"
                :lg="6"
                :md="6"
                :sm="6"
                :xs="12"
            />
        </el-col>
        <el-col
            :xl="4"
            :lg="4"
            :md="4"
            :sm="4"
            :xs="12"
            mt="lt-md:1em"
            text="end"
        >
            <div class="flex-end">
                <sister-locale /> <sister-theme size="1.75em" class="ml-1em" />
            </div>
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
