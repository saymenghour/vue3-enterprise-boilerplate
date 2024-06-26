import { useFormAsync } from '@/composables';
import type { RoleForm } from '../roleType';
import { toTypedSchema } from '@vee-validate/zod';
import { roleValidationSchema } from '../roleSchema';
import { useUpdateRole } from '../roleService';
import { type Ref } from 'vue';

export function useRoleEditForm(id: string, data: Ref<RoleForm | undefined>) {
  const { handleSubmit } = useFormAsync<RoleForm>({
    initialValues: data,
    validationSchema: toTypedSchema(roleValidationSchema)
  });

  const { isPending, mutate } = useUpdateRole(id as string);

  const onSubmit = handleSubmit((formValues) => {
    mutate(formValues);
  });

  return {
    isSubmitting: isPending,
    onSubmit
  };
}