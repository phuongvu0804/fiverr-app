import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Redux's config
import { Provider } from 'react-redux';
import configureStore from './store';

//Components
import GlobalStyles from './components/GlobalStyles';
import App from '@/App';

//Material UI
import { createTheme, ThemeProvider } from '@mui/material';

const store = configureStore();

export type AppDispatch = typeof store.dispatch; // Type to access dispatch

const theme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 16,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
