# PangeaTech UI Library

## Overview

The PangeaTech UI Library is a custom React component library designed to streamline the development of applications across Pangea. It provides a set of reusable and customizable UI components to enhance productivity and maintain consistency across projects.

## Installation

To install the library, use the following command:

```bash
npm i @pangeatech/ui-library
```

## Usage

### Importing Components

You can import individual components from the library as needed. Here are examples for the `Button` and `TextField` components:

#### Button Component

```jsx
import React from 'react';
import { Button } from '@pangeatech/ui-library';

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleButtonClick}>
      Click Me
    </Button>
  );
};

export default App;
```

#### TextField Component

```jsx
import React, { useState } from 'react';
import { TextField } from '@pangeatech/ui-library';

const App = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldError, setTextFieldError] = useState('');

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
    if (event.target.value === '') {
      setTextFieldError('This field is required');
    } else {
      setTextFieldError('');
    }
  };

  return (
    <TextField
      label="Example TextField"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      error={!!textFieldError}
      helperText={textFieldError ? 'This field is required' : ''}
      variant="outlined"
    />
  );
};

export default App;
```

### Importing Pages

You can also import entire pages from the library:

```jsx
import React from 'react';
import { AuthPage } from '@pangeatech/ui-library/pages';

const App = () => {

  const handleSubmit=(data: any) => {
      
  }
  return (
    <div>
      <AuthPage mode='login' onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default App;
```

### Exported Modules

The library exports the following modules which can be used in your React projects:

- **Main Module**: 
  ```jsx
  import { Slider, TextField } from '@pangeatech/ui-library';
  ```

- **Pages Module**:
  ```jsx
  import { AuthPage } from '@pangeatech/ui-library/pages';
  ```

- **Styles**:
  ```jsx
  import '@pangeatech/ui-library/styles.css';
  ```

## Props and Component Testing

To check the props or test the components, you can use the following link: [Component Props and Testing](https://laurasia.turtlemoves.ai/). Use the control tab to view component props.

## Storybook

For a comprehensive view of all components and their usage, you can refer to the Storybook documentation. Install Storybook CLI using:

```bash
npx @storybook/cli
```

To start Storybook, use the following command:

```bash
npm run storybook
```

## Development

To run the repo:

```bash
npm run dev
```
For Build:

```bash
npm run build
```

For local Testing of the package:
1. Run the build command. 
```bash
 npm run build 
 ```

2. Run: 
```bash 
npm pack
``` 

3. Copy the path of .tgz file eg: "D:\*\*\pangeatech-ui-library-0.0.*.tgz"

4. Go to the terminal of your react project and run: 

```bash
npm i "D:\*\*\pangeatech-ui-library-0.0.*.tgz"
```