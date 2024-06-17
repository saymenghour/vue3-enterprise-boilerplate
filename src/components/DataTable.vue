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
        :min-width="column.minWidth"
      >
        <template #default="scope">
          <span>
            {{ 
              column.render 
                ? column.render(scope.row) 
                : scope.row[column.dataIndex] ?? (column.displayDashIfValueIsNull ? "-" : "") 
            }}
            <slot
              :name="column.key"
              :row="scope.row as T"
            />
          </span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts" generic="T extends Record<string, any>"> 
export type ColumnProps<T> = {
  title: string;
  width?: string | number;
  minWidth?: string | number;
  displayDashIfValueIsNull?: boolean;
  render?: (row: T) => any;
} & (
    | { key: string; dataIndex?: never }
    | { key?: never; dataIndex: keyof T }
  );

type DataTableProps = {
  loading: boolean;
  data?: T[];
  columns: ColumnProps<T>[];
}

defineProps<DataTableProps>();
</script>
