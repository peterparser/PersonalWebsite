export default {
  name: 'contact', // do not change
  pageTitle: 'Projects',
  header: 'Personal Projects',
  icon: 'mdi-notebook-multiple',

  projects:[
    {
      title: 'AWX Insights - 2023',
      url: 'https://gitlab.com/m.schembri/my-aap-insights',
      description: 'An endpoint for scraping the AWX Metrics, and the design and implementation of a grafana dashboard to show calculated values that can provide insights to the user or the business (like the ROI in terms of time for an automation).'
    },
    {
      title: 'RL Acrobot - 2020',
      url: 'https://github.com/peterparser/RLAcrobot',
      description: 'A solution for "The acrobot Problem" proposed in the book "Reinforcement Learning: An Introduction" by Sutton & Barto with Deep Reinforcement Learning techniques.'
    },
    {
      title: 'BarcodeAnalyzer - 2020',
      url: 'https://github.com/peterparser/BarcodeAnalyzer',
      description: 'Barcode analyzer for 1-D barcodes for the ISO/IEC 15416'
    },
    {
      title: 'Showdown AI Bot - 2019',
      url: 'https://github.com/peterparser/Showdown-AI-Bot',
      description: 'Player of the Pokémon game on the Pokémon showdown platform, using AI Techniques.'
    },

  ]
};
