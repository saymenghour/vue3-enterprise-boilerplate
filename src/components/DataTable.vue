<template>
  <el-table
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
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts" setup generic="T extends Record<string, any>">

export interface Column<T> {
  key?: string;
  title: string;
  dataIndex: keyof T;
  width?: string | number;
}

const handleEdit = (index: number, row: T) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: T) => {
  console.log(index, row);
};

const { data, columns } = defineProps<{
  data?: T[];
  columns: Column<T>[];
}>();
</script>
