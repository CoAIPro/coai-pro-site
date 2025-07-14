import aiIcon from "../assets/images/icons/ai.png";
import fastIconDark from "../assets/images/icons/fast-dark.png";
import fastIcon from "../assets/images/icons/fast.png";
import modulerIconDark from "../assets/images/icons/moduler-dark.png";
import modulerIcon from "../assets/images/icons/moduler.png";
import responsiveIconDark from "../assets/images/icons/responsive-dark.png";
import responsiveIcon from "../assets/images/icons/responsive.png";

export const features = [
  {
    id: 1,
    icon: {
      light: responsiveIcon,
      dark: responsiveIconDark,
    },
    title: "Fully Responsive",
    desc: "Look perfect on mobile, tablet, and desktop.",
    bgClass: "bg-[#DBF4FF] dark:bg-[#0C4C69]",
  },
  {
    id: 2,
    icon: {
      light: fastIcon,
      dark: fastIconDark,
    },
    title: "Lightning Fast",
    desc: "Optimized code and super-fast load times.",
    bgClass: "bg-[#D1EAFF] dark:bg-[#0F5189]",
  },
  {
    id: 3,
    icon: {
      light: modulerIcon,
      dark: modulerIconDark,
    },
    title: "Modular & Clean",
    desc: "Easily tweak and customize for your brand.",
    bgClass: "bg-[#ECDBFF] dark:bg-[#350C69]",
  },
  {
    id: 4,
    icon: {
      light: aiIcon,
      dark: modulerIconDark,
    },
    title: "Backed by AI",
    desc: "Smart suggestions and layouts that save time.",
    bgClass: "bg-[#DBFFEA] dark:bg-[#0C6932]",
  },
];