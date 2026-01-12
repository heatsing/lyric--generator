# Sitemap Troubleshooting Guide for Google Search Console

## Issue: "无法读取此站点地图" (Cannot read this sitemap)

### Quick Fix Steps

1. **Verify Sitemap is Accessible**
   ```bash
   curl -I https://lyricgenerator.cc/sitemap.xml
   ```
   Should return `200 OK`

2. **Check in Browser**
   Visit: https://lyricgenerator.cc/sitemap.xml
   You should see XML content starting with `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

3. **Verify robots.txt**
   Visit: https://lyricgenerator.cc/robots.txt
   Should contain: `Sitemap: https://lyricgenerator.cc/sitemap.xml`

### Common Issues and Solutions

#### Issue 1: Sitemap Returns 404
**Cause**: Next.js build didn't generate the sitemap properly
**Solution**: 
- Redeploy the project on Vercel
- Ensure `app/sitemap.ts` exists and has no syntax errors
- Check Vercel build logs for errors

#### Issue 2: Sitemap XML is Malformed
**Cause**: Invalid XML structure or characters
**Solution**:
- The new simplified sitemap.ts uses hardcoded string dates
- No special characters in URLs
- All URLs are properly encoded

#### Issue 3: Google Still Can't Read After 24 Hours
**Solution**:
1. In Google Search Console, delete the old sitemap entry
2. Wait 5 minutes
3. Re-submit with the exact URL: `https://lyricgenerator.cc/sitemap.xml` (no www)
4. Google typically takes 1-3 days to crawl

### Verification Checklist

- [ ] Sitemap accessible at https://lyricgenerator.cc/sitemap.xml
- [ ] HTML Sitemap accessible at https://lyricgenerator.cc/sitemap-html
- [ ] robots.txt contains sitemap reference
- [ ] All URLs in sitemap use https:// (not http://)
- [ ] No redirects on sitemap URL (should be 200, not 301/302)
- [ ] Sitemap contains 68+ URLs (1 homepage + 2 generators + 18 genres + 25 specialized + legal pages)

### Manual Submission to Google

1. Go to: https://search.google.com/search-console
2. Select property: `lyricgenerator.cc`
3. Left sidebar → **Sitemaps**
4. Remove old sitemap entries (click the 3 dots → Delete)
5. Add new sitemap: Enter `sitemap.xml` (not full URL)
6. Click **Submit**
7. Wait 24-48 hours for Google to process

### Alternative: HTML Sitemap

If XML sitemap continues to have issues, the HTML sitemap at `/sitemap-html` provides:
- User-friendly navigation
- Internal linking for SEO
- Backup for search engine crawlers
- Always accessible and readable

### Contact Support

If issues persist after 72 hours:
1. Check Vercel deployment logs
2. Verify DNS settings for lyricgenerator.cc
3. Test with Google's Sitemap Validator: https://www.xml-sitemaps.com/validate-xml-sitemap.html
