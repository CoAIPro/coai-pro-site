import Delta from "../assets/images/templates/Delta.png";
import LaunchPad from "../assets/images/templates/LaunchPad.png";
import Orbit from "../assets/images/templates/Orbit.png";
import Shift from "../assets/images/templates/Shift.png";
import Spark from "../assets/images/templates/Spark.png";

// Categories for filtering
export const categories = [
  { id: "all", label: "All" },
  { id: "startup", label: "Startup" },
  { id: "personal", label: "Personal" },
  { id: "landing", label: "Landing" },
  { id: "portfolio", label: "Portfolio" },
  { id: "sectioned", label: "Sectioned" },
];

export const myTemplateCategories = [
  { id: "all", label: "All" },
  { id: "custom", label: "Custom" },
  { id: "shared", label: "Shared" },
  { id: "library", label: "Library" },
]

// Recommended templates
export const recommendedTemplates = [
  { 
    id: 1, 
    title: "LaunchPad", 
    image: LaunchPad, 
    text: "Instant startup identity  logo, tagline, subdomain. Launch in 60 seconds",
    categories: ["startup", "landing"],
    featured: true,
    status: "new"
  },
  { 
    id: 2, 
    title: "Delta", 
    image: Delta, 
    text: "Consultant/service business page",
    categories: ["startup", "landing", "sectioned"],
    featured: true
  },
  { 
    id: 3, 
    title: "Orbit", 
    image: Orbit, 
    text: "Personal site: bio, projects, contact",
    categories: ["personal", "portfolio"],
    featured: false
  },
  { 
    id: 4, 
    title: "Shift", 
    image: Shift, 
    text: "Hero + logo-focused layout",
    categories: ["landing", "startup"],
    featured: false
  },
  { 
    id: 5, 
    title: "Spark", 
    image: Spark, 
    text: "Minimal, clean one-pager",
    categories: ["personal", "landing"],
    featured: true,
    status: "popular"
  },
];

// My templates
export const myTemplates = [
  { 
    id: 101, 
    title: "My Portfolio", 
    image: Orbit, 
    text: "Personal portfolio site with project showcase",
    categories: ["portfolio", "personal"],
    lastEdited: "2024-03-20",
    status: "draft"
  },
  { 
    id: 102, 
    title: "Business Landing", 
    image: Delta, 
    text: "Professional business landing page",
    categories: ["landing", "startup"],
    lastEdited: "2024-03-19",
    status: "published"
  }
];
