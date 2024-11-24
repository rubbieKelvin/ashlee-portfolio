import { mdiLinkedin, mdiInstagram } from "@mdi/js";

type Link = {
  label: string;
  link: string;
};
export const quick_links: Array<Link> = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Portfolio",
    link: "/writing",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Contact",
    link: "mailto:usuaashlee1@gmail.com",
  },
];

export const social_links = [
  {
    icon: mdiLinkedin,
    link: "https://www.linkedin.com/in/oghogho-ashlee-usuanlele-a439a727a/",
  },
  {
    icon: mdiInstagram,
    link: "https://www.instagram.com/theashleejoy/",
  },
];
