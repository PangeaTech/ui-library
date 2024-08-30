import { Button, Dropdown, PasswordInput, TextArea, TextField } from 'ui-library';
import { useForm, Controller } from 'react-hook-form';
import { Box } from '@mui/material';

export interface IJsonData {
  fields: Array<{
    name: string;
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    componentType: string;
    rules?: {
      required?: string;
      pattern?: {
        value: RegExp | string;
        message: string;
      };
      minLength?: {
        value: number;
        message: string;
      };
      maxLength?: {
        value: number;
        message: string;
      };
    };
    helperText?: string;
    options?: { label: string; value: string }[];
  }>;
}

interface IJsonFormProps {
  onSubmit: (data: any) => void;
  jsonData: IJsonData;
  submitButtonLabel?: string;
}
const JsonForm: React.FC<IJsonFormProps> = ({ onSubmit, jsonData, submitButtonLabel }) => {
  const { handleSubmit, control, watch } = useForm();

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
                helperText={
                  invalid
                    ? error?.message
                    : componentType === 'password'
                      ? 'Must include at least 1 lowercase, 1 uppercase, and 1 special character'
                      : ''
                }
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
        <Button type="submit" className="my-3 w-full">
          {submitButtonLabel || 'Submit'}
        </Button>
      </div>
    </Box>
  );
};

export default JsonForm;
