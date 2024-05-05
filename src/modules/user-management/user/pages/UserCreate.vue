<template>
  <Breadcrumb :title="t('label.userManagement.title')" />
  <Title :name="t('label.userManagement.user.addNew.title')" />

  <form
    class="w-2/4"
    @submit="onSubmit"
  >
    <Grid>
      <Input
        name="username"
        label="Username"
        placeholder="Please enter username"
      />
      <Input
        name="username"
        label="Username"
        placeholder="Please enter username"
      />
      <Input
        name="username"
        label="Username"
        placeholder="Please enter username"
      />
    </Grid>

    <Button type="submit">
      {{ t('button.submit') }}
    </Button>
  </form>
</template>

<script setup lang="ts">
import { Breadcrumb, Button, Input, Grid, Title } from '@/components';
import { useI18n } from '@/hooks';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { useForm } from 'vee-validate';

const { t } = useI18n();

const formSchema = toTypedSchema(
  z.object({
    username: z.string({ message: 'This field is required' }).min(2).max(50)
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema
});

const onSubmit = handleSubmit((values) => {
  console.log('values', values);
});
</script>

<style scoped></style>
