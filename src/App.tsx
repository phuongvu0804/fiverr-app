import React, { FunctionComponent, ExoticComponent, ReactNode, Suspense } from 'react';

// Route's config
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AUTH_ROUTES from './routes/AuthRoutes';

//Datepicker's config
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// Layout
import { DefaultLayout } from './components/Layout';
import CLIENT_ROUTES from './routes/ClientRoutes';

interface RouteType {
    path: string;
    component: FunctionComponent | ExoticComponent<{ children?: ReactNode }>;
    layout: FunctionComponent | ExoticComponent<{ children?: ReactNode }> | any;
}

function App() {
    function renderRoutes(Routes: RouteType[]) {
        return Routes.map((route, index) => {
            const Page = route.component;
            const Layout: any = route.layout || DefaultLayout;

            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                />
            );
        });
    }

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Suspense fallback="<p>Loading</p>">
                <Router>
                    <Routes>{renderRoutes(AUTH_ROUTES)}</Routes>
                    <Routes>{renderRoutes(CLIENT_ROUTES)}</Routes>
                </Router>
            </Suspense>
        </LocalizationProvider>
    );
}

export default App;
