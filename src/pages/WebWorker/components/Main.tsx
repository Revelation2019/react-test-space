import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import Plugin from './Plugin';
// import Communicate from './communicate';

interface IProps extends RouteConfigComponentProps<any> {

}

const Main = (props: IProps) => {
  return (
    <div>
      <span>测试webworker</span>
      {/* <Communicate></Communicate> */}
      {/* <WorkerBlob></WorkerBlob> */}
      <Plugin></Plugin>
    </div>
  );
};

export default Main;
