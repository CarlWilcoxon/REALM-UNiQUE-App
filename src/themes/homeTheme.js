const styles = (theme) => ({
  welcomeMessage: {
    font: '400 20px Poppins, sans-serif',
    'text-align': 'center',
    color: '#1f3556',
    margin: '0px 0px 10px 0px',
  },
  exploreInvitation: {
    font: '400 30px Poppins, sans-serif',
    'text-align': 'center',
    color: '#1f3556',
    margin: '0px 0px 20px 0px',
  },
  GridListRoot: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    padding: '0px 20px 0px 20px',
  },
  gridListTile: { width: '100%' },
  buttonContainer: { width: '95%', padding: '0px' },
  buttonPaper: {
    '&:hover': {
      elevation: 10,
    },
  },
  userName: { 'text-transform': 'capitalize' },
  button: {
    font: ' 300  16px  Poppins , sans-serif',
    color: 'white',
    backgroundColor: '#457b9d',
    'text-transform': 'capitalize',
    'text-align': 'center',
    width: '100%',
    'border-radius': '5px',
    '&:hover': {
      backgroundColor: '#a8dadc',
      color: '#457b9d',
    },
    '&:focus': {
      backgroundColor: 'a8dadc',
      color: '#457b9d',
    },
  },
  icon: {
    marginTop: 15,
  },
  realmName: {
    paddingBottom: '10px',
  },
});

export default styles;
