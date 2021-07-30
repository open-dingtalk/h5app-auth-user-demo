import React from 'react';
import 'antd/dist/antd.css';
import {useEffect, useState} from 'react';
import './App.css';
import {openAuthMiniApp} from "dingtalk-design-libs/biz/openAuthMiniApp";
import {Button} from 'antd';
import axios from 'axios';

function App() {
    const [clientId, setClientId] = useState(null);
    const [corpId, setCorpId] = useState(null);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        axios.get('/config')
            .then(response => {
                setClientId(response.data.data.appKey);
                setCorpId(response.data.data.corpId);
            })
    }, []);

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
                    setUserInfo({
                        ...response.data.data
                    })
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

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <p>用户信息：</p>
                    <p>姓名：{userInfo.nick}</p>
                    <p>电话号码：{userInfo.mobile}</p>
                </div>
                <Button onClick={openMiniApp} block type="primary">打开授权弹窗</Button>
                <br/>
                <Button onClick={cancelMiniApp} block type="primary">打开取消授权弹窗</Button>
            </header>
        </div>
    );
}

export default App;
