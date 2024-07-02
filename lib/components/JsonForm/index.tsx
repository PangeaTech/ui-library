import Typography from '@mui/material/Typography';
import { Button, Dropdown, PasswordInput, TextArea, TextField } from 'ui-library';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const jsonData = {
  form: {
    title: 'Json Form Builder',
    fields: [
      {
        label: 'Email',
        name: 'email',
        type: 'email',
        required: true,
        placeholder: 'Enter your email',
        componentType: 'textField'
      },
      {
        label: 'Password',
        name: 'password',
        type: 'password',
        required: true,
        error: false,
        placeholder: 'Enter your password',
        componentType: 'password'
      },
      {
        label: 'Dropdown',
        type: 'dropdown',
        name: 'ageOptions',
        required: true,
        value: 'Option 1',
        componentType: 'dropdown',
        options: [
          {
            label: 'young',
            value: 'less than 18'
          },
          {
            label: 'Adult',
            value: 'Adult 18 - 60'
          },
          {
            label: 'Old',
            value: 'Older than 60'
          }
        ]
      },
      {
        label: 'TextArea',
        name: 'description',
        type: 'textArea',
        componentType: 'textArea'
      }
    ]
  }
};

const JsonForm = () => {
  const { handleSubmit, control } = useForm();

  const renderElements = (componentType: string, data: any) => {
    switch (componentType) {
      case 'textField':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={{ required: `Please enter ${data.label}` }}
            render={({ field, fieldState: { invalid, error } }) => (
              <>
                <TextField
                  label={data.label}
                  type={data.type}
                  required={data.required}
                  placeholder={data.placeholder}
                  {...field}
                  error={invalid}
                  helperText={invalid ? (error?.type === 'required' ? `Please enter ${data.label}` : `Please enter a valid ${data.label}`) : ''}
                />
              </>
            )}
          />
        );
      case 'password':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={{ required: 'Please enter your password', minLength: 8 }}
            render={({ field, fieldState: { invalid, error } }) => (
              <>
                <PasswordInput
                  label={data.label}
                  type={data.type}
                  required={data.required}
                  placeholder={data.placeholder}
                  error={invalid}
                  helperText={invalid ? (error?.type === 'required' ? 'Please enter your password' : 'Password must be at least 8 characters') : ''}
                  {...field}
                />
              </>
            )}
          />
        );
      case 'dropdown':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={{ required: 'Please select an option' }}
            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
              <>
                <Dropdown
                  label={data.label}
                  options={data.options}
                  required={data.required}
                  value={value}
                  onChange={(_e, { value }) => onChange(value)}
                  errormsg={invalid ? error?.message : ''}
                />
              </>
            )}
          />
        );
      case 'textArea':
        return (
          <Controller
            name={data.name}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'This field cannot be empty!'
              },
              maxLength: {
                value: 100,
                message: 'Length of text exceeds the allowed limit'
              }
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextArea label={data.label} {...field} errormsg={invalid ? error?.message : ''} />
            )}
          />
        );
      default:
        return null;
    }
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" fontWeight={500}>
          {jsonData.form.title}
        </Typography>
        {jsonData.form.fields.map((field) => {
          return renderElements(field.componentType, field);
        })}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default JsonForm;
