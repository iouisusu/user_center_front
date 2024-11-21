import {Footer} from '@/components';
import {register} from '@/services/ant-design-pro/api';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import {Helmet, history} from '@umijs/max';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import Settings from '../../../../config/defaultSettings';
import {SYSTEM_LOGO} from "@/constants";

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');

  // const {styles} = useStyles();
  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword, checkPassword} = values;
    if (userPassword !== checkPassword) {
      message.error("两次输入的密码不一致");
      return;
    }

    try {
      // 注册
      const id = await register(values);

      console.log(`id=${id}`);
      if (id > 0) {
        const defaultLoginSuccessMessage = `注册成功！`;
        message.success(defaultLoginSuccessMessage);

        if (!history) return;
        const {query} = history.location;
        history.push({
          pathname: '/user/login',
          query,
        });
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div>
      <Helmet>
        <title>
          {'注册'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册'
            }
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="梦工厂个人中心"
          subTitle={'梦开始的地方'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '注册账号',
              },
            ]}
          />

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined/>,
                }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined/>,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8'
                  }
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined/>,
                }}
                placeholder={'请再次输出密码'}
                rules={[
                  {
                    required: true,
                    message: '必须再次输入相同的密码！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8'
                  }
                ]}
              />
            </>
          )}

        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};
export default Register;
