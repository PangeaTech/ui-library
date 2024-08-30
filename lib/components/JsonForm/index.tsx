import { Button, Dropdown, PasswordInput, TextArea, TextField } from 'ui-library';
import { useForm, Controller } from 'react-hook-form';
import { Box } from '@mui/material';
import { useEffect } from 'react';

interface IJsonFormProps {
  onSubmit: (data: any) => void;
  jsonData: any;
  submitButtonLabel?: string;
}
const JsonForm: React.FC<IJsonFormProps> = ({ onSubmit, jsonData, submitButtonLabel }) => {
  const { handleSubmit, control, watch, trigger } = useForm();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        trigger('confirmPassword');
      }
      return;
    }
    if (password) {
      trigger('password');
    }
  }, [password, confirmPassword]);

  const renderElements = (componentType: string, data: any) => {
    switch (componentType) {
      case 'textField':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data.rules}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                label={data.label}
                type={data.type}
                required={data.required}
                placeholder={data.placeholder}
                {...field}
                error={invalid}
                helperText={invalid ? error?.message : ''}
                fullWidth
              />
            )}
          />
        );
      case 'password':

      case 'confirmPassword':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={{
              ...data.rules,
              validate: (value) => value === watch('password') || 'Passwords do not match'
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <PasswordInput
                label={data.label}
                type={data.type}
                required={data.required}
                placeholder={data.placeholder}
                error={invalid}
                helperText={invalid ? error?.message : ''}
                {...field}
              />
            )}
          />
        );
      case 'dropdown':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data.rules}
            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
              <Dropdown
                label={data.label}
                options={data.options}
                required={data.required}
                value={value}
                onChange={(_e, InputValue) => onChange(InputValue)}
                error={invalid}
                helperText={invalid ? error?.message : ''}
              />
            )}
          />
        );
      case 'textArea':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data?.rules}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextArea label={data.label} {...field} error={invalid} helperText={invalid ? error?.message : ''} fullWidth />
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
      {jsonData.fields.map((field: any) => {
        return <div>{renderElements(field.componentType, field)}</div>;
      })}
      <div className="flex justify-center max-w-[16.5rem]">
        <Button type="submit" className="my-1 w-full">
          {submitButtonLabel || 'Submit'}
        </Button>
      </div>
    </Box>
  );
};

export default JsonForm;
