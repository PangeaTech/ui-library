import { Button, Dropdown, PasswordInput, TextArea, TextField } from 'ui-library';
import { useForm, Controller } from 'react-hook-form';
import { Box } from '@mui/material';

interface IJsonFormProps {
  onSubmit: (data: any) => void;
  jsonData: any;
}
const JsonForm: React.FC<IJsonFormProps> = ({ onSubmit, jsonData }) => {
  const { handleSubmit, control } = useForm();

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
              />
            )}
          />
        );
      case 'password':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data.rules}
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
                onChange={(_e, { value }) => onChange(value)}
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
              <TextArea label={data.label} {...field} error={invalid} helperText={invalid ? error?.message : ''} />
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
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default JsonForm;
