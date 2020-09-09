const styles = (theme) => ({
  header: {
    'text-align': 'center',
    width: '100%',
    margin: '5% auto 5% auto',
    font: '400 30px Poppins, sans-serif',
    color: '#1f3556',
  },
  formControl: {
    margin: '0px 0px 15px 0px',
    width: '70%',
  },
  formContainer: {
    'text-align': 'center',
    width: '100%',
    margin: '-2px auto 15px auto',
    position: 'relative',
  },
  formContainerQuestion: {
    'text-align': 'center',
    width: '100%',
    margin: '5% auto 15px auto',
    position: 'relative',
  },
  formContainerVideo: {
    marginTop: '-20px',
  },

  grayPreview: {
    margin: '1.5% 0px 0px 0px',
    padding: '0px 10px 0 10px',
    font: '400 30px Poppins, sans-serif',
    color: 'gray',
  },
  preview: {
    margin: '1.5% 0px 0px 0px',
    padding: '0px 10px 0 10px',
    font: '400 30px Poppins, sans-serif',
    color: '#1f3556',
    '&:hover': {
      color: '#64add9',
    },
  },
  previewTitle: {
    font: '400 20px Poppins, sans-serif',
    color: '#1f3556',
    marginTop: '-50px auto 0px auto',
    'text-align': 'center',
  },
  clickedPreview: {
    margin: '1.5% 0px 0px 0px',
    padding: '0px 10px 0 10px',
    font: '400 30px Poppins, sans-serif',
    color: '#64add9',
    '&:hover': {
      color: '#1f3556',
    },
  },
  sectionVideoContainer: {
    position: 'relative',
    padding: ' 30px 0 56.25% 0',
    marginBottom: '-20px',
  },
  sectionVideo: {
    'text-align': 'center',
    margin: 'auto',
    width: '90%',
    height: '90%',
    'border-radius': '5px',
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  sectionImageContainer: {
    'text-align': 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  sectionImage: {
    'text-align': 'center',
    width: '92%',
    'border-radius': '7px',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: '-10px',
  },
  inputControl: {
    margin: '0px auto 15px auto',
    width: '50%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlIconSelector: {
    margin: '0px auto 15px auto',
    width: '20%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlQuestion: {
    margin: '0px auto 15px auto',
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlLink: {
    margin: '0px auto 10px 50px',
    'text-align': 'center',
    width: '50%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlTextContent: {
    margin: '10px auto 0px auto',
    'max-height': 500,
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlContentDescription: {
    margin: '20px auto -10px auto',
    'max-height': 500,
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },

  helperText: {
    color: '#1f3556',
  },
  input: {
    color: '#1f3556',
  },
  cssLabel: {
    color: '#1f3556',
    '&.Mui-focused': {
      color: '#1f3556',
    },
    cssOutlinedSelect: {
      '&$cssFocused $notchedOutline': {
        borderColor: `#1f3556 !important`,
        color: '#1f3556',
      },
    },
  },
  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#1f3556 !important',
  },
  menu: { color: 'blue' },
  adminButtonContainer: {
    // display: 'flex',
    padding: '0px 0px 10px 0px',
    margin: '0% 0px -0% 0px',
    width: '100%',
    'text-align': 'center',
  },
  adminButton: {
    font: '300 14px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '50%',
    padding: '10px 0px 10px 0px',
    margin: '0px 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  squareButtons: {
    font: '300 40px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '40%',
    padding: '120px 20px 120px 20px',
    margin: '4% 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  rectangleButton: {
    font: '300 40px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '40%',
    padding: '40px 0px 40px 0px',
    margin: '0px 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  downloadIcon: { 'font-size': '150%' },
  welcomeMessage: {
    margin: '5% 2% 4% 2%',
    font: '400 40px Poppins, sans-serif',
    'text-align': 'center',
    color: '#1f3556',
  },
});

export default styles;
