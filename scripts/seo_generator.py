import json
import os

# 定义各种组合维度
genres = ["Pop", "Rock", "Rap", "R&B", "Country", "Jazz", "EDM", "K-Pop", "Folk", "Metal", "Indie", "Blues", "Reggae"]
moods = ["Happy", "Sad", "Romantic", "Energetic", "Melancholic", "Angry", "Chill", "Inspirational", "Dark", "Nostalgic"]
themes = ["Love", "Breakup", "Party", "Life", "Dreams", "Freedom", "Friendship", "Heartbreak", "Success", "Hope"]
occasions = ["Birthday", "Christmas", "Wedding", "Graduation", "Valentine", "New Year", "Summer", "Halloween"]
styles = ["Acoustic", "Trap", "Drill", "Lo-fi", "Ballad", "Anthem", "Freestyle"]

genre_unique_descriptions = {
    "Pop": "Pop lyrics are characterized by catchy hooks, relatable themes, and memorable choruses. Perfect for mainstream audiences and radio-friendly content.",
    "Rap": "Rap lyrics focus on rhythm, wordplay, and storytelling. Craft powerful bars with clever metaphors, internal rhymes, and authentic flow.",
    "Rock": "Rock lyrics embody raw emotion, rebellion, and powerful imagery. Create anthemic choruses and verse narratives that resonate with energy.",
    "R&B": "R&B lyrics blend soulful storytelling with smooth, emotional delivery. Perfect for love songs, personal reflections, and heartfelt ballads.",
    "Country": "Country lyrics tell authentic stories of life, love, and heartache. Rich with vivid imagery and down-to-earth narratives.",
    "Jazz": "Jazz lyrics are sophisticated and poetic, exploring complex emotions with timeless elegance and smooth phrasing.",
    "EDM": "EDM lyrics are energetic and uplifting, designed for festival anthems and high-energy dance floors. Focus on memorable hooks.",
    "K-Pop": "K-Pop lyrics combine catchy Korean and English phrases with dynamic energy. Perfect for trend-setting, performance-ready songs.",
    "Folk": "Folk lyrics embrace storytelling traditions, acoustic simplicity, and authentic human experiences with poetic depth.",
    "Metal": "Metal lyrics channel intensity, aggression, and powerful themes. Dark imagery and commanding language define the genre.",
    "Indie": "Indie lyrics prioritize authenticity and creative freedom. Explore unique perspectives with artistic, non-mainstream expression.",
    "Blues": "Blues lyrics express raw emotion, struggle, and resilience. Rooted in African-American musical traditions with deep soul.",
    "Reggae": "Reggae lyrics promote unity, love, and social consciousness. Laid-back rhythm with meaningful, positive messages."
}

def generate_unique_description(genre, mood, theme):
    """Generate unique descriptions for each page to avoid duplicate content penalties"""
    base = genre_unique_descriptions.get(genre, "AI-powered lyrics generation")
    
    mood_phrases = {
        "Happy": "uplifting and joyful",
        "Sad": "melancholic and emotional",
        "Romantic": "heartfelt and passionate",
        "Energetic": "high-energy and dynamic",
        "Melancholic": "introspective and contemplative",
        "Angry": "intense and powerful",
        "Chill": "relaxed and mellow",
        "Inspirational": "motivating and empowering",
        "Dark": "brooding and atmospheric",
        "Nostalgic": "reflective and sentimental"
    }
    
    if mood and mood in mood_phrases:
        return f"{base} Our {mood.lower()} {genre.lower()} generator creates {mood_phrases[mood]} lyrics that capture authentic emotion."
    elif theme:
        return f"{base} Generate {genre.lower()} lyrics focused on {theme.lower()} with professional quality and instant results."
    else:
        return base

