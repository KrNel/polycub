import { VaultPage } from './';

const route = {
  path: 'vault',
  childRoutes: [{ path: ':vaultId', component: VaultPage, isIndex: true }],
};

export default route;
