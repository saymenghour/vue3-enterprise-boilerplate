import { toTypedSchema } from '@vee-validate/zod';

import { useFormAsync } from '@/composables';
import { roleValidationSchema } from '../roleSchema';
import { useCreateRole } from '../roleService';
import type { RoleForm } from '../roleType';

export function useRoleCreateForm() {
  const { handleSubmit } = useFormAsync<RoleForm>({
    validationSchema: toTypedSchema(roleValidationSchema)
  });

  const { isPending, mutate } = useCreateRole();

  const onSubmit = handleSubmit((formValues) => {
    mutate(formValues);
  });

  return {
    isSubmitting: isPending,
    onSubmit
  };
}