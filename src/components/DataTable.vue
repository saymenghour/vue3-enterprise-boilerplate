<template>
  <el-table
    v-if="data?.length"
    :data
    style="width: 100%"
  >
    <template
      v-for="(column, index) in columns ?? []"
      :key="index"
    >
      <el-table-column
        :label="column.title"
        :width="column.width"
      >
        <template #default="scope">
          <span>{{ scope.row[column.dataIndex] }}</span>
          <slot
            :name="column.key"
            :row="scope.row as T"
          />
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts" setup generic="T extends Record<string, any>">
export type ColumnProps<T> = {
  title: string;
  width?: string | number;
} & (
    | { key: string; dataIndex?: never }
    | { key?: never; dataIndex: keyof T }
  );

type DataTableProps = {
  loading: boolean
  data?: T[];
  columns: ColumnProps<T>[];
}

defineProps<DataTableProps>();
</script>
