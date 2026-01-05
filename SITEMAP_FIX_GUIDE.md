# 站点地图修复指南

## 问题诊断
Google Search Console 显示"无法抓取"错误，原因是：
1. 站点地图使用了不稳定的 `require()` 方法
2. 环境变量可能未正确设置

## 已修复的内容

### 1. 站点地图 (app/sitemap.ts)
- ✅ 改用 `fs.readFileSync` 读取 JSON 文件，更稳定
- ✅ 设置默认域名为 `https://lyricgenerator.cc`
- ✅ 添加错误处理，即使 JSON 加载失败也能生成基础站点地图

### 2. Robots.txt (app/robots.ts)
- ✅ 更新为正确的域名
- ✅ 正确引用站点地图路径

## Vercel 环境变量配置

### 必须配置的环境变量：
1. **NEXT_PUBLIC_SITE_URL**
   - 值：`https://lyricgenerator.cc`
   - 适用于：Production, Preview, Development

2. **OPENAI_API_KEY**
   - 值：`sk-e9052c75601b4ba1804d5f7a9958151c`
   - 适用于：Production, Preview, Development

### 配置步骤：
1. 登录 Vercel Dashboard
2. 选择项目 → Settings → Environment Variables
3. 添加上述两个环境变量
4. 点击 Save
5. 前往 Deployments → 最新部署 → Redeploy

## 验证站点地图

### 本地测试
```bash
npm run build
npm run start
curl http://localhost:3000/sitemap.xml
```

### 生产环境测试
```bash
curl https://lyricgenerator.cc/sitemap.xml
```

应该看到包含以下内容的 XML：
- 首页 (/)
- Poem Generator (/poem-generator)
- Story Generator (/story-generator)
- 18个流派页面 (/genre/*)
- 25个动态生成器页面 (/generator/*)
- Privacy & Terms 页面

## Google Search Console 重新提交

1. 访问：https://search.google.com/search-console
2. 选择资源：lyricgenerator.cc
3. 左侧菜单 → 站点地图
4. 删除旧的站点地图提交
5. 重新提交：`sitemap.xml`
6. 等待 5-10 分钟后刷新查看状态

## 预期结果
- ✅ 状态：成功
- ✅ 已发现的网址数量：40+
- ✅ 最后读取时间：当前日期

## 故障排除

### 如果仍然显示"无法抓取"：
1. 检查 Vercel 部署日志是否有错误
2. 确认 `data/seo_pages.json` 文件存在
3. 检查网站是否可以公开访问（没有密码保护）
4. 使用 Google Rich Results Test 测试：
   https://search.google.com/test/rich-results?url=https://lyricgenerator.cc/sitemap.xml

### 如果部分页面 404：
1. 运行 Python 脚本生成更多 SEO 页面：
   ```bash
   python scripts/seo_generator.py
   ```
2. 重新部署项目

## 监控建议
- 每周检查 Google Search Console 的覆盖率报告
- 监控"有效页面"数量是否增长
- 查看"排除的页面"原因并修复
