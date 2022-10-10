import React from 'react';
import ReactDOM from 'react-dom';
import N2O from 'n2o-framework';
import createFactoryConfig from "n2o-framework/lib/core/factory/createFactoryConfig";
import authProvider from "n2o-framework/lib/core/auth/authProvider";

import 'n2o-framework/dist/n2o.css';

const config = {
    security: {
        authProvider,
        externalLoginUrl: '/'
    }
};

ReactDOM.render(
    <React.StrictMode>
        <N2O {...createFactoryConfig(config)} />
    </React.StrictMode>,
    document.getElementById('root')
);
