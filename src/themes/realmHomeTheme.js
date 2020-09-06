import { withTheme } from '@material-ui/core';
import { authorize } from 'passport';
const styles = (theme) => ({
  realmCoverContainer: {
    'text-align': 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  // realmCoverPaper: {
  //   'text-align': 'center',
  //   width: '100%',
  //   height: '100%',
  //   'border-radius': '7px',
  //   justifyContent: 'space-around',
  //   overflow: 'hidden',
  //   paddingBottom: '-10px',
  // },
  realmCover: {
    'text-align': 'center',
    width: '92%',
    'border-radius': '7px',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: '-10px',
  },

  realmTitle: {
    font: '400 20px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 0px 0px 0px',
    'text-align': 'center',
  },
  realmDescription: {
    font: '300 12px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 10% 0px 10%',
    margin: '-1% 0px 0px 0px',
    'text-align': 'left',
  },
  formDescriptionContainer: {
    width: '85%',
    // 'text-align': 'center',
    margin: 'auto',
    borderTop: '#1f3556 solid 1px',
    paddingTop: '15px',
    borderBottom: '#1f3556 solid 1px',
  },
  formDescription: {
    font: '300 14px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 10% 0px 5%',
    margin: '-1% 0px 0px 0px',
    width: '90%',
    'text-align': 'left',
    // borderBottom: '#1f3556 solid 1px',
  },
  boldTOC: { font: '500 12px Poppins, sans-serif' },
  estimatedTimeOfCompletion: {
    font: '300 14px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 10% 0px 5%',
    // margin: '1% 10px 0px 0px',
    width: '90%',
    'text-align': 'left',
    // borderBottom: '#1f3556 solid 1px',
  },
  realmTableofContent: {
    padding: '0px 10% 0px 10%',
    margin: '5% 0px 2% 0px',
  },
  realmTableofContentTitle: {
    font: '400 22px Poppins, sans-serif',
    color: '#1f3556',
    // padding: '0px 10% 0px 10%',
    margin: '0px 0px 5px 0px',
    'text-align': 'center',
  },
  realmTableofContentSectionContainer: {
    display: 'flex',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
    padding: '5px 0px 10px 0px',
    margin: '0px 0px 10px 0px',
    borderBottom: '#1f3556 solid 1px',
    // 'border-radius': '5px',
    'text-align': 'left',
    width: '100%',
    '&:hover > div': {
      color: '#457b9d',
    },
  },
  realmTableofContentSection: {
    font: '400 14px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 0px 0px 0px',
    margin: '5px 0px 0px 0px',
    'text-align': 'left',
    width: '90%',
    display: 'inline-block',
  },
  realmTableofContentSectionIcon: {
    font: '400 10px Poppins, sans-serif',
    color: '#1f3556',
    display: 'inline-block',
  },
  realmButton: {
    font: '300 14px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '70%',
    padding: '10px 0px 10px 0px',
    margin: '0px 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  realmButtonContainer: {
    // display: 'flex',
    padding: '5px 0px 10px 0px',
    margin: '5% 0px -100% 0px',
    width: '100%',
    'text-align': 'center',
  },

  formButtonContainer: {
    padding: '5px 0px 0px 0px',
    margin: '30% 0px -100% 0px',

    width: '100%',
    'text-align': 'center',
  },
  // cssLabel: {
  //   color: '#1f3556',
  //   '&.Mui-focused': {
  //     color: '#1f3556',
  //   },
  //   cssOutlinedSelect: {
  //     '&$cssFocused $notchedOutline': {
  //       borderColor: `#1f3556 !important`,
  //       color: '#1f3556',
  //     },
  //   },
  // },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#1f3556 !important',
  },
  // helperText: {
  //   color: '#1f3556',
  // },
  cssOutlinedInput: {
    // padding: 0
  },
  input: {
    color: '#1f3556',
    padding: '5px 5px 5px 5px',
  },

  formContainer: { 'text-align': 'center', width: '100%' },
  QandAContainer: { 'text-align': 'center', margin: '10px 0px 20px 0px' },
  formQuestion: {
    font: '300 16px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 10% 0px 10%',
    margin: '0% 0px 10px 0px',
    // width: '90%',
    'text-align': 'center',
    // borderBottom: '#1f3556 solid 1px',
  },
  inputControl: {
    margin: '0px 0px 0px 0px',
    padding: '0px 0px 0px 0px',
    width: '60%',
    font: '300 10px Poppins, sans-serif',
    color: '#fff',
  },
});

export default styles;
