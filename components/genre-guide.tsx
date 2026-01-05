"use client"

export default function GenreGuide() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Understanding Song Lyric Styles</h2>
        <p className="text-center text-muted-foreground mb-12 text-pretty leading-relaxed">
          Different music genres require unique approaches to songwriting. Learn the key characteristics of popular
          styles.
        </p>

        <div className="space-y-8">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-2xl font-bold mb-3 text-primary">Pop Music Lyrics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pop lyrics typically feature catchy hooks, repetitive choruses, and relatable themes about love,
              relationships, and personal experiences. The structure usually follows a
              verse-chorus-verse-chorus-bridge-chorus pattern, with the chorus being the most memorable part. Pop
              songwriting emphasizes simplicity and emotional directness, making it easy for listeners to sing along.
              <strong> Use our lyric generator</strong> to create infectious pop hooks that stick in your audience's
              mind.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-2xl font-bold mb-3 text-accent">Rap & Hip Hop Lyrics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rap lyrics are characterized by intricate wordplay, multisyllabic rhymes, and complex rhythmic patterns.
              Hip hop songwriting often includes storytelling, social commentary, and personal narratives delivered with
              confidence and flow. The structure focuses on verses with 16 bars, hooks, and sometimes bridges, with
              emphasis on internal rhymes and metaphors.
              <strong> Our AI rap generator</strong> understands authentic hip hop culture and can create bars with
              clever punchlines and seamless flow.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-2xl font-bold mb-3">Folk & Acoustic Lyrics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Folk lyrics emphasize storytelling, authenticity, and emotional depth. These songs often draw from
              personal experiences, traditional tales, or social issues, delivered with poetic language and vivid
              imagery. The structure is flexible, sometimes following traditional ballad forms or more free-flowing
              narrative patterns. Folk music values lyrical substance over commercial appeal.
              <strong> Generate folk lyrics</strong> that capture timeless human experiences with our specialized AI
              tool.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Ready to create your own professional lyrics? Our AI-powered generator supports 15+ genres including rock,
            country, R&B, EDM, and more. Whether you're writing your first song or you're a seasoned songwriter looking
            for inspiration, our tool delivers authentic, creative lyrics tailored to your exact specifications.
          </p>
        </div>
      </div>
    </section>
  )
}
