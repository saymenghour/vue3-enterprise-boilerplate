import { useForm, type FormOptions } from "vee-validate";
import { reactive, ref, watch, type Ref } from "vue";

type FormAsyncOptions<T extends Record<string, any>> = FormOptions<T> & {
  initialValues?: Ref<T | undefined>;
};

export function useFormAsync<T extends Record<string, any>>(opt: FormAsyncOptions<T>) {
  const form = useForm<T>(opt);

  watch(opt.initialValues || ref({}), (newData) => {
    form.setValues(newData as any);
  });

  return form;
};