package com.aliyun.dingtalk.util;

import com.aliyun.dingtalkoauth2_1_0.Client;
import com.aliyun.dingtalkoauth2_1_0.models.GetUserTokenRequest;
import com.aliyun.dingtalkoauth2_1_0.models.GetUserTokenResponse;
import com.aliyun.dingtalkoauth2_1_0.models.GetUserTokenResponseBody;
import com.aliyun.tea.TeaException;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teautil.Common;
import lombok.extern.slf4j.Slf4j;

import java.util.Objects;

/**
 * 获取access_token工具类
 */
@Slf4j
public class AccessTokenUtil {

    /**
     * 使用 Token 初始化账号Client
     *
     * @return Client
     * @throws Exception
     */
    public static Client createClient() throws Exception {
        Config config = new Config();
        config.protocol = "https";
        config.regionId = "central";
        return new Client(config);
    }


    /**
     * 在使用accessToken时，请注意：
     * accessToken的有效期为7200秒（2小时），有效期内重复获取会返回相同结果并自动续期，过期后获取会返回新的accessToken。
     * 开发者需要缓存accessToken，用于后续接口的调用。因为每个应用的accessToken是彼此独立的，所以进行缓存时需要区分应用来进行存储。
     * 不能频繁调用接口，否则会受到频率拦截。
     *
     * @param appKey
     * @param appSecret
     * @param authCode
     * @param refreshToken
     * @param grantType
     * @return
     */
    public static GetUserTokenResponseBody getUserAccessToken(String appKey, String appSecret, String authCode, String refreshToken, String grantType) {

        try {
            Client client = createClient();
            GetUserTokenRequest getUserTokenRequest = new GetUserTokenRequest()
                    .setClientId(appKey)
                    .setClientSecret(appSecret)
                    .setCode(authCode)
                    .setRefreshToken(refreshToken)
                    .setGrantType(grantType);
            GetUserTokenResponse response = client.getUserToken(getUserTokenRequest);
            if (!Objects.isNull(response)) {
                GetUserTokenResponseBody body = response.getBody();
                return body;
            } else {
                log.error("获取user_access_token响应为空！");
            }
        } catch (TeaException err) {
            if (!Common.empty(err.code) && !Common.empty(err.message)) {
                // err 中含有 code 和 message 属性，可帮助开发定位问题
            }

        } catch (Exception _err) {
            TeaException err = new TeaException(_err.getMessage(), _err);
            if (!Common.empty(err.code) && !Common.empty(err.message)) {
                // err 中含有 code 和 message 属性，可帮助开发定位问题
            }

        }
        return null;
    }
}
