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
        link: "/",
      },
      {
        name: "Basic",
        link: "/",
      },
      {
        name: "Junior School",
        link: "/",
      },
      {
        name: "High School",
        link: "/",
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
