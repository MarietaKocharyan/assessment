import { ComponentType } from 'react';
import { Switch, Route } from 'react-router-dom';

type RouteParams = {
    path?: string;
    exact?: boolean;
    component: ComponentType;
};

interface SwitchRouter {
    routes?: RouteParams[];
}

const renderRoute = ({ exact = true, ...route }: RouteParams, index: number): JSX.Element => {
    const Component = route.component;

    return (
        <Route key={index} path={route.path} exact={exact}>
            <Component />
        </Route>
    );
};

const SwitchRouter = ({ routes }: SwitchRouter): JSX.Element => (
    <Switch>{routes?.length > 0 && routes.map(renderRoute)}</Switch>
);

export default SwitchRouter;
