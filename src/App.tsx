import React, { useState } from 'react';
import { Button, Dropdown, Logo, OtpInput, PasswordInput, Radio, TextField } from 'ui-library';
import TextArea from 'ui-library/components/TextArea';
import SearchBar from 'ui-library/components/Search';
import OtpAuthPage, { IOtpAuthPageProps } from 'ui-library/pages/OtpAuthPage';
import AuthPage, { IAuthPageProps } from 'ui-library/pages/AuthPage';
import SsoAuthPage, { ISsoAuthPageProps } from 'ui-library/pages/SsoAuthPage';
import { RadioOption } from 'ui-library/components/Radio';
import ErrorPage from 'ui-library/pages/ErrorPage';
import TabsComponent from 'ui-library/components/Tabs';
import AvatarComponent from 'ui-library/components/Avatar';
import Switch from 'ui-library/components/Switch';
import Table from 'ui-library/components/Table';

const App: React.FC = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldError, setTextFieldError] = useState('');
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [dropdownError, setDropdownError] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [textAreaError, setTextAreaError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [flag, setFlag] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const options: RadioOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
    if (event.target.value === '') {
      setTextFieldError('This field is required');
    } else {
      setTextFieldError('');
    }
  };

  const handleDropdownChange = (event: any, newValue: string | null) => {
    setDropdownValue(newValue);
    if (newValue === null) {
      setDropdownError('This field is required');
    } else {
      setDropdownError('');
    }
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextAreaValue(event.target.value);
    if (event.target.value === '') {
      setTextAreaError('This field is required');
    } else {
      setTextAreaError('');
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add functionality as needed
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
    if (value === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (value.length !== 6) {
      // Assuming OTP length is 6
      setOtpError(true);
    } else {
      setOtpError(false);
    }
  };

  const otpAuthPageProps: IOtpAuthPageProps = {
    fields: [{ label: 'Email', type: 'email' }],
    logoUrl: 'https://via.placeholder.com/150',
    onSendOtp: (email: string) => {
      console.log(`OTP sent to ${email}`);
      return true;
    },
    onVerifyOtp: (otp: string) => {
      console.log(`OTP verified: ${otp}`);
      return otp === '123456'; // Dummy verification logic
    }
  };

  const handleAuthSubmit = (data: { [key: string]: string }): boolean => {
    console.log(data);
    // Implement your submission logic here
    // Return true if submission is successful, false otherwise
    return true;
  };

  const authPageProps: IAuthPageProps = {
    mode: 'forgotPassword', // Change this to "signup" or "forgotPassword" as needed
    logoUrl: 'https://via.placeholder.com/150',
    onSubmit: handleAuthSubmit
  };

  const handleSsoAuthSubmit = (): string => {
    console.log('hello');
    // Implement your submission logic here
    // Return true if submission is successful, false otherwise
    return 'token';
  };

  const ssoAuthPageProps: ISsoAuthPageProps = {
    buttonLabel: 'Login using Microsoft',
    logoUrl: 'https://via.placeholder.com/150',
    onLogin: handleSsoAuthSubmit
  };

  const toggleFlag = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> }
  ];

  const columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

  const handleRefresh = () => {
    // Logic to refresh the page or reload data
    window.location.reload();
  };

  return (
    <div>
      <div className="App">
        <h1>Textarea example</h1>
        <TextArea label="Example TextArea" value={textAreaValue} onChange={handleTextAreaChange} error={true} disabled={true} />
      </div>
      <div className="App">
        <h1>Searchbar example</h1>
        <SearchBar value={searchValue} onChange={handleSearchChange} disabled={flag} />
      </div>
      <div className="App">
        <h1>Password example</h1>
        <PasswordInput
          label="Password"
          value={passwordValue}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError ? 'Password is required' : ''}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="App">
        <h1>Otp example</h1>
        <OtpInput label="OTP" length={6} onChange={handleOtpChange} disabled={!flag} />
      </div>
      <div className="App">
        <h1>Button example</h1>
        <Button variant="contained" color="primary" fullWidth onClick={handleButtonClick} disabled={!flag}>
          Click Me
        </Button>
      </div>
      <div className="App">
        <h1>Tabs Example</h1>
        <TabsComponent tabs={tabs} variant="fullWidth" centered indicatorColor="primary" textColor="primary" />
      </div>
      <div className="App">
        <h1>Table example</h1>
        <Table columnDefs={columnDefs} rowData={rowData} />
      </div>
      <div className="App">
        <h1>Avatar Example</h1>
        <AvatarComponent alt="John Doe" initials="JD" size="small" />
        <AvatarComponent alt="Jane Doe" src="https://example.com/avatar.jpg" size="large" />
        <AvatarComponent alt="No Avatar" size={80} />
      </div>
      <div className="App">
        <h1>Radio example</h1>
        <Radio label="Select an option" options={options} value={selectedOption} onChange={handleOptionChange} RadioProps={{ color: 'primary' }} />
      </div>
      <div className="App">
        <h1>Logo Example</h1>
        <Logo logoUrl="https://example.com/logo.png" altText="Company Logo" />
      </div>
      <div className="App">
        <h1>Otp auth page example</h1>
        <OtpAuthPage {...otpAuthPageProps} />
      </div>
      <div className="App">
        <h1>Auth page example</h1>
        <AuthPage {...authPageProps} />
      </div>
      <div className="App">
        <h1>SSO auth page example</h1>
        <SsoAuthPage {...ssoAuthPageProps} />
      </div>
      <div className="App">
        <h1>Erro page example</h1>
        <ErrorPage errorMessage="Failed to load data." onRefresh={handleRefresh} />
      </div>
      <Button onClick={toggleFlag}>{flag ? 'Disable' : 'Enable'} Inputs</Button>
      <Switch label="On" checked={flag} onChange={toggleFlag} switchBgColor="" disabled={false} value={flag} isLeftLabel={true} leftlabel="Off" />
    </div>
  );
};

export default App;
