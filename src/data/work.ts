export const work = {
  n: 2,
  title: 'Associate Quality Platform Engineer',
  company: 'TheyDo',
  logo: {
    src: '/assets/theydo-logo.jpeg',
    alt: 'TheyDo',
  },
  links: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/theydo-journey-management/' },
    { label: 'Website', icon: 'website', href: 'https://www.theydo.com/' },
  ],
  duties: [
    'Own second-line support end-to-end, triaging, reproducing, and isolating bugs and delivering actionable technical write-ups to product engineers',
    'Drive manual and exploratory testing across product features, identifying edge cases, regressions, and potential usability issues beyond scripted test scenarios',
    'Contribute to a Playwright and TypeScript-based test automation platform, progressively taking ownership of test design, implementation, and maintenance',
    'Work hands-on with CI/CD workflows using GitHub Actions, investigating test failures, analyzing logs, and debugging issues across environments',
    'Use AI-assisted development tools including Cursor and Claude Code to accelerate debugging, test development, and technical problem-solving',
    'Collaborate with product and engineering teams to communicate findings clearly, prioritize issues, and improve overall product quality',
  ],
} as const;
