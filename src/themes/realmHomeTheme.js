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
    margin: '20% 0px 40% 0px',

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
  inputControlTextArea: {
    margin: '0px 0px 0px 0px',
    padding: '0px 0px 0px 0px',
    width: '60%',
    font: '300 10px Poppins, sans-serif',
    color: '#fff',
  },
  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#1f3556 !important',
    color: '#1f3556 !important',
  },
  // helperText: {
  //   color: '#1f3556',
  // },
  cssOutlinedInput: {
    // padding: 0
    color: '#1f3556',
    borderColor: `#1f3556 !important`,
    // backgroundColor: '#a8dadc',
    '&$cssSelected $notchedOutline': {
      backgroundColor: '#a8dadc',
      borderColor: `#1f3556 !important`,
    },
  },
  input: {
    color: '#1f3556',
    borderColor: `#1f3556 !important`,
    // backgroundColor: '#a8dadc',
    padding: '10px 5px 10px 5px',
  },
  formDescriptionContainer: {
    width: '85%',
    // 'text-align': 'center',
    margin: 'auto',
    borderTop: '#1f3556 solid 1px',
    paddingTop: '15px',
    borderBottom: '#1f3556 solid 1px',
  },
  formDescriptionContainerThankYou: {
    width: '85%',
    // 'text-align': 'center',
    margin: 'auto',
    borderTop: '#1f3556 solid 1px',
    paddingTop: '15px',
    paddingBottom: '10px',
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
  },

  formContainer: { 'text-align': 'center', width: '100%' },
  formContainerSection: { 'text-align': 'center', width: '100%' },
  QandAContainer: { 'text-align': 'center', margin: '0px 0px 0px 0px' },
  QandAContainerSection: { margin: '-30px 0px 20px 0px' },
  formQuestion: {
    font: '300 14px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 10% 0px 10%',
    margin: '10% 0px 0px 0px',
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
  sectionTitle: {
    font: '400 14px Poppins, sans-serif',
    color: '#1f3556',
    margin: '-15px 0px 20px 0px',
    padding: '0px 15px 0px 15px',
    'text-align': 'center',
  },
  sectionOrder: {
    font: '500 14px Poppins, sans-serif',
    padding: '0px 0px 0px 5px',
  },
  sectionCoverContainer: {
    'text-align': 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    marginBottom: '20px',
  },
  sectionVideoContainer: {
    // 'text-align': 'center',
    // width: '90%',
    margin: 'auto auto auto auto',
    position: 'relative',
    overflow: 'hidden',
    'padding-bottom': '56.25%',
    'padding-top': '30px',
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

  inputControlSection: {
    margin: '0px 0px 0px 0px',
    padding: '0px 0px 0px 0px',
    width: '70%',
    font: '300 10px Poppins, sans-serif',
    color: '#fff',
  },
  sectionDescription: {
    font: '300 13px Poppins, sans-serif',
    color: '#1f3556',
    margin: 'auto',
    padding: '0px 5px 25px 5px',
    width: '80%',
    'text-align': 'left',
    borderBottom: '#1f3556 solid 2px',
  },
  sectionQuestion: {
    font: '400 120% Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 15% 0px 15%',
    margin: '10% 0px 10px 0px',
    // width: '90%',
    'text-align': 'center',
    // borderBottom: '#1f3556 solid 1px',
  },
  sectionRadio: {
    font: '400 120% Poppins, sans-serif',
    color: '#1f3556',
    margin: '10px 20% 10px 20%',
    'text-align': 'center',
  },
  sectionRadioIcon: { color: 'blue' },
  icon: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#457b9d',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  sectionRadioButtonLabel: { font: '400 90% Poppins, sans-serif' },
  // rotate: {
  //   transform: 'rotate(180deg)' /*
  // },
  bottomNav: {
    width: '100%',
    bottom: 10,

    position: 'absolute',

    'text-align': 'center',
  },
  ratingIcon: { 'font-size': '150%' },
});

export default styles;
