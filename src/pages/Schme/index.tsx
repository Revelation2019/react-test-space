import React from 'react';
import './index.less';
import Main from './component/Main';
import stores from './store';

const EmptyPage = (props: any) => {
  return <Main {...stores} {...props}/>;
};

export default EmptyPage;
