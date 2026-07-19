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
    title: string;
    subtitle: string;
    noQuery: string;
    noResults: string;
    resultsFor: string;
    recipesTab: string;
    restaurantsTab: string;
  };
  recipeDetail: {
    backToRecipes: string;
    ingredients: string;
    instructions: string;
    cookTime: string;
    servings: string;
    rating: string;
    likes: string;
    author: string;
    relatedRecipes: string;
    notFound: string;
    tags: string;
    difficulty: string;
    difficultyEasy: string;
    difficultyMedium: string;
    difficultyHard: string;
  };
  restaurantDetail: {
    backToRestaurants: string;
    reviews: string;
    featuredReview: string;
    location: string;
    cuisine: string;
    priceLevel: string;
    notFound: string;
    writeReview: string;
  };
  categoryDetail: {
    backToCategories: string;
    recipesInSection: string;
    noRecipes: string;
    notFound: string;
  };
  common: {
    rating: string;
    minutes: string;
    notFound: string;
    notFoundDescription: string;
    backHome: string;
    loadingMore: string;
    viewAll: string;
  };
};
