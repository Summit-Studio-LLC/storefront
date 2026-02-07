import Link from 'next/link';
import { landingServices } from '@/data/services';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export default function Services() {
  return (
    <section className="w-full bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">Our Services</h2>
            <p className="text-stone text-lg">
              Comprehensive solutions designed to elevate your digital ecosystem to new heights.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-1 text-forest font-bold hover:text-accent"
          >
            See all services
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              arrow_right_alt
            </span>
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingServices.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden transition-all hover:shadow-xl hover:border-forest/20"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
