import { FormProvider, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

interface ICustomFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}

const CustomForm = ({ children, onSubmit }: ICustomFormProps) => {
  const methods = useForm();

  const CSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(CSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CustomForm;
