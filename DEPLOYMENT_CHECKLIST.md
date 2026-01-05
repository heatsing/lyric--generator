# 🚀 部署前最终检查清单

## 必需步骤（按顺序执行）

### 1️⃣ 生成 SEO 页面数据
```bash
python scripts/seo_generator.py
```
**验证**：
- ✅ 确认 `data/seo_pages.json` 已生成
- ✅ 文件大小约 50-150KB
- ✅ 打开文件检查 JSON 格式正确

---

### 2️⃣ 配置环境变量

在 Vercel Dashboard → Settings → Environment Variables 添加：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `OPENAI_API_KEY` | `sk-e905...` | DeepSeek API 密钥（已提供） |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.vercel.app` | 完整的生产环境域名 |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | `1932d792...` | Umami 统计代码（已配置） |

**注意**：所有环境都要勾选（Production, Preview, Development）

---

### 3️⃣ 推送代码到 GitHub
```bash
git add .
git commit -m "feat: 完成移动端SEO优化和300+长尾页面"
git push origin main
```

---

### 4️⃣ Vercel 自动部署
- Vercel 检测到推送后自动开始构建
- 构建时间：约 3-5 分钟（因为要预渲染 300+ 页面）
- 查看构建日志确保无错误

**常见构建错误排查**：
- ❌ `seo_pages.json not found` → 步骤 1 未完成
- ❌ `NEXT_PUBLIC_SITE_URL is undefined` → 步骤 2 未完成
- ❌ `generateStaticParams failed` → 检查 JSON 格式

---

### 5️⃣ 部署后验证

#### A. 检查关键页面
访问以下 URL 确认正常：
- ✅ `https://yourdomain.com/` （首页）
- ✅ `https://yourdomain.com/generator/happy-pop-lyrics`
- ✅ `https://yourdomain.com/generator/sad-rap-lyrics`
- ✅ `https://yourdomain.com/privacy`
- ✅ `https://yourdomain.com/terms`
- ✅ `https://yourdomain.com/sitemap.xml`
- ✅ `https://yourdomain.com/robots.txt`

#### B. 测试生成功能
1. 打开任意生成器页面
2. 填写表单（Genre, Mood, Theme）
3. 点击"Generate Lyrics"
4. 验证：
   - ✅ 加载状态显示（Loader 动画）
   - ✅ 歌词正确生成（带 [Verse], [Chorus] 标签）
   - ✅ Copy 按钮有效
   - ✅ Download 按钮有效

#### C. 移动端测试
使用 Chrome DevTools → 设备模拟：
- ✅ iPhone 12/13/14 Pro
- ✅ Samsung Galaxy S21
- ✅ iPad

测试项：
- ✅ 点击输入框，键盘弹出后仍能看到内容
- ✅ 按钮点击区域足够大（44x44px）
- ✅ 文字大小适中，无需缩放
- ✅ 横向滚动无异常

---

### 6️⃣ 提交到 Google Search Console

#### 添加网站
1. 访问：https://search.google.com/search-console
2. 点击"添加资源"
3. 输入：`https://yourdomain.com`
4. 验证方式：选择"HTML 标签"或"域名 DNS"

#### 提交站点地图
1. 左侧菜单 → 站点地图
2. 输入：`sitemap.xml`
3. 点击"提交"
4. 状态应显示"成功"

#### 请求索引（可选，加快收录）
1. 顶部搜索框输入任意页面 URL
2. 点击"请求索引"
3. 等待 Google 抓取

---

### 7️⃣ Lighthouse 性能测试

#### 运行测试
1. 打开 Chrome DevTools
2. Lighthouse 选项卡
3. 选择：Mobile, All Categories
4. 点击"Analyze page load"

#### 期望分数
| 指标 | 目标 | 说明 |
|------|------|------|
| Performance | > 90 | 页面加载速度 |
| Accessibility | > 95 | 无障碍访问 |
| Best Practices | > 90 | 最佳实践 |
| SEO | > 95 | 搜索引擎优化 |

**如果分数低于目标**：
- Performance < 90：检查图片优化、字体加载
- SEO < 95：检查 meta 标签、sitemap、robots.txt

---

## 🎉 部署成功标志

完成以上所有步骤后，你应该看到：

✅ **Vercel Dashboard**：部署状态显示 "Ready"
✅ **网站访问**：所有页面正常加载，无 404
✅ **生成功能**：AI 正确生成歌词
✅ **移动端**：体验流畅，无布局问题
✅ **Sitemap**：包含 300+ 页面 URL
✅ **Google Search Console**：站点地图已提交
✅ **Lighthouse**：所有指标 > 90 分

---

## 🐛 常见问题排查

### 问题 1：生成器页面 404
**原因**：`seo_pages.json` 未生成或未包含该 slug
**解决**：
```bash
python scripts/seo_generator.py
git add data/seo_pages.json
git commit -m "add: SEO pages data"
git push
```

### 问题 2：API 调用失败
**原因**：环境变量未配置或 API 密钥错误
**解决**：
1. 检查 Vercel → Settings → Environment Variables
2. 确认 `OPENAI_API_KEY` 存在且正确
3. 重新部署：Deployments → 最新部署 → Redeploy

### 问题 3：站点地图无法读取
**原因**：`NEXT_PUBLIC_SITE_URL` 未设置
**解决**：
1. 添加环境变量：`NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
2. 重新部署

### 问题 4：移动端键盘遮挡
**原因**：浏览器兼容性问题
**解决**：已添加 `pb-[50vh]` 应该解决，如仍有问题可增加到 `pb-[60vh]`

---

## 📞 需要帮助？

- 📖 查看 `MOBILE_SEO_OPTIMIZATION.md`
- 📖 查看 `SEO_IMPLEMENTATION_GUIDE.md`
- 📖 查看 `DEVOPS_VERIFICATION_REPORT.md`

---

**检查清单完成日期**：_____________
**部署人员签名**：_____________
**Vercel 部署 URL**：_____________
