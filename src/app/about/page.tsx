import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Summit Studio",
  description:
    "Summit Studio is a teaching consultancy in Cookeville, TN. We modernize local businesses with custom software while training the next generation of developers.",
};

const modelCards = [
  {
    title: "Local Businesses",
    tagline: "Affordable Solutions, Real Results",
    description:
      "Custom software at 50% less than big agencies. Transparent pricing, local accountability, outcomes you can measure.",
  },
  {
    title: "CS Students",
    tagline: "Real Experience, Real Mentorship",
    description:
      "Tennessee Tech students work on real client projects under senior mentorship. Portfolio pieces, professional workflows, career support.",
  },
  {
    title: "Senior Engineers",
    tagline: "Give Back to Your Community",
    description:
      "Experienced remote engineers contribute 2-5 hours/month through mentoring, code review, and optional paid consulting.",
  },
];

const values = [
  {
    title: "Outcome-Focused",
    description:
      "We measure success by hours saved and errors prevented, not lines of code written.",
  },
  {
    title: "Simple & Maintainable",
    description: "Proven technologies. No over-engineering. Systems that last.",
  },
  {
    title: "Quality Through Mentorship",
    description: "Every line of code reviewed by a senior engineer.",
  },
  {
    title: "Teaching by Doing",
    description: "Real projects are the best classroom.",
  },
  {
    title: "Community-First",
    description: "We build relationships, not just software.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF8]">
      {/* Section 1: Mission */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold text-[#2D5F3E] md:text-5xl">
            Technology That Works for Your Business
          </h1>
          <div className="space-y-6 text-lg text-[#4A4A4A] md:text-xl">
            <p>
              Summit Studio is a teaching consultancy based in Cookeville,
              Tennessee. We help local businesses replace paper, spreadsheets,
              and manual workflows with simple, maintainable custom software.
            </p>
            <p>
              We&apos;re not a big agency with layers of project managers and
              hidden fees. We&apos;re a focused team that understands your
              business first, then builds exactly what you need — nothing more,
              nothing less.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Model */}
      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            The Summit Studio Model
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {modelCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-[#4A4A4A]/10 bg-[#FAFAF8] p-8"
              >
                <h3 className="mb-2 text-xl font-bold text-[#2D5F3E]">
                  {card.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-[#C46A32]">
                  {card.tagline}
                </p>
                <p className="text-[#4A4A4A]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Founder */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            Meet the Founder
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Photo placeholder */}
            <div className="flex h-64 w-64 flex-shrink-0 items-center justify-center rounded-lg bg-[#4A4A4A]/10">
              <span className="text-sm text-[#4A4A4A]/60">Photo</span>
            </div>
            {/* Bio placeholder */}
            <div className="text-center md:text-left">
              <p className="text-lg italic text-[#4A4A4A]">
                [Founder bio to be added]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Values */}
      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            Our Values
          </h2>
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-lg border-l-4 border-[#2D5F3E] bg-[#FAFAF8] p-6"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2D5F3E] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#2D5F3E]">
                    {value.title}
                  </h3>
                  <p className="text-[#4A4A4A]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-[#2D5F3E] md:text-3xl">
            Want to see what we can build for you?
          </h2>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#C46A32] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#a85a2a]"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
