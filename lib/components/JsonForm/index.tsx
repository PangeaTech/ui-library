import React from 'react';
import { Button, Checkbox, Date, Dropdown, PasswordInput, Radio, TextArea, TextField } from 'ui-library';
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
    layout?: {
      row?: number;
      col?: number;
      colSpan?: number;
    };
    styles?: React.CSSProperties;
    props?: any; // Additional props for components
  }>;
}

interface IJsonFormProps {
  onSubmit: (data: any) => void;
  jsonData: IJsonData;
  submitButtonLabel?: string;
  loading?: boolean;
  submitButtonProps?: any; // Additional props for the submit button
  initialValues?: Record<string, any>; // Added initialValues prop
}

const JsonForm: React.FC<IJsonFormProps> = ({ onSubmit, jsonData, submitButtonLabel, loading, submitButtonProps, initialValues = {} }) => {
  const { handleSubmit, control, watch } = useForm({ defaultValues: initialValues }); // Set initial values here
  console.log(initialValues);

  const handleFormSubmit = (data: any) => {
    console.log('Form data submitted:', data);
    onSubmit(data);
  };

  const renderElement = (data: any) => {
    const customStyles = data.styles || {};
    const additionalProps = data.props || {};

    const gridStyles = {
      gridRow: data.layout?.row || 'auto',
      gridColumn: data.layout?.colSpan ? `span ${data.layout.colSpan}` : 'span 12'
    };

    switch (data.componentType) {
      case 'textField':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data.rules}
            render={({ field, fieldState: { invalid, error } }) => (
              <Box style={{ ...gridStyles, ...customStyles }}>
                <TextField
                  label={data.label}
                  type={data.type}
                  required={data.required}
                  placeholder={data.placeholder}
                  {...field}
                  error={invalid}
                  helperText={invalid ? error?.message : ''}
                  fullWidth
                  {...additionalProps} // Apply additional props
                />
              </Box>
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
              <Box style={{ ...gridStyles, ...customStyles }}>
                <PasswordInput
                  label={data.label}
                  type={data.type}
                  required={data.required}
                  placeholder={data.placeholder}
                  {...field}
                  error={invalid}
                  helperText={invalid ? error?.message : ''}
                  fullWidth
                  {...additionalProps} // Apply additional props
                />
              </Box>
            )}
          />
        );
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
              <Box style={{ ...gridStyles, ...customStyles }}>
                <PasswordInput
                  label={data.label}
                  type={data.type}
                  required={data.required}
                  placeholder={data.placeholder}
                  {...field}
                  error={invalid}
                  helperText={invalid ? error?.message : ''}
                  fullWidth
                  {...additionalProps} // Apply additional props
                />
              </Box>
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
              <Box style={{ ...gridStyles, ...customStyles }}>
                <Dropdown
                  label={data.label}
                  options={data.options}
                  required={data.required}
                  value={value}
                  onChange={(_e, InputValue) => onChange(InputValue)}
                  error={invalid}
                  helperText={invalid ? error?.message : ''}
                  fullWidth
                  {...additionalProps} // Apply additional props
                />
              </Box>
            )}
          />
        );
      case 'checkbox':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data.rules}
            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
              <Box style={{ ...gridStyles, ...customStyles }}>
                <Checkbox
                  label={data.label}
                  checked={!!value}
                  onChange={(e) => onChange(e.target.checked)}
                  error={invalid}
                  helperText={invalid ? error?.message : ''}
                  {...additionalProps}
                />
              </Box>
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
              <Box style={{ ...gridStyles, ...customStyles }}>
                <TextArea
                  label={data.label}
                  {...field}
                  error={invalid}
                  helperText={invalid ? error?.message : ''}
                  fullWidth
                  {...additionalProps} // Apply additional props
                />
              </Box>
            )}
          />
        );
      case 'radio': // Add a case for rendering the radio button group
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data.rules}
            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
              <Box style={{ ...gridStyles, ...customStyles }}>
                <Radio
                  row={true}
                  label={data.label}
                  options={data.options || []} // Pass the options for the radio buttons
                  value={value || ''}
                  onChange={onChange}
                  RadioProps={additionalProps} // Apply additional props
                />
                {invalid && <p style={{ color: 'red' }}>{error?.message}</p>}
              </Box>
            )}
          />
        );
      case 'date':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={data.rules}
            render={({ field, fieldState: { invalid, error } }) => (
              <Box style={{ ...gridStyles, ...customStyles }}>
                <Date
                  label={data.label}
                  value={field.value || ''}
                  onChange={field.onChange}
                  minDate={data.props?.minDate}
                  required={data.required}
                  error={invalid}
                  helperText={invalid ? error?.message : ''}
                  {...additionalProps} // Apply additional props
                />
              </Box>
            )}
          />
        );
      case 'button':
        return (
          <Box style={{ ...gridStyles, ...customStyles }}>
            <Button
              type="submit"
              className="my-3 w-full"
              loading={loading}
              {...submitButtonProps} // Apply additional props
            >
              {data.label}
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(handleFormSubmit)}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '12px' // Adjust spacing between items
      }}
    >
      {jsonData.fields.map((field: any, index: number) => (
        <React.Fragment key={index}>{renderElement(field)}</React.Fragment>
      ))}
      <Box style={{ gridColumn: 'span 12', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
        <Button type="submit" className="my-3 w-full" loading={loading} {...submitButtonProps}>
          {submitButtonLabel || 'Submit'}
        </Button>
      </Box>
    </Box>
  );
};

export default JsonForm;
