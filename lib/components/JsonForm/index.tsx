import Typography from '@mui/material/Typography';
import { Dropdown, PasswordInput, TextArea, TextField } from 'ui-library';

const jsonData = {
  form: {
    title: 'Json Form Builder',
    fields: [
      {
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'Enter your email',
        element_type: 'textField'
      },
      {
        label: 'Password',
        type: 'password',
        required: true,
        error: false,
        placeholder: 'Enter your password',
        element_type: 'password'
      },
      {
        label: 'Dropdown',
        type: 'dropdown',
        required: true,
        value: 'Option 1',
        element_type: 'dropdown',
        options: [
          {
            label: 'Option 1',
            value: 'Option 1'
          },
          {
            label: 'Option 2',
            value: 'Option 2'
          },
          {
            label: 'Option 3',
            value: 'Option 3'
          }
        ]
      },
      {
        label: 'TextArea',
        type: 'textArea',
        required: true,
        element_type: 'textArea',
      }
    ]
  }
};
const JsonForm = () => {
  const renderElements = (elementType: string, data: any) => {
    switch (elementType) {
      case 'textField':
        return (
          <TextField
            label={data.label}
            type={data.type}
            required={data.required}
            placeholder={data.placeholder}
            onChange={(e) => console.log(e.target.value)}
          />
        );
      case 'password':
        return (
          <PasswordInput
            label={data.label}
            onChange={(value) => console.log(value)}
            error={!!data.error}
            helperText={data.error ? 'Password is required' : ''}
            variant="outlined"
          />
        );
      case 'dropdown':
        return <Dropdown label={data.label} value={data.value} disabled={data.disabled} onChange={(_e, value) => console.log(value)} options={data.options} isSelect={true} />;
      case 'textArea':
        return <TextArea label={data.label} onChange={(e) => console.log(e.target.value)} disabled={data.disabled} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Typography variant="h5" fontWeight={500}>{jsonData.form.title}</Typography>
      {jsonData.form.fields.map((field) => {
        return renderElements(field.element_type, field);
      })}
    </div>
  );
};

export default JsonForm;
