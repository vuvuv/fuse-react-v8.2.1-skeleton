import i18next from 'i18next';

import Datatest from './Datatest';

const DatatestConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'datatest',
      element: <Datatest />,
    },
  ],
};

export default DatatestConfig;
