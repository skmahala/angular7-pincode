<p align="center">
  <h1 align="center">Angular Custom OTP Input-Template</h1>
</p>

Custom otp-input template for Angular, it look likes otp-input template as mobile.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Callback](#function)
- [Example](#example)
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

```ts
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
<angular7-pincode >
</angular7-pincode>
```

<a name="options">

## Options

### directive inputs

- **[size]**: number
  length of otp input, default `4`

- **[class]**: string
  your custom class on otp input




<a name="function"> 

### Callback functions

- **(onFillAll)**: function
 return a otp string on every keypress


<a name="example"> 

 ## examples

### default settings

```html
<angular7-pincode (onFillAll)="OnFillAll($event)">
</angular7-pincode>
```
```ts
OnFillAll(data:any){
  console.log(data)
}
```

### with size and custom class option

```html
<angular7-pincode [size]="6" [class]="your-class" (onFillAll)="OnFillAll($event)">
</angular7-pincode>
```
```ts
OnFillAll(data:any){
  console.log(data)
}
```

<a name="issues"/>

## Issues

If you identify any errors in the library, or have an idea for an improvement, please open an [issue](https://github.com/skmahala/angular7-pincode/issues).

<a name="author"/>

## Author

- Sunil Kumar [Github](https://github.com/skmahala)