import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | AI Lyrics Generator",
  description:
    "Terms of service for AI Lyrics Generator. Understand your rights and responsibilities when using our service.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: January 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using AI Lyrics Generator ("the Service"), you accept and agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              AI Lyrics Generator provides an AI-powered tool for generating song lyrics based on user inputs. The
              Service is provided free of charge for personal and commercial use.
            </p>

            <h2>3. User Rights and Ownership</h2>
            <h3>3.1 Copyright Ownership</h3>
            <p>
              <strong>You own all rights to the lyrics generated using our Service.</strong> We claim no ownership,
              copyright, or intellectual property rights over generated content.
            </p>

            <h3>3.2 Commercial Use</h3>
            <p>You are free to use generated lyrics for:</p>
            <ul>
              <li>Personal creative projects</li>
              <li>Commercial music releases</li>
              <li>Performance and recording</li>
              <li>Publishing and distribution</li>
              <li>Any other legal purpose</li>
            </ul>
            <p>No attribution to AI Lyrics Generator is required, though it's appreciated.</p>

            <h2>4. User Responsibilities</h2>
            <h3>4.1 Acceptable Use</h3>
            <p>You agree NOT to:</p>
            <ul>
              <li>Generate content that is illegal, harmful, or violates others' rights</li>
              <li>Create lyrics promoting hate speech, violence, or discrimination</li>
              <li>Abuse the Service through automated scraping or excessive requests</li>
              <li>Attempt to reverse engineer or copy our AI models</li>
              <li>Impersonate others or provide false information</li>
            </ul>

            <h3>4.2 Content Responsibility</h3>
            <p>
              You are solely responsible for how you use generated lyrics. We do not review, approve, or endorse
              generated content. You must ensure your use complies with all applicable laws.
            </p>

            <h2>5. AI-Generated Content Disclaimer</h2>
            <h3>5.1 No Guarantee of Uniqueness</h3>
            <p>
              While our AI strives to create original content, we cannot guarantee that generated lyrics are completely
              unique or have never been created before. You should review and modify content as needed.
            </p>

            <h3>5.2 Quality and Accuracy</h3>
            <p>
              AI-generated lyrics are provided "as is" without warranty. We do not guarantee grammatical perfection,
              rhyme quality, or creative excellence. Results may vary based on inputs.
            </p>

            <h2>6. Service Availability</h2>
            <p>
              We strive to provide 24/7 availability but do not guarantee uninterrupted access. The Service may be
              temporarily unavailable due to:
            </p>
            <ul>
              <li>Maintenance and updates</li>
              <li>Technical issues or server problems</li>
              <li>Third-party service disruptions</li>
              <li>Force majeure events</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul>
              <li>The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind</li>
              <li>We are not liable for any direct, indirect, incidental, or consequential damages</li>
              <li>We are not responsible for how you use generated lyrics or any resulting disputes</li>
              <li>Our total liability shall not exceed $100 USD</li>
            </ul>

            <h2>8. Changes to Service and Terms</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Modify or discontinue the Service at any time</li>
              <li>Update these Terms of Service with reasonable notice</li>
              <li>Implement usage limits or paid tiers in the future</li>
            </ul>
            <p>Continued use after changes constitutes acceptance of modified terms.</p>

            <h2>9. Account Termination</h2>
            <p>We reserve the right to suspend or terminate access to the Service for users who:</p>
            <ul>
              <li>Violate these Terms of Service</li>
              <li>Engage in abusive or harmful behavior</li>
              <li>Generate illegal or harmful content</li>
            </ul>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless AI Lyrics Generator, its operators, and affiliates from any
              claims, damages, or expenses arising from your use of the Service or violation of these terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without
              regard to conflict of law principles.
            </p>

            <h2>12. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact:</p>
            <p className="font-mono bg-muted p-4 rounded">support@ailyricsgenerator.com</p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in
              full effect.
            </p>

            <p className="mt-8 p-4 bg-primary/10 rounded-lg">
              <strong>Summary:</strong> You own the lyrics you generate. Use them however you want. Don't create illegal
              content. We're not responsible for what you do with AI-generated lyrics. Be cool, and we'll be cool. 🎵
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
