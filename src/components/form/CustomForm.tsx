import { FormProvider, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

interface ICustomFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  isReset?: boolean;
}

const CustomForm = ({ children, onSubmit, isReset = false }: ICustomFormProps) => {
  const methods = useForm();

  const CSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    if (isReset) {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(CSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CustomForm;
