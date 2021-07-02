package com.aliyun.dingtalk.service;

import com.aliyun.dingtalk.exception.InvokeDingTalkException;
import com.aliyun.dingtalkcontact_1_0.Client;
import com.aliyun.dingtalkcontact_1_0.models.GetUserHeaders;
import com.aliyun.dingtalkcontact_1_0.models.GetUserResponse;
import com.aliyun.dingtalkcontact_1_0.models.GetUserResponseBody;
import com.aliyun.dingtalk.config.AppConfig;
import com.aliyun.dingtalk.enums.GrantTypeEnum;
import com.aliyun.dingtalk.util.AccessTokenUtil;
import com.aliyun.tea.TeaException;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teautil.Common;
import com.aliyun.teautil.models.RuntimeOptions;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * 用户管理
 */
@Slf4j
@Service
public class DingTalkUserService {

    // 如需获取当前授权人的信息，unionId参数可以传me
    private static final String UNION_ID = "me";

    @Autowired
    private AppConfig appConfig;

    // 创建获取 dingtalkcontact client
    public Client createClient() throws Exception {
        Config config = new Config();
        config.protocol = "https";
        config.regionId = "central";
        return new Client(config);
    }

    public GetUserResponseBody getUserInfo(String authCode) {

        try {
            // 根据免登授权码、获取用户访问token
            String accessToken = AccessTokenUtil.getUserAccessToken(appConfig.getAppKey(), appConfig.getAppSecret(), authCode, null, GrantTypeEnum.AUTHORIZATION_CODE.getName());

            // 创建client
            Client client = createClient();
            // 设置user_access_token到header
            GetUserHeaders getUserHeaders = new GetUserHeaders();
            getUserHeaders.xAcsDingtalkAccessToken = accessToken;
            // 获取用户信息
            GetUserResponse userResponse = client.getUserWithOptions(UNION_ID, getUserHeaders, new RuntimeOptions());

            GetUserResponseBody body = userResponse.getBody();

            return body;

        } catch (TeaException e) {
            throw new InvokeDingTalkException(e.getCode(), e.getMessage());

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
