import React from 'react';

import {PageContainer} from "@ant-design/pro-components";

const Admin: React.FC = (props) => {
  const {children} = props;

  console.log('Admin children:', children); // 添加调试信息
  return (
    <PageContainer>
      <div style={{backgroundColor: 'red', height: '100vh', padding: '20px'}}>
        <a>11</a>
        {children}
        <a>22</a>
      </div>

    </PageContainer>
  );
};

export default Admin;
