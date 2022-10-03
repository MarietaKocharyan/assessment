import { Suspense } from 'react';

import SwitchRouter from 'pages/SwitchRouter';

import appRoutes from './routes';

const PagesLayout = (): JSX.Element => {
    return (
        <Suspense fallback={<></>}>
            <SwitchRouter routes={appRoutes} />
        </Suspense>
    );
};

export default PagesLayout;
