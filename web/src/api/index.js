import axios from './config';

const { get, post } = axios;

export const overviewAgent = () => get('/brokers/cluster1/status');
export const overviewTheme = () => get('/topics/cluster1/status');
export const overviewConnection = () => get('/connects/status');
export const overviewKsql = () => get('/ksql/status');
