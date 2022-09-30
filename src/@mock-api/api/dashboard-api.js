import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';

const pingData = mockApi.components.examples.dashboard.ping;

mock.onGet('/api/ping').reply((config) => {
  return [200, pingData];
});
