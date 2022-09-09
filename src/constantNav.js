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
    link: "/#",

    subRoutes: [
      {
        name: "ICT & Multimedia",
        link: "/ICT&multimedia",
      },
      {
        name: "Lab and Library",
        link: "/lab",
      },
      {
        name: "Bright Classrooms",
        link: "/brightclassroom",
      },
      {
        name: "Music Studio",
        link: "/musicstudio",
      },
    ],
  },
  {
    name: "Schools",
    link: "/services",

    subRoutes: [
      {
        name: "Nursery",
        link: "/nursery",
      },
      {
        name: "Basic",
        link: "/basic",
      },
      {
        name: "Junior College",
        link: "/juniorcollege",
      },
      {
        name: "Senior College",
        link: "/seniorcollege",
      },
    ],
  },
  {
    name: "Admission",
    link: "/services",

    subRoutes: [
      {
        name: "Admission Guide",
        link: "/admissionguide",
      },
      {
        name: "Enroll Now",
        link: "/",
      },
    ],
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Support",
    link: "/",

    subRoutes: [
      {
        name: "FAQ",
        link: "/FAQ",
      },
      {
        name: "Our Contact",
        link: "/contact",
      },
    ],
  },
];
