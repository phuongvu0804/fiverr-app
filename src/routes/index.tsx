import { useRoutes } from 'react-router-dom';

// Routes
import ClientRoutes from './ClientRoutes';

// ---------------------------|| RENDER ROUTES ||------------------------------------- //
const Routes = () => useRoutes([ClientRoutes]);

export default Routes;
