import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.jsx'
import theme from './theme.jsx'
import 'react'
import {Provider} from "react-redux";
import store from "./state_management/store/store";

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ThemeProvider>
        </StrictMode>,
    );
}
