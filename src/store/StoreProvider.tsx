import { ReactElement, ReactChild } from 'react';
import { Provider } from 'react-redux';

import { store } from './index';

interface StoreProviderProps {
    children: ReactChild;
}

const StoreProvider = ({ children }: StoreProviderProps): ReactElement => <Provider store={store}>{children}</Provider>;

export default StoreProvider;
