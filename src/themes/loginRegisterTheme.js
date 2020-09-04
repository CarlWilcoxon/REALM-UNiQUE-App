// import { withTheme } from '@material-ui/core';

const styles = (theme) => ({
  allContainer: {},
  videoContainer: {
    position: 'absolute',
    // height: '765px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    'object-fit': 'cover',
  },
  videoContainerMobile: {
    position: 'absolute',

    height: '135%',
    width: '100%',
    overflow: 'hidden',
    'object-fit': 'cover',
  },
  infinityControl: {
    'text-align': 'center',
    position: 'relative',
    width: '100%',
    margin: 'auto',
  },
  colorLogo: {
    width: '30%',
    // filter: 'grayscale(100%)',
    filter: 'brightness(0) invert(1)',
  },
  infinitytext: {
    font: '300 40px Poppins, sans-serif',
    color: '#fff',
    padding: '10px 0px 0px 0px',
  },
  leftSideFlex: {
    flexGrow: 1,
    height: '765px',
    display: 'flex',
  },
  leftSide: {
    flexGrow: 1,
    height: '765px',
    display: 'none',
  },
  rightSide: {
    flexGrow: 1,
    height: '765px',
  },
  formContainer: {
    margin: '18% auto 20px auto',
    'background-color': 'transparent',
    'text-align': 'center',
    position: 'relative',
    color: '#f1f1f1',
    width: '55%',
    padding: '40px 0px 0px 0px',
  },
  formContainerMobile: {
    margin: '5% auto 20px auto',
    'background-color': 'transparent',
    'text-align': 'center',
    position: 'relative',
    color: '#f1f1f1',
    width: '95%',
    padding: '40px 0px 0px 0px',
  },
  brandNameControl: {
    font: '600 50px Poppins, sans-serif',
    position: 'relative',
    width: '100%',
  },
  signUpControl: {
    font: '500 40px Poppins, sans-serif',
    position: 'relative',
    width: '100%',
    margin: '-10px 0px 20px 0px',
  },
  requiredControl: {
    font: '400 17px Poppins, sans-serif',
    position: 'relative',
    width: '100%',
    'text-align': 'left',
    color: 'white',
    padding: '0px 0px 0px 20px',
    margin: '-10px 0px 10px 0px',
  },
  formControl: {
    margin: '0px 0px 15px 0px',
    width: '70%',
  },
  formControlRegistrationFullWidth: {
    margin: '0px 0px -5px 0px',
    width: '93%',
  },
  formControlRegistrationFullWidthMobile: {
    margin: '0px 0px -5px 0px',
    width: '93%',
  },
  formControlRegistration: { margin: '0px 5px -5px 5px', width: '45%' },
  inputControl: {
    margin: '0px 0px 15px 0px',
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#fff',
  },
  formControlRegistrationSelector: {
    margin: '0px 5px 10px 5px',
    width: '46%',
  },
  formControlRegistrationSelectorMobile: {
    margin: '0px 5px 10px 5px',
    width: '47%',
  },

  cssLabel: {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
    cssOutlinedSelect: {
      '&$cssFocused $notchedOutline': {
        borderColor: `white !important`,
        color: 'white',
      },
    },
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important',
  },
  helperText: {
    color: 'white',
  },
  submitButtonContainer: { width: '100%', position: 'relative' },
  submitButton: {
    color: { opacity: 0 },
    // 'mix-blend-mode': 'color-burn',
    'mix-blend-mode': 'screen',
    'background-color': 'white',
    font: '600 16px Poppins, sans-serif',
    'text-transform': 'capitalize',
    border: '#fff solid 2px',
    margin: '20px auto 60px auto',
    padding: '10px auto 0px auto',
    'border-radius': '25px',
    '&:hover': {
      'background-color': { opacity: 0 },
      border: '#fff solid 2px',
      color: '#fff',
    },
    width: '70%',
    position: 'relative',
  },
  submitButtonRegister: {
    color: { opacity: 0 },
    // 'mix-blend-mode': 'color-burn',
    'mix-blend-mode': 'screen',
    'background-color': 'white',
    font: '600 16px Poppins, sans-serif',
    'text-transform': 'capitalize',
    border: '#fff solid 2px',
    margin: '5px auto 15px auto',
    padding: '15px auto 5px auto',
    'border-radius': '25px',
    '&:hover': {
      'background-color': { opacity: 0 },
      border: '#fff solid 2px',
      color: '#fff',
    },
    width: '95%',
    position: 'relative',
  },
  register: {
    'text-align': 'center',
    font: '500 15px Poppins, sans-serif',
    color: '#fff',
    width: '100%',
    position: 'relative',
    'text-decoration': 'underline',
  },
  categorySelector: {
    color: '#fff',
    marginTop: '-0px',
    width: '50px',
    '&:focus': {
      'background-color': { opacity: 0 },
      border: '#fff solid 2px',
      color: '#fff',
    },
  },
  categorySelectorMobile: {
    color: '#fff',
    marginTop: '-0px',
    width: '50px',
    '&:focus': {
      'background-color': { opacity: 0 },
      border: '#fff solid 2px',
      color: '#fff',
    },
  },
  // this is for the input and not the selector
  input: {
    color: 'white',
  },
  icon: {
    fill: 'white',
  },
  outlined: {
    border: '#fff solid 3px',
    '&:hover': {
      border: 'transparent solid 3px',
    },
    '&:focus': {
      border: 'transparent solid 3px',
    },
  },
  invisibleText: { color: 'transparent' },
});

export default styles;
