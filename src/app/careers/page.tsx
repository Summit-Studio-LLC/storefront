import type { Metadata } from 'next';
import { FadeUp } from '@/components/ui/FadeUp';
import { Badge } from '@/components/ui/badge';
import { CareersForm } from '@/components/sections/CareersForm';
import { careerTracks } from '@/data/careers';
import { siteConfig } from '@/data/site';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    "Interested in working with Summit Studio? We're building a team of CS students and senior engineers who care about quality software.",
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Careers', url: `${siteConfig.url}/careers` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data requires dangerouslySetInnerHTML
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="w-full px-6 py-20 md:py-32">
        <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
          <h1
            className="animate-fade-in-up mb-6 font-serif text-5xl leading-[1.1] text-forest md:text-7xl"
            style={{ animationDelay: '0ms' }}
          >
            Work With Us
          </h1>
          <p
            className="animate-fade-in-up max-w-2xl text-lg leading-relaxed text-stone md:text-xl"
            style={{ animationDelay: '150ms' }}
          >
            Summit Studio is always looking for talented people who care about building great
            software. Whether you&apos;re a student looking for real-world experience or a senior
            engineer looking for interesting project work — we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      {/* Track Cards Section */}
      <section className="w-full border-y border-stone/5 bg-white/50 py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {careerTracks.map((track, index) => (
              <FadeUp key={track.id} delay={index * 150}>
                <div className="flex h-full flex-col rounded-xl border border-stone/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <span className="material-symbols-outlined">{track.icon}</span>
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl text-forest">{track.title}</h2>
                    </div>
                  </div>

                  <Badge variant="status" className="mb-6 w-fit">
                    {track.status}
                  </Badge>

                  <div className="mb-6 space-y-3">
                    <p className="text-stone">
                      <span className="font-semibold text-charcoal">Who: </span>
                      {track.who}
                    </p>
                    <p className="text-stone">
                      <span className="font-semibold text-charcoal">What: </span>
                      {track.what}
                    </p>
                    <p className="text-stone">
                      <span className="font-semibold text-charcoal">Commitment: </span>
                      {track.commitment}
                    </p>
                  </div>

                  <ul className="mb-6 flex-grow space-y-3">
                    {track.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 text-[20px] text-forest">
                          check_circle
                        </span>
                        <span className="text-stone">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="border-t border-stone/10 pt-6 text-sm italic text-stone">
                    {track.note}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="w-full px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <FadeUp className="mb-10 text-center">
            <h2 className="mb-4 font-serif text-4xl text-forest md:text-5xl">
              Express Your Interest
            </h2>
            <p className="text-lg text-stone">
              Not a job application — just a way to get on our radar. Tell us a little about
              yourself and we&apos;ll reach out when we have an opportunity that fits.
            </p>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="rounded-xl border border-stone/10 bg-white p-8 shadow-sm md:p-10">
              <CareersForm />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
