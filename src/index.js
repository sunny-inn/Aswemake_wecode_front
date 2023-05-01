import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import Globalstyle from './Styles/Globalstyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Globalstyle />
    <Router />
  </RecoilRoot>
);
