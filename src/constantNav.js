export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Facilities",
    link: "/",

    subRoutes: [
      {
        name: "ICT & Multimedia",
        link: "/facilities/ICT&multimedia",
      },
      {
        name: "Lab and Library",
        link: "/",
      },
      {
        name: "Bright Classrooms",
        link: "/",
      },
      {
        name: "Music Studio",
        link: "/",
      },
    ],
  },
  {
    name: "Schools",
    link: "/services",

    subRoutes: [
      {
        name: "Nursery",
        link: "/schools/nursery",
      },
      {
        name: "Basic",
        link: "/schools/basic",
      },
      {
        name: "Junior College",
        link: "/schools/juniorcollege",
      },
      {
        name: "Senior College",
        link: "/schools/seniorcollege",
      },
    ],
  },
  {
    name: "Admission",
    link: "/services",

    subRoutes: [
      {
        name: "Admission Guide",
        link: "/admission/admissionguide",
      },
      {
        name: "Enroll Now",
        link: "/",
      },
    ],
  },
  {
    name: "News",
    link: "/",
  },
  {
    name: "Gallery",
    link: "/",
  },
  {
    name: "Support",
    link: "/",

    subRoutes: [
      {
        name: "FAQ",
        link: "/support/FAQ",
      },
      {
        name: "Our Contact",
        link: "/support/contact",
      },
    ],
  },
];
