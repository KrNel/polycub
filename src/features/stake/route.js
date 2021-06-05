import { StakePage, PoolPage } from './';

const route = {
  path: 'stake',
  childRoutes: [
    { path: 'stake', component: StakePage, isIndex: true },
    { path: 'pool/:index', component: PoolPage },
  ],
};

export default route;
