// gitprofile.config.js

const config = {
  github: {
    username: 'RamiMachhadani', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/rami-machhadani-46661023b/',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'machhadanirami@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1z7Mgf7HTOz381yqhGV66Z773KGgX20Y0/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Phython',
    'Java',
    'SQL',
  ],
  experiences: [
    {
      company: 'Get Rolling Auto Group',
      position: 'Assistant Systems Analyst',
      from: 'May 2022',
      to: 'August 2023',
      companyLink: 'https://example.com',
    },
    {
      company: 'Conquer Management',
      position: 'Sales Specialist',
      from: 'April 2022',
      to: 'August 2022',
      companyLink: 'https://example.com',
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
      institution: 'East Carolina University',
      degree: 'Management Infomation Systems',
      from: '2021',
      to: '2024',
    },
    {
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Amazon Web Service Badge',
      description:
        'Earners of this badge have taken the AWS Academy Cloud Foundations course.',
      imageUrl: 'https://images.credly.com/size/340x340/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png',
      link: 'https://www.credly.com/badges/a592d5a2-1777-4dd3-b0e8-75ea9ca6dbb1/linked_in_profile',
    },
    {
      title: 'Amazon Web Service Badge',
      description:
        'Earners of this badge have taken the AWS Academy Cloud Foundations course.',
      imageUrl: 'https://images.credly.com/size/340x340/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png',
      link: 'https://www.credly.com/badges/a592d5a2-1777-4dd3-b0e8-75ea9ca6dbb1/linked_in_profile',
    },
    {
      title: 'Introduction to Packet Tracer Badge',
      description:
        'Cisco verifies the earner of this badge has knowledge and skills to create digital models of IP Networks and IoT Systems using Cisco Packet Tracer.',
      imageUrl: 'https://images.credly.com/size/340x340/images/09b6d58c-763a-4b40-aea1-787d8f46bbcd/Intro2PT.png',
      link: 'https://www.credly.com/badges/ac6157f2-581e-4c13-9d2a-06e61ec3ed71/linked_in_profile',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
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
    defaultTheme: 'wireframe',

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
