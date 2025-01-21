import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './Pages/Header/Header';
import LoginPage from './Pages/SignIn/SignIn';
import RegisterPage from './Pages/SignUp/SignUp';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import OrderListPage from './Pages/OrderListPage/OrderListPage';
import UserListPage from './Pages/UserListPage/UserListPage';
import UserEditPage from './Pages/UserEditPage/UserEditPage';
import Auction from './Pages/Auction/Auction';
import CreateAuction from './Pages/CreateAuction/CreateAuction';
import AuctionDetail from './Pages/AuctionDetails/AuctionDetail';

// Set the base URL for all axios requests
axios.defaults.baseURL =
  process.env.REACT_APP_API_PROXY || 'http://localhost:5000';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Auction />
            </>
          }
        />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />

        <Route
          path="/profile"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>

            </>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <>
              <Header />
              <AdminRoute>
                <Dashboard />
              </AdminRoute>

            </>
          }
        />
      
        <Route
          path="/admin/orders"
          element={
            <>
              <Header />
              <AdminRoute>
                <OrderListPage />
              </AdminRoute>
            </>
          }
          exact
        />

        <Route
          path="/admin/users"
          element={
            <>
              <Header />
              <AdminRoute>
                <UserListPage />
              </AdminRoute>
            </>
          }
        />

        <Route
          path="/admin/user/:id"
          element={
            <>
              <Header />
              <AdminRoute>
                <UserEditPage />
              </AdminRoute>

            </>
          }
        />

        {/* Seller Routes */}
        <Route
          path="/create-auction"
          element={
            <>
              <Header />
              <CreateAuction />
            </>
          }
        />

        <Route
          path="/auctions/:id"
          element={
            <>
              <Header />
              <AuctionDetail />

            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
