# AI 歌词生成器 / AI Lyrics Generator

🎵 使用 AI 技术生成原创歌词、音乐和完整歌曲的在线工具。

## 功能特性

- 🎼 **歌词生成器** - 根据类型、情绪和主题生成原创歌词
- 🎹 **音乐生成器** - 创建器乐音轨和背景音乐
- 🎤 **歌曲生成器** - 生成包含人声的完整歌曲
- 🌍 **多语言支持** - 支持英语、中文、西班牙语等 7 种语言
- 💎 **灵活定价** - 从免费计划到企业解决方案

## 部署到 Vercel

### 第一步：配置环境变量

在 Vercel 项目中添加以下环境变量：

1. 进入 Vercel 项目设置
2. 点击 "Environment Variables"
3. 添加变量：
   - **名称**: `OPENAI_API_KEY`
   - **值**: `sk-e9052c75601b4ba1804d5f7a9958151c`
   - **环境**: Production, Preview, Development (全选)

### 第二步：部署

```bash
# 推送代码到 GitHub
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

Vercel 会自动检测并部署你的 Next.js 应用。

### 第三步：验证部署

部署完成后，访问以下页面确认：
- 主页: `https://your-domain.vercel.app/`
- 音乐生成器: `https://your-domain.vercel.app/music-generator`
- 歌曲生成器: `https://your-domain.vercel.app/song-generator`
- 定价页面: `https://your-domain.vercel.app/pricing`
- 登录页面: `https://your-domain.vercel.app/login`

## 本地开发

```bash
# 安装依赖
npm install

# 创建本地环境变量文件
cp .env.example .env.local

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI 组件**: shadcn/ui + Radix UI
- **样式**: Tailwind CSS v4
- **AI 集成**: OpenAI GPT-4
- **部署**: Vercel

## 常见问题

### 遇到 404 错误？

如果部署后出现 404 错误，请检查：

1. ✅ 环境变量 `OPENAI_API_KEY` 是否已在 Vercel 中配置
2. ✅ 所有文件是否已推送到 GitHub
3. ✅ Vercel 构建日志是否显示成功
4. ✅ 尝试重新部署：Deployments → 点击三个点 → Redeploy

### 需要帮助？

请提供以下信息：
- Vercel 部署日志
- GitHub 仓库链接
- 错误截图

## 许可证

MIT License
