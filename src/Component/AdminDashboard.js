import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admindashboard');
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="d-flex flex-column flex-md-row vh-100">
      <aside className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <div className="text-center my-3">
          <h2>Book Rent</h2>
        </div>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link text-white">Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/owners" className="nav-link text-white">Owners</Link>
            </li>
            <li className="nav-item">
              <Link to="/rent" className="nav-link text-white">Other</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-white">Notification</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-white">Setting</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-white">Login as Book Owner</Link>
            </li>
          </ul>
        </nav>
        <button className="btn btn-primary w-100 mt-3">Logout</button>
      </aside>
      <main className="flex-grow-1 p-4 bg-light">
        <header className="mb-4">
          <h1>Admin/Dashboard</h1>
        </header>
        <section className="row mb-4">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3>This Month Statistics</h3>
              <p>{new Date().toLocaleString()}</p>
              <div className="d-flex align-items-baseline">
                <h2>ETB 9460.00</h2>
                <p className="text-success ml-2">+ 15%</p>
              </div>
              <p>Compared to ETB8940 last month</p>
              <p>Last Month Income ETB 25568.00</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3>Available Books</h3>
              <div className="bg-light rounded mb-3" style={{ height: '150px' }} />
              <ul className="list-unstyled">
                <li>Fiction <span className="float-right">54</span></li>
                <li>Self Help <span className="float-right">20</span></li>
                <li>Business <span className="float-right">26</span></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <h3>Live Book Status</h3>
          <table className="table table-striped table-bordered bg-white rounded shadow-sm">
            <thead className="thead-dark">
              <tr>
                <th>No.</th>
                <th>Book no.</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((stat, index) => (
                <tr key={index}>
                  <td>{stat.no}</td>
                  <td>{stat.book_no}</td>
                  <td>{stat.owner}</td>
                  <td className={stat.status === 'Rented' ? 'text-danger' : 'text-success'}>{stat.status}</td>
                  <td>{stat.price} Birr</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <h3>Earning Summary</h3>
          <div className="bg-light rounded shadow-sm" style={{ height: '150px' }} />
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
