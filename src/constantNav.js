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
        name: "Junior School",
        link: "/schools/juniorschool",
      },
      {
        name: "High School",
        link: "/schools/highschool",
      },
    ],
  },
  {
    name: "Admission",
    link: "/services",

    subRoutes: [
      {
        name: "Admission Guide",
        link: "/",
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
        link: "/",
      },
      {
        name: "Our Contact",
        link: "/",
      },
    ],
  },
];
