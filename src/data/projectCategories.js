export const projectCategories = [
  {
    key: "ai",
    slug: "ai",
    label: "AI and Machine Learning",
  },
  {
    key: "web-apps",
    slug: "web-apps",
    label: "Web Applications",
  },
  {
    key: "games",
    slug: "games",
    label: "Games and Levels",
  },
  {
    key: "ux",
    slug: "ux",
    label: "UX and UI",
  },
  {
    key: "3D",
    slug: "3d",
    label: "3D Art",
  },
];

export const getProjectCategoryBySlug = (slug) =>
  projectCategories.find((category) => category.slug === slug);
