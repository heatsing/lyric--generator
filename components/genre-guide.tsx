"use client"

export default function GenreGuide() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Understanding Song Lyric Styles</h2>
        <p className="text-center text-muted-foreground mb-12 text-pretty leading-relaxed">
          Different music genres require unique approaches to songwriting. Learn the key characteristics of popular
          styles.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-3 text-primary">Pop Music</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Catchy hooks, repetitive choruses, and relatable themes. Pop lyrics emphasize simplicity and emotional
              directness, perfect for sing-along moments.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-colors">
            <h3 className="text-xl font-bold mb-3 text-accent">Rap & Hip Hop</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Intricate wordplay, multisyllabic rhymes, and complex rhythms. Hip hop focuses on storytelling, social
              commentary, and clever punchlines.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-3">Rock & Metal</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Powerful emotions, rebellious themes, and energetic delivery. Rock lyrics often explore passion, struggle,
              and raw authenticity.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-colors">
            <h3 className="text-xl font-bold mb-3">Folk & Country</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Storytelling, authenticity, and emotional depth. These genres value lyrical substance and vivid imagery
              over commercial appeal.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Ready to create your own professional lyrics? Our AI-powered generator supports 15+ genres including R&B,
            EDM, Jazz, Blues and more. Whether you're writing your first song or you're a seasoned songwriter, our tool
            delivers authentic lyrics tailored to your specifications.
          </p>
        </div>
      </div>
    </section>
  )
}
