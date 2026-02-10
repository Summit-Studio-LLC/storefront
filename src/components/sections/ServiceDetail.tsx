import Link from 'next/link';

interface ServiceDetailProps {
  slug: string;
  icon: string;
  title: string;
  longDescription: string;
  technologies: string[];
  typicalProjects: string[];
  index: number;
}

export default function ServiceDetail({
  slug,
  icon,
  title,
  longDescription,
  technologies,
  typicalProjects,
  index,
}: ServiceDetailProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={slug}
      className={`py-20 px-6 lg:px-8 scroll-mt-20 ${isEven ? 'bg-white' : 'bg-offwhite'}`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
            <span className="material-symbols-outlined !text-2xl">{icon}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-forest">{title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Description (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {longDescription.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-stone text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-forest/5 text-forest text-sm font-medium rounded-md px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right: Typical Projects (1 col) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone/60 mb-4">
              Typical Projects
            </h3>
            <ul className="space-y-3">
              {typicalProjects.map((project) => (
                <li key={project} className="flex items-start gap-2">
                  <span
                    className="material-symbols-outlined text-accent text-base mt-0.5"
                    aria-hidden="true"
                  >
                    arrow_right
                  </span>
                  <span className="text-stone text-sm">{project}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-forest hover:text-accent transition-colors group"
            >
              Discuss a {title.toLowerCase()} project
              <span
                className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
