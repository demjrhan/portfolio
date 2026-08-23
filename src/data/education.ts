export type School = {
  n: number;
  title: string;
  logo: { src: string; alt: string };
  links: readonly { label: string; icon: 'website' | 'linkedin'; href: string }[];
  degree?: string;
  dates: string;
  grade?: string;
  description?: string;
  duties?: readonly string[];
};

export const education: School = {
  n: 3,
  title: 'Polish-Japanese Academy of Information Technology',
  logo: {
    src: '/assets/pjatk-logo.jpeg',
    alt: 'Polish-Japanese Academy of Information Technology',
  },
  links: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/school/pjatk/posts/?feedView=all' },
    { label: 'Website', icon: 'website', href: 'https://pja.edu.pl/' },
  ],
  degree: "Bachelor's degree, Computer Science",
  dates: 'Oct 2022 – Jul 2026',
  grade: 'Grade: 4.5',
};

export const mockExperiences: readonly School[] = [
  {
    n: 5,
    title: 'Quality Assurence Mentor',
    logo: {
      src: '/assets/codemify-logo.jpeg',
      alt: 'Codemify',
    },
    links: [
      {
        label: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/company/codemify/posts/?feedView=all',
      },
      {
        label: 'Website',
        icon: 'website',
        href: 'https://codemify.com/',
      },
    ],
    dates: 'Sep 2025 – Mar 2026',
    duties: [
      'Mentored Junior QA testers in manual and automation testing, covering test case design, defect reporting, and testing fundamentals.',
      'Reviewed manual and automated test cases, providing clear, actionable feedback to improve coverage, clarity, and reproducibility.',
      'Recorded instructional videos to explain QA concepts, tools, and testing workflows, improving learning consistency.',
      'Provided daily support by answering questions and conducting 1:1 mentoring sessions to resolve blockers and reinforce best practices.',
    ],
  },
  {
    n: 4,
    title: 'International Committee Member',
    logo: {
      src: '/assets/samorzadpjatk-logo.jpeg',
      alt: 'Student Council of Polish-Japanese Academy of Information Technology',
    },
    links: [
      {
        label: 'LinkedIn',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/company/samorzadpjatk/posts/?feedView=all',
      },
    ],
    dates: 'Feb 2022 – Feb 2026',
    description:
      'As a member of the International Committee at PJATK, I regularly take part in university events that aim to make student life more engaging and social. I help erasmus students to adapt Warsaw and I attend events, connect with other students, and share suggestions for future activities based on what students enjoy. This role helps me stay involved in the campus community and contribute to a positive and welcoming environment.',
  },
];
