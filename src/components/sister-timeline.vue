<template>
    <el-timeline>
        <el-timeline-item
            v-for="(record, index) in usePocketRecord"
            :key="index"
            :timestamp="record.date"
            :color="record.cost > 0 ? 'green' : 'red'"
        >
            <el-card>
                <template #header>
                    <span>
                        {{ record.for }}
                    </span>
                </template>
                <div class="flex-between">
                    <span>剩余： {{ record.remain }}元 </span>
                    <el-tag
                        size="small"
                        round
                        :type="record.cost > 0 ? 'success' : 'danger'"
                    >
                        <span text="1.3em">{{ record.cost }}</span>
                    </el-tag>
                </div>
            </el-card>
        </el-timeline-item>
    </el-timeline>
</template>

<script setup lang="ts">
import { usePocketRecord } from '@composable/record'
</script>

<style lang="scss" scoped></style>
