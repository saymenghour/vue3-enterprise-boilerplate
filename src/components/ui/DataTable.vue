<template>
  <DataTable
    :value="dataSource"
    table-style="min-width: 50rem"  
  >
    <Column
      v-for="col of columns"
      :key="col.dataIndex"
      :field="col.dataIndex"
      :header="col.title"
      style="width: 25%"
    >
      <template #body="{ data, field }">
        <span>
          {{
            col.render
              ? col.render(data)
              : data[field] ?? (col.displayDashIfValueIsNull ? '-' : '')
          }}
          <slot
            :name="col.key"
            :row="data as T"
          />
        </span>
      </template>
    </Column>

    <template #empty>
      <span class="flex justify-center">
        No data found.
      </span>
    </template>
  </DataTable>
</template>

<script setup lang='ts' generic='T extends Record<string, any>'>
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

export type ColumnProps<T> = {
  title: string;
  width?: string | number;
  minWidth?: string | number;
  displayDashIfValueIsNull?: boolean;
  render?: (row: T) => any;
} & ({ key: string; dataIndex?: never } | { key?: never; dataIndex: keyof T & string });

type DataTableProps = {
  loading: boolean;
  dataSource?: T[];
  columns: ColumnProps<T>[];
};

defineProps<DataTableProps>();
</script>
