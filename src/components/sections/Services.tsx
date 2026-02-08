import Link from 'next/link';
import { landingServices } from '@/data/services';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { FadeUp } from '@/components/ui/FadeUp';

export default function Services() {
  return (
    <section className="w-full bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeUp className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Our Services</h2>
            <p className="text-stone text-lg">
              We build software that replaces manual work, connects your tools, and brings new ideas
              to life.
            </p>
          </div>
          <Link
            href="/services"
            className="group/link hidden md:flex items-center gap-1.5 text-forest font-bold hover:text-accent transition-colors"
          >
            <span className="underline-center">See all services</span>
            <span
              className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover/link:translate-x-1"
              aria-hidden="true"
            >
              arrow_right_alt
            </span>
          </Link>
        </FadeUp>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingServices.map((service, index) => (
            <FadeUp key={service.title} delay={index * 150}>
              <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:border-forest/20 h-full">
                {/* Watermark Icon */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 scale-100 group-hover:scale-110 transition-[opacity,transform] duration-500">
                  <span
                    className="material-symbols-outlined text-[96px] text-forest"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                </div>

                <CardHeader>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center text-forest mb-2 group-hover:bg-forest group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {service.icon}
                    </span>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-stone text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
