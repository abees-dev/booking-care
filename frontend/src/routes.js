import SignIn from './layout/auth/signIn';
import Dashboard from './layout/dashboard';

// Mui Icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Handbook from './layout/dashboard/handbook';
import Clinic from './layout/dashboard/clinic';
import User from './layout/dashboard/user';
import Specialist from './layout/dashboard/specialist';

const routes = [
   {
      type: 'collapse',
      name: 'Dashboard',
      key: 'dashboard',
      icon: <DashboardIcon />,
      route: '/dashboard',
      component: <Dashboard />,
   },
   {
      type: 'collapse',
      name: 'User manager',
      key: 'user',
      icon: <TableViewIcon />,
      route: '/user-manager',
      component: <User />,
   },
   {
      type: 'collapse',
      name: 'Specialist',
      key: 'specialist',
      icon: <LogoutIcon />,
      route: '/specialist-manager',
      component: <Specialist />,
   },
   {
      type: 'collapse',
      name: 'Clinic',
      key: 'clinic',
      icon: <NotificationsIcon />,
      route: '/clinic-manager',
      component: <Clinic />,
   },
   {
      type: 'collapse',
      name: 'HandBook',
      key: 'handBook',
      icon: <PersonIcon />,
      route: '/handbook-manager',
      component: <Handbook />,
   },

   {
      type: 'collapse',
      name: 'Sign In',
      key: 'sign-in',
      icon: <LoginIcon />,
      route: '/authentication/sign-in',
      component: <SignIn />,
   },
];

export default routes;
