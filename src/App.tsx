import React, { FunctionComponent, ExoticComponent, ReactNode, Suspense } from 'react';

// Route's config
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';

// Layout
import { DefaultLayout } from './components/Layout';
import ClientRoutes from './routes/ClientRoutes';

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
        <Suspense fallback="<p>Loading</p>">
            <Router>
                <Routes>{renderRoutes(AuthRoutes)}</Routes>
                <Routes>{renderRoutes(ClientRoutes)}</Routes>
            </Router>
        </Suspense>
    );
}

export default App;
