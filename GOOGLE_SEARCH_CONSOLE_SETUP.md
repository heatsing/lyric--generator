# Google Search Console 设置指南

## 已完成的配置

✅ **站点地图已生成**: `/sitemap.xml`  
✅ **Robots.txt 已配置**: `/robots.txt`  
✅ **Umami 统计代码已安装**

---

## 提交到 Google Search Console 的步骤

### 1. 配置网站 URL

在 Vercel 的环境变量中添加：

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 2. 访问 Google Search Console

前往: https://search.google.com/search-console

### 3. 添加资源

1. 点击 **"添加资源"**
2. 选择 **"URL 前缀"** 方式
3. 输入你的网站 URL: `https://your-domain.vercel.app`
4. 点击 **"继续"**

### 4. 验证所有权

**推荐方法：HTML 标记**

1. Google 会提供一个 meta 标签，类似：
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```

2. 将此代码添加到 `app/layout.tsx` 的 metadata 中

3. 部署后点击 **"验证"**

**或使用 DNS 验证：**
- 在你的域名 DNS 设置中添加 TXT 记录
- 使用 Google 提供的验证代码

### 5. 提交站点地图

验证成功后：

1. 在左侧菜单选择 **"站点地图"**
2. 在 **"添加新的站点地图"** 输入框中输入: `sitemap.xml`
3. 点击 **"提交"**

### 6. 站点地图包含的页面

您的站点地图包含以下页面：

**主要页面:**
- 首页 (Lyrics Generator)
- Poem Generator
- Story Generator
- Login

**流派页面 (18个):**
- R&B, Rock, Pop, Rap, Elementary School Songs
- Folk, Jazz, K-Pop, Country, Diss Track
- EDM, Reggae, Blues, Metal, Indie
- Love Song, Christmas Song, Birthday Song

### 7. 检查索引状态

提交后 1-2 天：
1. 访问 **"网址检查"** 工具
2. 输入你的网站 URL 查看索引状态
3. 如果未索引，点击 **"请求编入索引"**

---

## Umami 统计数据查看

访问: https://cloud.umami.is/

使用你的账号登录即可查看网站访问统计。

---

## SEO 优化已完成

✅ 所有页面都有优化的 meta 标题和描述  
✅ 关键词针对 Google 搜索优化  
✅ Schema.org 结构化数据  
✅ Open Graph 和 Twitter Card  
✅ 响应式设计和移动端优化  
✅ 快速加载速度（Next.js App Router）  
✅ 语义化 HTML 标签  

---

## 常见问题

**Q: 站点地图多久更新一次？**  
A: 每次部署时自动更新，主页每天更新，其他页面每周更新。

**Q: 为什么某些页面没被索引？**  
A: Google 通常需要 1-4 周才能索引新网站。确保：
- 内容质量高
- 页面加载速度快
- 没有 robots.txt 阻止
- 已提交站点地图

**Q: 如何提高 SEO 排名？**  
A: 
1. 定期更新内容
2. 增加高质量外链
3. 提高页面加载速度
4. 改善用户体验
5. 获取用户评价和分享
