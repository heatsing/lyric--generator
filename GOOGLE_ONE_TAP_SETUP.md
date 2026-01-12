# Google One Tap 登录配置指南

## 你的 Google Client ID

```
404702389910-ea05iba1famkjpq3pspcs68dgpo45jgi.apps.googleusercontent.com
```

## 配置步骤

### 1. 在 Vercel 添加环境变量

登录 Vercel Dashboard → 你的项目 → Settings → Environment Variables

添加：
- **Name**: `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
- **Value**: `404702389910-ea05iba1famkjpq3pspcs68dgpo45jgi.apps.googleusercontent.com`
- **Environment**: 勾选所有（Production, Preview, Development）

### 2. 本地开发配置（可选）

如果在本地运行，创建 `.env.local` 文件：

```bash
NEXT_PUBLIC_GOOGLE_CLIENT_ID=404702389910-ea05iba1famkjpq3pspcs68dgpo45jgi.apps.googleusercontent.com
```

### 3. 在 Google Cloud Console 配置授权来源

访问：https://console.cloud.google.com/apis/credentials

找到项目：**gen-lang-client-0681187523**

点击你的 OAuth 2.0 客户端 ID，添加以下 URL 到"已获授权的 JavaScript 来源"：

**开发环境：**
```
http://localhost:3000
```

**生产环境：**
```
https://lyricgenerator.cc
https://www.lyricgenerator.cc
```

### 4. 重新部署

配置完环境变量后：
1. 在 Vercel Dashboard → Deployments
2. 点击最新部署的三个点
3. 选择 "Redeploy"

### 5. 测试

部署完成后，访问 https://lyricgenerator.cc

Google One Tap 登录提示应该会自动出现在页面右上角。

## 故障排除

**错误：invalid_client**
- 检查 Vercel 环境变量是否正确设置
- 确认已重新部署项目

**One Tap 不显示**
- 检查 Google Cloud Console 中是否添加了正确的授权来源
- 确认域名拼写正确（包括 https://）
- 清除浏览器缓存和 cookies

**FedCM 错误**
- 已通过 `next.config.mjs` 和组件配置修复
- 如仍有问题，检查浏览器是否支持（Chrome/Edge 最新版本）

## 工作原理

1. 用户访问网站
2. `GoogleOneTap` 组件自动加载
3. 显示 One Tap 登录提示
4. 用户点击选择 Google 账号
5. 后端验证 JWT token
6. 登录成功，保存用户信息

## 安全注意事项

- Client ID 是公开的，可以放心在前端使用
- 永远不要泄露 Client Secret（如果有）
- 始终在后端验证 JWT token
- 使用 HTTPS（生产环境）
