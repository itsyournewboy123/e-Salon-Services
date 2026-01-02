import React from 'react';
import './css/Admin.css'

function Admin() {
  return (
    <div>
      <div className="admin-container">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li className="active">Dashboard</li>
            <li>Pending Salons</li>
            <li>Approved Salons</li>
            <li>Manage Salons</li>
            <li>Manage Users</li>
            <li>Appointments</li>
            <li>Logout</li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-content">

          {/* HEADER */}
          <header className="admin-header">
            <h1>Dashboard</h1>
            <p>Welcome, Admin</p>
          </header>

          {/* STATS */}
          <section className="stats">
            <div className="stat-card">
              <h3>Pending Salons</h3>
              <p>12</p>
            </div>
            <div className="stat-card">
              <h3>Approved Salons</h3>
              <p>48</p>
            </div>
            <div className="stat-card">
              <h3>Total Users</h3>
              <p>320</p>
            </div>
            <div className="stat-card">
              <h3>Appointments</h3>
              <p>1024</p>
            </div>
          </section>

          {/* SALON VERIFICATION */}
          <section className="table-section">
            <h2>Salon Verification (Pending)</h2>

            <table>
              <thead>
                <tr>
                  <th>Salon Name</th>
                  <th>Owner</th>
                  <th>City</th>
                  <th>Home Service</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Studio 29</td>
                  <td>Rahul Sharma</td>
                  <td>Bengaluru</td>
                  <td>Yes</td>
                  <td>
                    <button className="approve">Approve</button>
                    <button className="reject">Reject</button>
                  </td>
                </tr>

                <tr>
                  <td>Glow Beauty</td>
                  <td>Anita Verma</td>
                  <td>Mumbai</td>
                  <td>No</td>
                  <td>
                    <button className="approve">Approve</button>
                    <button className="reject">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Admin;
