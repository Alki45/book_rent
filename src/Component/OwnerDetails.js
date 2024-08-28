import React from 'react';

const OwnerDetails = () => {
  const handleApprove = (id) => {
    // Implement the approve functionality
    console.log(`Approved owner with ID: ${id}`);
  };

  const handleReject = (id) => {
    // Implement the reject functionality
    console.log(`Rejected owner with ID: ${id}`);
  };

  const styles = {
    container: {
      padding: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '10px',
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    button: {
      padding: '5px 10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    approveButton: {
      backgroundColor: '#4caf50',
      color: '#fff',
    },
    rejectButton: {
      backgroundColor: '#f44336',
      color: '#fff',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Owner Details</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
          <tr>
            <td style={styles.td}>John Doe</td>
            <td style={styles.td}>john@example.com</td>
            <td style={styles.td}>123-456-7890</td>
            <td style={styles.td}>Active</td>
            <td style={styles.td}>
              <button
                style={{ ...styles.button, ...styles.approveButton }}
                onClick={() => handleApprove(1)}
              >
                Approve
              </button>
              <button
                style={{ ...styles.button, ...styles.rejectButton }}
                onClick={() => handleReject(1)}
              >
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OwnerDetails;
