<template>
    <el-row :justify="justify" :items="items">
        <el-col
            :span="span"
            :xl="xl"
            :lg="lg"
            :md="md"
            :sm="sm"
            :xs="xs"
            v-for="(route, index) in router.options.routes"
            :key="index"
            :text="itemPosition"
        >
            <RouterLink :to="{ name: route.name }">
                <el-button
                    type="primary"
                    round
                    size="small"
                    v-if="isCurrentRoute(route.name)"
                >
                    {{ $t((route.name as string) + '.name') }}
                </el-button>
                <el-text v-else>
                    <text-underline
                        :content="$t((route.name as string) + '.name')"
                    />
                </el-text>
            </RouterLink>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
const router = useRouter()
const isCurrentRoute = (route_name: RouteRecordName | undefined) => {
    return useRoute().name === route_name
}

defineProps({
    justify: {
        type: String || null,
    },
    items: {
        type: String || null,
    },
    itemPosition: {
        type: String || null,
    },
    xs: {
        type: Number || null,
        default: null,
    },
    sm: {
        type: Number || null,
        default: null,
    },
    md: {
        type: Number || null,
        default: null,
    },
    lg: {
        type: Number || null,
        default: null,
    },
    xl: {
        type: Number || null,
        default: null,
    },
    span: {
        type: Number,
        default: 24,
    },
})
</script>

<style lang="scss" scoped></style>