def generate_pages():
    pages = []
    page_id = 1
    
    # 1. 流派 + 心情组合 (130种)
    for genre in genres:
        for mood in moods:
            slug = f"{mood.lower()}-{genre.lower()}-lyrics"
            title = f"{mood} {genre} Lyrics Generator"
            description = generate_unique_description(genre, mood, None)
            keywords = f"{mood.lower()} {genre.lower()} lyrics, {genre.lower()} song generator, {mood.lower()} songs, AI lyrics generator"
            
            pages.append({
                "id": page_id,
                "slug": slug,
                "title": title,
                "description": description,
                "h1": f"AI {mood} {genre} Lyrics Generator",
                "keywords": keywords,
                "preset": {
                    "genre": genre,
                    "mood": mood,
                    "theme": "",
                    "topic": f"{mood} {genre} music"
                }
            })
            page_id += 1
    
    # 2. 流派 + 主题组合 (117种)
    for genre in genres:
        for theme in themes:
            slug = f"{theme.lower()}-{genre.lower()}-lyrics"
            title = f"{theme} {genre} Lyrics Generator"
            description = generate_unique_description(genre, None, theme)
            keywords = f"{theme.lower()} {genre.lower()} lyrics, {genre.lower()} {theme.lower()} songs, {theme.lower()} song generator"
            
            pages.append({
                "id": page_id,
                "slug": slug,
                "title": title,
                "description": description,
                "h1": f"{theme} {genre} Lyrics Generator - AI Powered",
                "keywords": keywords,
                "preset": {
                    "genre": genre,
                    "mood": "",
                    "theme": theme,
                    "topic": f"{theme} in {genre} style"
                }
            })
            page_id += 1
    
    # 3. 场合专题 (8种)
    for occasion in occasions:
        slug = f"{occasion.lower()}-song-lyrics"
        title = f"{occasion} Song Lyrics Generator"
        description = f"Create perfect {occasion.lower()} song lyrics with AI. Generate custom {occasion.lower()} songs for your special celebration instantly and free."
        keywords = f"{occasion.lower()} song lyrics, {occasion.lower()} songs, {occasion.lower()} music generator, {occasion.lower()} lyrics AI"
        
        pages.append({
            "id": page_id,
            "slug": slug,
            "title": title,
            "description": description,
            "h1": f"AI {occasion} Song Lyrics Generator",
            "keywords": keywords,
            "preset": {
                "genre": "Pop",
                "mood": "Happy",
                "theme": occasion,
                "topic": f"{occasion} celebration song"
            }
        })
        page_id += 1
    
    # 4. 风格特定 (91种)
    for style in styles:
        for genre in genres:
            slug = f"{style.lower()}-{genre.lower()}-lyrics"
            title = f"{style} {genre} Lyrics Generator"
            description = f"Generate {style.lower()} {genre.lower()} lyrics with AI. Create authentic {style.lower()} style {genre.lower()} songs with professional quality instantly."
            keywords = f"{style.lower()} {genre.lower()}, {genre.lower()} {style.lower()} lyrics, {style.lower()} lyrics generator"
            
            pages.append({
                "id": page_id,
                "slug": slug,
                "title": title,
                "description": description,
                "h1": f"{style} {genre} Lyrics Generator",
                "keywords": keywords,
                "preset": {
                    "genre": genre,
                    "mood": "",
                    "theme": "",
                    "topic": f"{style} {genre} song"
                }
            })
            page_id += 1
    
    # 5. 热门长尾关键词 (手动精选50个)
    hot_keywords = [
        {"slug": "diss-track-lyrics", "title": "Diss Track Lyrics Generator", "genre": "Rap", "mood": "Angry", "topic": "diss track"},
        {"slug": "love-song-lyrics-for-her", "title": "Love Song Lyrics Generator for Her", "genre": "Pop", "mood": "Romantic", "topic": "love song for girlfriend"},
        {"slug": "breakup-song-lyrics", "title": "Breakup Song Lyrics Generator", "genre": "Pop", "mood": "Sad", "topic": "breakup and moving on"},
        {"slug": "rap-battle-lyrics", "title": "Rap Battle Lyrics Generator", "genre": "Rap", "mood": "Energetic", "topic": "rap battle"},
        {"slug": "church-song-lyrics", "title": "Church Song Lyrics Generator", "genre": "Gospel", "mood": "Inspirational", "topic": "worship and praise"},
        {"slug": "lullaby-lyrics", "title": "Lullaby Lyrics Generator", "genre": "Folk", "mood": "Chill", "topic": "bedtime lullaby"},
        {"slug": "trap-beat-lyrics", "title": "Trap Beat Lyrics Generator", "genre": "Trap", "mood": "Dark", "topic": "trap music"},
        {"slug": "drill-rap-lyrics", "title": "Drill Rap Lyrics Generator", "genre": "Drill", "mood": "Aggressive", "topic": "drill rap"},
        {"slug": "emo-rap-lyrics", "title": "Emo Rap Lyrics Generator", "genre": "Rap", "mood": "Sad", "topic": "emo rap"},
        {"slug": "motivational-song-lyrics", "title": "Motivational Song Lyrics Generator", "genre": "Pop", "mood": "Inspirational", "topic": "motivation and success"},
        {"slug": "party-edm-lyrics", "title": "Party EDM Lyrics Generator", "genre": "EDM", "mood": "Energetic", "topic": "party anthem"},
    ]
    
    for kw in hot_keywords:
        pages.append({
            "id": page_id,
            "slug": kw["slug"],
            "title": kw["title"],
            "description": f"Create {kw['title'].lower()} with AI. Free and unlimited lyrics generation for {kw['topic']}.",
            "h1": f"AI {kw['title']}",
            "keywords": kw["slug"].replace("-", " ") + ", AI lyrics, song generator",
            "preset": {
                "genre": kw["genre"],
                "mood": kw["mood"],
                "theme": "",
                "topic": kw["topic"]
            }
        })
        page_id += 1
    
    return pages

def main():
    pages = generate_pages()
    
    # 保存为JSON
    output_dir = "data"
    os.makedirs(output_dir, exist_ok=True)
    
    with open(f"{output_dir}/seo_pages.json", "w", encoding="utf-8") as f:
        json.dump(pages, f, indent=2, ensure_ascii=False)
    
    print(f"✅ 生成了 {len(pages)} 个SEO页面")
    print(f"📁 文件保存在: {output_dir}/seo_pages.json")
    
    # 统计信息
    print("\n📊 页面分布：")
    print(f"  - 流派+心情组合: {len(genres) * len(moods)} 页")
    print(f"  - 流派+主题组合: {len(genres) * len(themes)} 页")
    print(f"  - 场合专题: {len(occasions)} 页")
    print(f"  - 风格特定: {len(styles) * len(genres)} 页")
    print(f"  - 热门关键词: 11 页")
    print(f"\n🎯 SEO优化: 每个页面都有独特的描述，避免重复内容惩罚")

if __name__ == "__main__":
    main()
