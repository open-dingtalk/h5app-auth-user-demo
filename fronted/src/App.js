import './App.css';
import { openAuthMiniApp } from "dingtalk-design-libs/biz/openAuthMiniApp";
import axios from 'axios';

function App() {
  //内网穿透工具介绍:
  // https://developers.dingtalk.com/document/resourcedownload/http-intranet-penetration?pnamespace=app
  // 替换成后端服务域名
  const host = "http://localhost:8080/";
  const openMiniApp = () => {
    openAuthMiniApp({
      panelHeight: "percent75",
      path: "pages/home/home", //不要改,这里是小程序dingwlanwvdmrtjjwdmd下的一个页面地址
      extraData: {
        clientId: "*", // 应用ID(唯一标识)
        corpId: "*", //三方企业ID
        rpcScope: "Contact.User.Read",
        fieldScope: "Contact.User.mobile",
        type: 0,
        ext: JSON.stringify({}),
        from: "",
      },
    }).then((res) => {
      // 处理返回数据
      axios.get(host + "user?authCode=" + res.result.authCode)
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
        clientId: "ding8clxwy9wxeom7bie", // 应用ID(唯一标识)
        corpId: "ding9f50b15bccd16741", //三方企业ID
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
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={openMiniApp}>打开授权弹窗</button>
        <button onClick={cancelMiniApp}>打开取消授权弹窗</button>
      </header>
    </div>
  );
}

export default App;
