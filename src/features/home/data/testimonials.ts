export type Testimonial = {
  id: string;
  name: string;
  translationNote?: string;
  rating: number;
  review: string;
  store: "app-store" | "play-store";
  storeLabel: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emrah1e",
    translationNote: "Translated from Turkish",
    rating: 5,
    review:
      "I successfully activated the eSim that was most suitable for my device. There's no need to struggle, just do it from here and you're good to go (those who understand me will understand).",
    store: "app-store",
    storeLabel: "App Store",
  },
  {
    id: "2",
    name: "Wolf.s",
    rating: 5,
    review:
      "Perfect app and application to extend your communication and stay connected in countries where Roaming with your home-partner is weak/not available or to expensive. No complains especially it servers international apps/programs (No VPN Needed)",
    store: "app-store",
    storeLabel: "App Store",
  },
  {
    id: "3",
    name: "Mohmmed Alrun",
    rating: 5,
    review:
      "Absolutely fantastic, a truly unique experience. I loved it!",
    store: "play-store",
    storeLabel: "Play Store",
  },
];
