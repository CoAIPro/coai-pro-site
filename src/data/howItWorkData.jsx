import step1 from '../assets/images/how-works/1.png';
import step2 from '../assets/images/how-works/2.png';
import step3 from '../assets/images/how-works/3.png';
import titleIconDark1 from '../assets/images/how-works/icon-1-dark.svg';
import titleIconLight1 from '../assets/images/how-works/icon-1.svg';
import titleIconDark2 from '../assets/images/how-works/icon-2-dark.svg';
import titleIconLight2 from '../assets/images/how-works/icon-2.svg';
import titleIconDark3 from '../assets/images/how-works/icon-3-dark.svg';
import titleIconLight3 from '../assets/images/how-works/icon-3.svg';

export const howItWorkData = [
  {
    id: 1,
    title: "Step 1: Pick a Template",
    desc: "Choose from professionally designed layouts tailored for startups, creators, and personal brands.",
    thumb: step1,
    titleIcon: {
      light: titleIconLight1,
      dark: titleIconDark1,
    },
  },
  {
    id: 2,
    title: "Step 2: Customize with Content",
    desc: "Add your text, images, and links — powered by AI smart defaults to keep everything clean and balanced.",
    thumb: step2,
    titleIcon: {
      light: titleIconLight2,
      dark: titleIconDark2,
    },
  },
  {
    id: 3,
    title: "Step 3: Publish Instantly",
    desc: "One click and your site is live. No code. No plugins. Just a modern website, ready to go.",
    thumb: step3,
    titleIcon: {
      light: titleIconLight3,
      dark: titleIconDark3,
    },
  },
];