export interface CareerTrack {
  id: string;
  title: string;
  icon: string;
  status: string;
  who: string;
  what: string;
  commitment: string;
  benefits: string[];
  note: string;
}

export const careerTracks: CareerTrack[] = [
  {
    id: 'student',
    title: 'Student Engineer',
    icon: 'school',
    status: 'Interest List Open',
    who: 'CS students at Tennessee Tech (or nearby programs) looking for real-world experience.',
    what: 'Work on production client projects under direct senior mentorship. Every line of code you write gets reviewed. You learn by building things that ship.',
    commitment: 'Part-time, flexible around your class schedule.',
    benefits: [
      'Build real software that ships to real users',
      'Direct mentorship from a senior engineer',
      'Code review on every pull request',
      'Portfolio-ready work for your resume',
      'Paid — this is real work, not an unpaid internship',
    ],
    note: "This isn't a lecture series. You'll be writing production code from week one.",
  },
  {
    id: 'senior',
    title: 'Senior Engineer',
    icon: 'engineering',
    status: 'Building Our Network',
    who: 'Experienced engineers (5+ years) who want to contribute without the full-time commitment.',
    what: 'Join our network for code review, architecture consulting, and specialized project work. Contribute your expertise on your own schedule.',
    commitment: 'Project-based or ongoing, flexible.',
    benefits: [
      'Work on interesting, varied projects',
      'Set your own availability and schedule',
      'No meetings, standups, or overhead',
      'Competitive project-based compensation',
      'Be part of a quality-first engineering culture',
    ],
    note: 'We bring in senior professionals when projects need specialized depth — not to fill seats.',
  },
];
