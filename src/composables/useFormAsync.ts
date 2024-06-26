import { useForm, type FormOptions } from 'vee-validate';
import { ref, toRaw, watch, type Ref } from 'vue';

type FormAsyncOptions<T extends Record<string, any>> = FormOptions<T> & {
  initialValues?: Ref<T | undefined>;
};

export function useFormAsync<T extends Record<string, any>>(opt: FormAsyncOptions<T>) {
  const form = useForm<T>(opt);

  if (process.env.NODE_ENV === 'development') {
    watch(form.values, () => {
      console.log('form values', toRaw(form.values));
    });

    watch(form.errors, () => {
      if (Object.keys(form.errors.value).length) {
        console.error('form errors', form.errors.value);
      }
    });
  }

  watch(opt.initialValues || ref({}), (newData) => {
    form.setValues(newData as any);
  });

  return form;
}
