package com.aliyun.dingtalk.controller;

import com.aliyun.dingtalk.service.DingTalkUserService;
import com.aliyun.dingtalk.model.RpcServiceResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * 钉钉企业内部小程序DEMO, 实现了根据用户授权码获取用户信息功能
 */
@RestController
public class DingTalkUserController {

    @Resource
    private DingTalkUserService dingTalkUserService;

    /**
     * 欢迎页面, 检查后端服务是否启动
     *
     * @return
     */
    @GetMapping("/welcome")
    public String welcome() {
        return "welcome";
    }

    /**
     * 根据临时授权码,获取user_access_token,根据user_access_token获取用户信息
     *
     * @param authCode 临时授权码
     * @return
     */
    @GetMapping("/user")
    public RpcServiceResult user(@RequestParam(value = "authCode") String authCode) {
        try {
            return RpcServiceResult.getSuccessResult(dingTalkUserService.getUserInfo(authCode));
        } catch (Exception ex) {
            return RpcServiceResult.getFailureResult("-1", "get dingTalkUserInfo exception");
        }
    }
}