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
                    <div class="vm flex-between">
                        <span>
                            {{ record.for }}
                        </span>
                        <el-tag
                            round
                            :type="record.cost > 0 ? 'success' : 'danger'"
                        >
                            <span text="1.3em">{{ record.cost }}</span>
                        </el-tag>
                    </div>
                </template>
                <span>剩余： {{ record.remain }}元 </span>
            </el-card>
        </el-timeline-item>
    </el-timeline>
</template>

<script setup lang="ts">
import { usePocketRecord } from '@composable/record'
</script>

<style lang="scss" scoped></style>
