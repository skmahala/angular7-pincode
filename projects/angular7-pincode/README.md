<p align="center">
  <h1 align="center">Angular Custom OTP Input-Template</h1>
</p>

Custom otp-input template for Angular, it look likes otp-input template as mobile.

___

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Callback](#function)
- [Issues](#issues)
- [Author](#author)

<a name="installation"/>

## Installation

**NPM**

```bash
npm i -S angular7-pincode
```

<a name="usage"/>

## Usage

Import `Angular7PincodeModule` in your module

```js
import { Angular7PincodeModule } from 'angular7-pincode';

@NgModule({
  imports: [
    // ...
    Angular7PincodeModule
  ]
})
```

In your template

```html
<angular7-pincode>
  <!-- Content -->
</angular7-pincode>
```

<a name="options">

## Options

### directive inputs

- **[size]**: number

  length of otp input, default `4`


***

<a name="function"> 

### Callback functions

when all otp enter it emit a event function (OnFillAll) and return a otp string

<a name="issues"/>

## Issues

If you identify any errors in the library, or have an idea for an improvement, please open an [issue](https://github.com/skmahala/angular7-pincode/issues).

<a name="author"/>

## Author

- Sunil Kumar [Github](https://github.com/skmahala)