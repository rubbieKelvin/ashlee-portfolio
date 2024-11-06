import { mdiLinkedin, mdiInstagram } from "@mdi/js";

type Link = {
  label: string;
  link:
    | {
        name: string;
      }
    | string;
};
export const quick_links: Array<Link> = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Writing",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
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
