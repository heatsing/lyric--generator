import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Lyrics Into Song",
  description: "Privacy policy for Lyrics Into Song. Learn how we protect your data and respect your privacy.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: January 2026</p>

            <h2>Introduction</h2>
            <p>
              Welcome to Lyrics Into Song. We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we handle your information when you use our service.
            </p>

            <h2>Data We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>
                <strong>Lyrics & Song Inputs</strong>: Genre, mood, theme, and topic selections you make
              </li>
              <li>
                <strong>Optional Information</strong>: Email address if you choose to subscribe to updates
              </li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>
                <strong>Usage Data</strong>: Pages visited, features used, and interaction patterns
              </li>
              <li>
                <strong>Device Information</strong>: Browser type, operating system, IP address
              </li>
              <li>
                <strong>Analytics</strong>: Anonymous usage statistics via Umami Analytics (privacy-focused, no cookies)
              </li>
            </ul>

            <h2>How We Use Your Data</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and improve our lyrics-to-song service</li>
              <li>Understand usage patterns to optimize user experience</li>
              <li>Prevent abuse and ensure service security</li>
              <li>Send optional updates if you subscribed (you can unsubscribe anytime)</li>
            </ul>

            <h2>Data Storage and Security</h2>
            <p>
              <strong>We do NOT store your generated lyrics or songs.</strong> All generation happens in real-time and
              is not saved to our servers. Your creative work belongs to you and only you.
            </p>
            <p>
              We use industry-standard security measures to protect any data we do collect. Our analytics are
              privacy-focused and do not use tracking cookies.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of analytics tracking</li>
              <li>Withdraw consent for email communications</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li>
                <strong>DeepSeek API</strong>: For AI generation (input data is processed but not stored)
              </li>
              <li>
                <strong>Umami Analytics</strong>: Privacy-focused analytics (no cookies, GDPR compliant)
              </li>
              <li>
                <strong>Vercel</strong>: Hosting and infrastructure
              </li>
            </ul>

            <h2>Copyright and Ownership</h2>
            <p>
              <strong>All generated lyrics and songs are yours.</strong> You own the copyright to any content created
              using our tool. You are free to use it for personal or commercial purposes without attribution.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our service is not directed at children under 13. We do not knowingly collect personal information from
              children. If you believe a child has provided us with personal data, please contact us.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated
              "Last updated" date. Continued use of our service after changes constitutes acceptance of the new policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or wish to exercise your rights, please contact us at:
            </p>
            <p className="font-mono bg-muted p-4 rounded">support@lyricsintosong.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
