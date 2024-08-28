import React from 'react';
import styles from '../Style';

const BookRent = () => {
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
              <th style={styles.th}>Owner</th>
              <th style={styles.th}>Upload</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>01</td>
              <td style={styles.td}>Nardos T.</td>
              <td style={styles.td}>15 Books</td>
              <td style={styles.td}>Addis Ababa</td>
              <td style={styles.td}>
                <div style={styles.statusIndicator}>
                  <div style={styles.statusDot}></div>
                  <span style={styles.statusLabel}>Active</span>
                </div>
              </td>
              <td style={styles.td}>
                <div style={styles.actionButtons}>
                  <button style={styles.approveButton}>Approve</button>
                  <button style={styles.viewButton}>View</button>
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

export default BookRent;
