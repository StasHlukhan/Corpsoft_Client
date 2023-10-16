


import LoginPage from 'pages/auth/login';
import RegisterPage from 'pages/register';
import UserPage from 'pages/user';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/reducer';
import { withNotifications } from 'shared/ui/theme/notification';

function App() {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  return isAuth ? (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path='/profile' element={<UserPage/>}/>
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/*" element={<Navigate to="/profile" replace />} />
    </Routes>
  ) : (
    <Routes>
            <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default withNotifications(App);
  