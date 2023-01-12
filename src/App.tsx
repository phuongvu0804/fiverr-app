import React, { FunctionComponent, ExoticComponent, ReactNode, Suspense, useEffect } from 'react';

// Route's config
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AUTH_ROUTES from './routes/AuthRoutes';

//Datepicker's config
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// Layout
import { DefaultLayout } from './components/Layout';
import CLIENT_ROUTES from './routes/ClientRoutes';
import { useAppDispatch } from './hooks';

//Others
import { UserDataTokenProps } from './constants/intefaces';
import { LOCAL_STORAGE_USER_NAME } from './constants/constants';
import actGetUser from './store/actions/user';
import LoadingPage from './pages/LoadingPage';

interface RouteType {
    path: string;
    component: FunctionComponent | ExoticComponent<{ children?: ReactNode }>;
    layout: FunctionComponent | ExoticComponent<{ children?: ReactNode }> | any;
}

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        //Check if local storage has account => automatically signed in
        const DATA = window.localStorage.getItem(LOCAL_STORAGE_USER_NAME);

        if (DATA) {
            const PARSED_DATA: UserDataTokenProps = JSON.parse(DATA);
            //Dispatch user infor (not token) to redux store
            dispatch(actGetUser(PARSED_DATA?.user?.id));
        }
    }, []);

    const renderRoutes = (Routes: RouteType[]) => {
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
    };

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Suspense fallback={<LoadingPage />}>
                <Router>
                    <Routes>{renderRoutes(AUTH_ROUTES)}</Routes>
                    <Routes>{renderRoutes(CLIENT_ROUTES)}</Routes>
                </Router>
            </Suspense>
        </LocalizationProvider>
    );
}

export default App;
