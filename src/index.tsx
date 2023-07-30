import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from '@/pages/App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
);
