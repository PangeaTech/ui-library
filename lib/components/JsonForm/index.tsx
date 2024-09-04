import React from 'react';
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
}

const JsonForm: React.FC<IJsonFormProps> = ({ onSubmit, jsonData, submitButtonLabel, loading, submitButtonProps }) => {
  const { handleSubmit, control, watch } = useForm();

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
      case 'button':
        return (
          <Box style={{ ...gridStyles, ...customStyles }}>
            <Button
              type="submit"
              className="my-3 w-full"
              loading={loading}
              {...additionalProps} // Apply additional props
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
      onSubmit={handleSubmit(onSubmit)}
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
