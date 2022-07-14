import React from "react";
import loadable from '@loadable/component';
const RootRouter = loadable(() => import('./Routers/root'));

const App = () => {
    return (
        <RootRouter/>
    )
};

export default React.memo(App);