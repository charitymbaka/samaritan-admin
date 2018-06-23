import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import Dashboard from './Dashboard'


const App = () => (
    <Admin  title="The Samaritan" dashboard={Dashboard} >
    </Admin>
);

export default App;