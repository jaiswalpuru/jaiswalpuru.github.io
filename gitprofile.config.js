// gitprofile.config.js

const config = {
  github: {
    username: 'jaiswalpuru', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'jaiswalpuru',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'purujaiswal1996@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Go',
    'Python',
    'C/C++',
    'Flask/Django',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Latex',
  ],
  experiences: [
    {
      company: 'Ericsson',
      position: 'Software Developer Intern',
      from: 'June 2022',
      to: 'Dec 2022',
      companyLink: 'https://git.eclipse.org/r/q/project:tracecompass%252Forg.eclipse.tracecompass',
    },
    {
      company: 'redBus',
      position: 'Software Developer',
      from: 'June 2019',
      to: 'July 2021',
      companyLink: 'https://www.redbus.com/',
    },
    {
      company: 'redBus',
      position: 'Software Developer Intern',
      from: 'Jan 2019',
      to: 'May 2019',
      companyLink: 'https://www.redbus.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'The University of Texas - Dallas',
      degree: "Master's Degree",
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Visvesvaraya Technological University',
      degree: 'Bachelor Degree',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Pelegs Algorithm for Leader Election',
      description:
        'Programmed Peleg’s algorithm, which is used to elect a leader in a distributed system.',
      imageUrl:
        'https://en.wikipedia.org/wiki/Leader_election#/media/File:Ring_graph.png',
      link: 'https://github.com/jaiswalpuru/Distributed-Computing/',
    },
    {
      title: 'Bit Coin Transaction Management System',
      description:
        'I created and implemented a system that enables users to buy\n' +
        'and sell bitcoins amongst each other, as well as purchase bitcoins from third-party vendors\n',
      imageUrl: 'https://en.wikipedia.org/wiki/Bitcoin#/media/File:Bitcoin.svg',
      link: 'https://github.com/jaiswalpuru/BitCoin-TRACKER',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
