import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const noFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回首页
      </Button>
    }
  ></Result>
);

export default noFoundPage;
