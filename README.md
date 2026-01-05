# AI 歌词生成器 / AI Lyrics Generator

🎵 使用 AI 技术生成原创歌词、音乐和完整歌曲的在线工具。

## 功能特性

- 🎼 **歌词生成器** - 根据类型、情绪和主题生成原创歌词
- 🎹 **音乐生成器** - 创建器乐音轨和背景音乐
- 🎤 **歌曲生成器** - 生成包含人声的完整歌曲
- 🔐 **Google OAuth 登录** - 支持 Google 账号一键登录
- 🌍 **多语言支持** - 支持英语、中文、西班牙语等 7 种语言
- 💎 **灵活定价** - 从免费计划到企业解决方案

## 部署到 Vercel

### 第一步：配置环境变量

在 Vercel 项目中添加以下环境变量：

1. 进入 Vercel 项目设置
2. 点击 "Environment Variables"
3. 添加以下变量：

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `OPENAI_API_KEY` | DeepSeek API Key | `sk-e9052c75601b4ba1804d5f7a9958151c` |
| `NEXTAUTH_SECRET` | NextAuth 密钥 | 运行 `openssl rand -base64 32` 生成 |
| `NEXTAUTH_URL` | 应用 URL | `https://your-domain.vercel.app` |
| `GOOGLE_CLIENT_ID` | Google OAuth 客户端 ID | 从 Google Cloud Console 获取 |
| `GOOGLE_CLIENT_SECRET` | Google OAuth 密钥 | 从 Google Cloud Console 获取 |

4. 确保选择所有环境：Production, Preview, Development

> **注意**: 本项目使用 DeepSeek API（兼容 OpenAI 格式）。API key 通过 `OPENAI_API_KEY` 环境变量配置，代码会自动连接到 DeepSeek 的端点 `https://api.deepseek.com/v1`。

### 第二步：配置 Google OAuth

**详细步骤请参考 `GOOGLE_OAUTH_SETUP.md` 文件**

快速概览：

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目
3. 配置 OAuth 同意屏幕
4. 创建 OAuth 2.0 客户端 ID
5. 添加授权重定向 URI：
   - 本地开发：`http://localhost:3000/api/auth/callback/google`
   - 生产环境：`https://your-domain.vercel.app/api/auth/callback/google`
6. 将客户端 ID 和密钥添加到 Vercel 环境变量

### 第三步：部署

```bash
# 推送代码到 GitHub
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

Vercel 会自动检测并部署你的 Next.js 应用。

### 第四步：验证部署

部署完成后，访问以下页面确认：
- 主页: `https://your-domain.vercel.app/`
- 音乐生成器: `https://your-domain.vercel.app/music-generator`
- 歌曲生成器: `https://your-domain.vercel.app/song-generator`
- 定价页面: `https://your-domain.vercel.app/pricing`
- 登录页面: `https://your-domain.vercel.app/login`

测试 Google OAuth 登录功能。

## 本地开发

```bash
# 安装依赖
npm install

# 创建本地环境变量文件
cp .env.example .env.local

# 编辑 .env.local，添加所需的环境变量
# 包括 OPENAI_API_KEY, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID 等

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI 组件**: shadcn/ui + Radix UI
- **样式**: Tailwind CSS v4
- **AI 集成**: DeepSeek API (deepseek-chat 模型)
- **认证**: NextAuth.js (Auth.js)
- **部署**: Vercel

## 常见问题

### 遇到 404 错误？

如果部署后出现 404 错误，请检查：

1. ✅ 环境变量 `OPENAI_API_KEY` 是否已在 Vercel 中配置
2. ✅ 所有文件是否已推送到 GitHub
3. ✅ Vercel 构建日志是否显示成功
4. ✅ 尝试重新部署：Deployments → 点击三个点 → Redeploy

### API 调用失败？

如果 AI 生成功能无法工作：

1. ✅ 确认 DeepSeek API key 有效且有额度
2. ✅ 检查 Vercel 环境变量配置正确
3. ✅ 查看 Vercel Functions 日志中的错误信息
4. ✅ 确认 API key 格式正确（以 `sk-` 开头）

### Google 登录不工作？

如果 Google OAuth 登录失败：

1. ✅ 确认所有 OAuth 环境变量已正确配置
2. ✅ 检查 Google Cloud Console 中的重定向 URI 是否匹配
3. ✅ 确认已将测试用户添加到 OAuth 同意屏幕
4. ✅ 查看浏览器控制台和 Vercel 日志中的错误
5. ✅ 确保 `NEXTAUTH_URL` 与实际部署 URL 匹配

### 需要帮助？

请提供以下信息：
- Vercel 部署日志
- GitHub 仓库链接
- 错误截图

## 文档

- [Google OAuth 设置指南](./GOOGLE_OAUTH_SETUP.md) - 完整的 Google 登录配置步骤

## 许可证

MIT License
