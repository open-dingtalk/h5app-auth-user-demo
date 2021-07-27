import React from 'react';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import './App.css';
import { openAuthMiniApp } from "dingtalk-design-libs/biz/openAuthMiniApp";
import { Drawer, Button, Checkbox, message, InputNumber } from 'antd';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    items: [],
    isLoaded: false,
    visible: false,
    placement: 'bottom',
    checked: false,
    none: false,
    textForms: []
  });
  const [clientId, setClientId] = useState(null);
  const [corpId, setCorpId] = useState(null);

  useEffect(() => {
    axios.get('/config')
      .then(response => {
        console.log(response, '=====');
        setClientId(response.data.data.appKey);
        setCorpId(response.data.data.corpId);
      })
  }, []);

  console.log(clientId, '------', corpId);
  //内网穿透工具介绍:
  // https://developers.dingtalk.com/document/resourcedownload/http-intranet-penetration?pnamespace=app
  // 替换成后端服务域名
  const domain = "";
  // const clientId = '***';
  // const corpId = '***';
  const openMiniApp = () => {
    openAuthMiniApp({
      panelHeight: "percent75",
      path: "pages/home/home", //不要改,这里是小程序dingwlanwvdmrtjjwdmd下的一个页面地址
      extraData: {
        clientId: clientId, // 应用ID(唯一标识)
        corpId: corpId, //三方企业ID
        rpcScope: "Contact.User.Read",
        fieldScope: "Contact.User.mobile",
        type: 0,
        ext: JSON.stringify({}),
        from: "",
      },
    }).then((res) => {
      // 处理返回数据
      axios.get(domain + "/user?authCode=" + res.result.authCode)
        .then(response => {
          alert(JSON.stringify(response))
          // console.log(response)
        })
        .catch(error => {
          alert(JSON.stringify(error))
          // console.log(error.message)
        })
    })
  }
  const cancelMiniApp = () => {
    openAuthMiniApp({
      path: "pages/cancel/index",
      extraData: {
        clientId: clientId, // 应用ID(唯一标识)
        corpId: corpId, //三方企业ID
        rpcScope: "Contact.User.Read",
        fieldScope: "Contact.User.mobile",
        type: 0,
        ext: JSON.stringify({}),
        from: "",
      },
    }).then((res) => {
      // 处理返回数据
      console.log(res);
    });
  };

  const showDrawer = () => {
    setState({
      ...state,
      visible: true,
    });
  };
  const onClose = () => {
    setState({
      ...state,
      visible: false,
      checked: false
    });
    cancelMiniApp()
  };
  const onCloses = () => {
    if (state.checked) {
      setState({ ...state, visible: false, none: true, isLoaded: true })
      openMiniApp()
    } else {
      message.error('请勾选授权协议')
    }
  }

  const onChange = (e) => {
    setState({
      ...state,
      checked: e.target.checked
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {!state.none && <Button type="primary" onClick={showDrawer} block>
          获取个人信息授权登陆
        </Button>}
        <Drawer
          title="谁谁谁 申请获取"
          placement={state.placement}
          closable={false}
          visible={state.visible}
          key={state.placement}
          footer={
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                拒绝
              </Button>
              <Button onClick={onCloses} type="primary">
                同意
              </Button>
            </div>
          }
        >
          <h4>以下权限</h4>
          <div>
            <p>获取你的个人基本信息</p>
            <p>获取你的手机号</p>
          </div>
          <Checkbox onChange={onChange} checked={state.checked}>我已阅读并同意 <a>《用户授权协议》</a></Checkbox>
        </Drawer>
        <button onClick={openMiniApp}>打开授权弹窗</button>
        <button onClick={cancelMiniApp}>打开取消授权弹窗</button>
      </header>
    </div>
  );
}

export default App;
