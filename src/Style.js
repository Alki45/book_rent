const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
    },
    leftPane: {
      flex: 1,
      backgroundColor: '#0B132B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightPane: {
      flex: 1,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '60%',
      height: 'auto',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    checkbox: {
      marginRight: '10px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#6A0572',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
    },
    loginLink: {
      marginTop: '10px',
      textAlign: 'center',
      color: '#6A0572',
      textDecoration: 'none',
    },
    sidebar: {
      width: '200px',
      backgroundColor: '#0B132B',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    sidebarItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      cursor: 'pointer',
    },
    icon: {
      marginRight: '10px',
    },
    label: {
      fontSize: '18px',
    },
    content: {
      flex: 1,
      padding: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '10px',
      border: '1px solid #ccc',
      textAlign: 'left',
      backgroundColor: '#f2f2f2',
    },
    td: {
      padding: '10px',
      border: '1px solid #ccc',
    },
    statusIndicator: {
      display: 'flex',
      alignItems: 'center',
    },
    statusDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#28A745',
      marginRight: '5px',
    },
    statusLabel: {
      fontSize: '14px',
      color: '#28A745',
    },
    actionButtons: {
      display: 'flex',
      gap: '10px',
    },
    approveButton: {
      backgroundColor: '#28A745',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
    },
    viewButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      border: 'none',
    },
    logoutButton: {
      marginTop: 'auto',
      padding: '10px',
      backgroundColor: '#DC3545',
      color: '#fff',
      borderRadius: '4px',
      cursor: 'pointer',
      textAlign: 'center',
    },
    signupLink: {
      marginTop: '10px',
      textAlign: 'center',
      color: '#6A0572',
      textDecoration: 'none',
    },
  };
  
  export default styles;
  