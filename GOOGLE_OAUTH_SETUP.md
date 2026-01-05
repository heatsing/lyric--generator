# Google OAuth 设置指南

本指南将帮助你为 AI Lyrics Generator 配置 Google OAuth 登录功能。

## 步骤 1: 创建 Google Cloud 项目

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 点击顶部的项目下拉菜单
3. 点击 "新建项目"
4. 输入项目名称（例如：AI Lyrics Generator）
5. 点击 "创建"

## 步骤 2: 启用 Google+ API

1. 在左侧菜单中，点击 "API 和服务" > "库"
2. 搜索 "Google+ API"
3. 点击 "Google+ API"
4. 点击 "启用"

## 步骤 3: 创建 OAuth 2.0 凭据

1. 在左侧菜单中，点击 "API 和服务" > "凭据"
2. 点击顶部的 "创建凭据" > "OAuth 客户端 ID"
3. 如果提示配置同意屏幕，先完成以下步骤：

### 配置 OAuth 同意屏幕

1. 选择 "外部" 用户类型（除非你有 Google Workspace）
2. 点击 "创建"
3. 填写必填信息：
   - **应用名称**: AI Lyrics Generator
   - **用户支持电子邮件**: 你的邮箱
   - **开发者联系信息**: 你的邮箱
4. 点击 "保存并继续"
5. 在 "范围" 页面，点击 "保存并继续"
6. 在 "测试用户" 页面，添加你的 Google 账号作为测试用户
7. 点击 "保存并继续"

### 创建 OAuth 客户端 ID

1. 返回 "凭据" 页面
2. 点击 "创建凭据" > "OAuth 客户端 ID"
3. 应用类型选择 "Web 应用"
4. 名称输入：AI Lyrics Generator Web Client
5. 在 "已获授权的 JavaScript 来源" 中添加：
   - `http://localhost:3000` (本地开发)
   - `https://your-domain.com` (生产环境)
6. 在 "已获授权的重定向 URI" 中添加：
   - `http://localhost:3000/api/auth/callback/google` (本地开发)
   - `https://your-domain.com/api/auth/callback/google` (生产环境)
7. 点击 "创建"

## 步骤 4: 获取客户端 ID 和密钥

1. 创建完成后，会弹出对话框显示你的客户端 ID 和客户端密钥
2. **重要**: 复制并保存这些凭据，特别是客户端密钥（只会显示一次）

## 步骤 5: 配置环境变量

### 本地开发

1. 在项目根目录创建 `.env.local` 文件
2. 添加以下内容：

```env
NEXTAUTH_SECRET=运行命令生成: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=你的客户端ID
GOOGLE_CLIENT_SECRET=你的客户端密钥
OPENAI_API_KEY=sk-e9052c75601b4ba1804d5f7a9958151c
```

### Vercel 部署

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 进入 "Settings" > "Environment Variables"
4. 添加以下环境变量：

| Name | Value |
|------|-------|
| `NEXTAUTH_SECRET` | 生成的密钥 |
| `NEXTAUTH_URL` | https://your-domain.vercel.app |
| `GOOGLE_CLIENT_ID` | 你的 Google 客户端 ID |
| `GOOGLE_CLIENT_SECRET` | 你的 Google 客户端密钥 |
| `OPENAI_API_KEY` | sk-e9052c75601b4ba1804d5f7a9958151c |

5. 确保选中 "Production", "Preview", 和 "Development" 环境
6. 点击 "Save"
7. 重新部署项目

## 步骤 6: 生成 NEXTAUTH_SECRET

在终端中运行以下命令生成安全的密钥：

```bash
openssl rand -base64 32
```

将生成的字符串设置为 `NEXTAUTH_SECRET` 环境变量。

## 步骤 7: 测试

1. 启动开发服务器：`npm run dev`
2. 访问 `http://localhost:3000/login`
3. 点击 "Continue with Google" 按钮
4. 使用你的 Google 账号登录
5. 应该会重定向回首页，显示已登录状态

## 故障排除

### 错误：redirect_uri_mismatch

- 确保在 Google Cloud Console 中的重定向 URI 完全匹配
- 确保包含 `/api/auth/callback/google` 路径
- 检查 http/https 协议是否正确

### 错误：Error 403: access_denied

- 确保已将你的 Google 账号添加为测试用户
- 或将应用发布到生产环境（在 OAuth 同意屏幕设置中）

### 登录后没有重定向

- 检查 `NEXTAUTH_URL` 环境变量是否正确
- 确保 URL 不包含尾部斜杠

## 安全注意事项

1. **永远不要** 将 `.env.local` 文件提交到 Git
2. **永远不要** 在客户端代码中暴露 `GOOGLE_CLIENT_SECRET`
3. 定期轮换你的 `NEXTAUTH_SECRET`
4. 在生产环境中使用 HTTPS
5. 限制 OAuth 同意屏幕的范围权限

## 生产环境发布

当你准备好向所有用户开放时：

1. 进入 Google Cloud Console
2. 导航到 "OAuth 同意屏幕"
3. 点击 "发布应用"
4. 完成验证流程（如果需要）

发布后，任何 Google 账号都可以登录你的应用。

## 需要帮助？

如果遇到问题：
- 查看 [NextAuth.js 文档](https://next-auth.js.org/providers/google)
- 查看 [Google OAuth 文档](https://developers.google.com/identity/protocols/oauth2)
