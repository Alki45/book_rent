import React from 'react';

const BooksPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.sidebarItem}>
          <span style={styles.icon}>📋</span>
          <span style={styles.label}>Dashboard</span>
        </div>
        <div style={styles.sidebarItem}>
          <span style={styles.icon}>📚</span>
          <span style={styles.label}>Books</span>
        </div>
        <div style={styles.sidebarItem}>
          <span style={styles.icon}>👥</span>
          <span style={styles.label}>Owners</span>
        </div>
        <div style={styles.sidebarItem}>
          <span style={styles.icon}>🔔</span>
          <span style={styles.label}>Notification</span>
        </div>
        <div style={styles.sidebarItem}>
          <span style={styles.icon}>⚙️</span>
          <span style={styles.label}>Setting</span>
        </div>
        <div style={styles.sidebarItem}>
          <span style={styles.icon}>👤</span>
          <span style={styles.label}>Login as Book Owner</span>
        </div>
        <div style={styles.logoutButton}>
          <span style={styles.icon}>⇠</span>
          <span style={styles.label}>Logout</span>
        </div>
      </div>
      <div style={styles.content}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No.</th>
              <th style={styles.th}>Author</th>
              <th style={styles.th}>Owner</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Book Name</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>01</td>
              <td style={styles.td}>Harry</td>
              <td style={styles.td}>Nardos T.</td>
              <td style={styles.td}>Fiction</td>
              <td style={styles.td}>Diritto Gada</td>
              <td style={styles.td}>
                <div style={styles.statusIndicator}>
                  <div style={styles.statusDot}></div>
                  <span style={styles.statusLabel}>Active</span>
                </div>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  sidebar: {
    flex: '0 0 200px',
    backgroundColor: '#1e2a3a',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  icon: {
    marginRight: '10px',
  },
  label: {
    fontSize: '16px',
  },
  logoutButton: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  content: {
    flex: '1',
    padding: '20px',
    overflowY: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  th: {
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #e0e0e0',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #e0e0e0',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#4caf50',
    marginRight: '5px',
  },
  statusLabel: {
    fontSize: '14px',
    color: '#4caf50',
  },
};

export default BooksPage;