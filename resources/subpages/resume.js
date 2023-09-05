export default {
  name: 'resume', // do not change
  pageTitle: 'Resume',
  icon: 'mdi-card-account-details',

  experience: {
    title: 'Experience',
    icon: 'mdi-tie',
    data: [
      {
        title: 'Infrastructure Engineer',
        start: '03/2021',
        end: 'present',
        company: 'Var Group',
        description: 'Bootstrapped and actually leading the Open Source Team techically-wise'
      }
    ]
  },
  education: {
    title: 'Education',
    icon: 'mdi-school',
    data: [
      {
        major: 'MSc. Computer Engineering',
        start: '03/2021',
        end: '08/2015',
        institute: 'Università di Bologna',
        description: 'Computer Engineering path, with a very insightful course on Linux sysadmin skills and AI'
      },
    ]
  },
  /*  
  certificatesAndAwards: {
    title: 'Certifications',
    icon: 'mdi-certificate',
    data: [
      {
        title: 'Red Hat Certified Architect in Infrastructure',
        date: '31 oct 2022',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified Specialist in Enterprise Application Server Administration',
        date: '05 jul 2023',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified Instructor',
        date: '31 oct 2022',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified Specialist in MultiCluster Management',
        date: '31 oct 2022',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified in Openshift Data Foundation',
        date: '05 oct 2022',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Certified Kubernetes Administrator',
        date: '14 may 2022',
        issuedBy: 'The Linux Foundation',
        description: ''
      },
      {
        title: 'Red Hat Certified Specialist in OpenShift Application Development',
        date: '10 jan 2022',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified Specialist in Openshift Administration',
        date: '21 jul 2021',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified Engineer',
        date: '28 apr 2021',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified Specialist in Containers and Kubernetes',
        date: '07 apr 2021',
        issuedBy: 'Red Hat',
        description: ''
      },
      {
        title: 'Red Hat Certified System Administrator',
        date: '21 apr 2021',
        issuedBy: 'Red Hat',
        description: ''
      }
    ]
  },
/*  academic: {
/    title: 'Academic',
    icon: 'mdi-library-shelves',
    data: [
      {
        title: 'Research paper on criminals.',
        date: '10/07/2019',
        issuedBy: 'MIT',
        description: 'Published a research paper at MIT about criminal behaviours and predictions.'
      },
    ]
  },
*/
  skills: [
    {
      title: 'Infrastructure & Cloud',
      barType: 'line',
      icon: 'mdi-server',
      items: [
        {
          title: 'Openshift',
          level: 100
        },
        {
          title: 'Kubernetes',
          level: 90
        },
        {
          title: 'Ansible',
          level: 100
        },
        {
          title: 'Linux',
          level: 100
        },
        {
          title: 'VSphere',
          level: 55
        },
        {
          title: 'AWS',
          level: 50
        },
        {
          title: 'Windows',
          level: 20
        },
      ]
    },
    {
      title: 'Devops Toolchain',
      barType: 'line',
      icon: 'mdi-server',
      items: [
        {
          title: 'GIT',
          level: 100
        },
        {
          title: 'Helm',
          level: 100
        },
        {
          title: 'Kustomize',
          level: 80
        },
        {
          title: 'ArgoCD',
          level: 80
        },
        {
          title: 'Tekton',
          level: 70
        }
      ]
    },
    {
      title: 'Programming Languages',
      barType: 'line',
      icon: 'mdi-script',
      items: [
        {
          title: 'Bash',
          level: 100
        },
        {
          title: 'Python',
          level: 70
        },
        {
          title: 'Java / Quarkus',
          level: 30
        },
      ]
    },
    {
      title: 'Skills in progress',
      barType: 'line',
      icon: 'mdi-star-circle',
      items: [
        {
          title: 'Terraform / Terragrunt',
          level: 90
        },
        {
          title: 'Elasticsearch',
          level: 30
        },
      ]
    },
    
    {
      title: 'Languages',
      barType: 'dots',
      icon: 'mdi-earth',
      items: [
        {
          title: 'Italian',
          level: 100
        },
        {
          title: 'English',
          level: 80
        },
      ]
    }
  ],
};
