import { useRoutes } from 'react-router-dom';

// Routes
import ClientRoutes from './ClientRoutes';
import AuthRoutes from './AuthRoutes';

// ---------------------------|| RENDER ROUTES ||------------------------------------- //
const Routes = () => useRoutes([ClientRoutes, AuthRoutes]);

export default Routes;
