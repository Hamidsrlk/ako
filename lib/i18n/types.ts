export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    recipes: string;
    restaurants: string;
    community: string;
    marketplace: string;
    signIn: string;
    signUp: string;
    menu: string;
    skipToContent: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    statsRecipes: string;
    statsRestaurants: string;
    statsMembers: string;
    trendingSearches: string;
    tags: {
      quick: string;
      healthy: string;
      persian: string;
      dessert: string;
      weeknight: string;
    };
  };
  trust: {
    ariaLabel: string;
    items: string[];
  };
  featured: {
    badge: string;
    eyebrow: string;
    cta: string;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  categories: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  trending: {
    title: string;
    subtitle: string;
    viewAll: string;
    viewRecipe: string;
    minRead: string;
    editorsPick: string;
    trending: string;
  };
  restaurants: {
    title: string;
    subtitle: string;
    viewAll: string;
    reviews: string;
    viewRestaurant: string;
  };
  community: {
    title: string;
    subtitle: string;
    viewAll: string;
    likes: string;
    comments: string;
    shares: string;
  };
  search: {
    placeholder: string;
    button: string;
    ariaLabel: string;
  };
  footer: {
    tagline: string;
    explore: string;
    company: string;
    legal: string;
    about: string;
    careers: string;
    contact: string;
    privacy: string;
    terms: string;
    cookies: string;
    newsletter: string;
    newsletterPlaceholder: string;
    subscribe: string;
    rights: string;
  };
  theme: {
    toggle: string;
    light: string;
    dark: string;
    system: string;
  };
  language: {
    switch: string;
  };
  common: {
    rating: string;
    minutes: string;
  };
};
