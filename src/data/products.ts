import spaceToGrow from "../assets/products/space-to-grow.jpg";
import theButterfly from "../assets/products/the-butterfly.jpg";
import everythingGood from "../assets/products/everything-good.jpg";
import upToMe from "../assets/products/up-to-me.jpg";
import landscapes from "../assets/products/landscapes.jpg";
import someEndings from "../assets/products/some-endings.jpg";
import layla from "../assets/products/layla.jpg";

export type Size = {
  label: string;
  price: number;
  /**
   * Paste a Stripe Payment Link (or Gumroad/Lemon Squeezy link) here once
   * it's created for this size. Leave empty to show a "Notify me" fallback
   * instead of a broken checkout button.
   */
  paymentLink: string;
};

export type Product = {
  id: string;
  title: string;
  quote: string;
  category: "Artwork" | "Photography";
  image: string;
  edition: string;
  sizes: Size[];
};

export const products: Product[] = [
  {
    id: "up-to-me",
    title: "Up to Me",
    quote: "I have a lot to do today, but how I choose to do it is up to me.",
    category: "Artwork",
    image: upToMe,
    edition: "Small-batch run · signed",
    sizes: [
      { label: '8" × 11"', price: 25, paymentLink: "" },
      { label: '12" × 16"', price: 50, paymentLink: "" },
    ],
  },
  {
    id: "the-butterfly",
    title: "The Butterfly",
    quote: "Did you see the changes the butterfly went through to become beautiful?",
    category: "Artwork",
    image: theButterfly,
    edition: "Small-batch run · signed",
    sizes: [
      { label: '8" × 11"', price: 25, paymentLink: "" },
      { label: '12" × 16"', price: 50, paymentLink: "" },
    ],
  },
  {
    id: "everything-good",
    title: "Everything Good",
    quote: "Everything good will come. — Sefi Atta",
    category: "Artwork",
    image: everythingGood,
    edition: "Small-batch run · signed",
    sizes: [
      { label: '8" × 11"', price: 25, paymentLink: "" },
      { label: '12" × 16"', price: 50, paymentLink: "" },
    ],
  },
  {
    id: "space-to-grow",
    title: "Space to Grow",
    quote: "What a beautiful thing it is to still have space to grow after everything we've been through.",
    category: "Artwork",
    image: spaceToGrow,
    edition: "Small-batch run · signed",
    sizes: [
      { label: '8" × 11"', price: 25, paymentLink: "" },
      { label: '12" × 16"', price: 50, paymentLink: "" },
    ],
  },
  {
    id: "landscapes",
    title: "If We Opened People Up",
    quote: "“And I cried… for all the women who stretched their bodies for civilizations, only to find ruins.” — Sonia Sanchez",
    category: "Artwork",
    image: landscapes,
    edition: "Small-batch run · signed",
    sizes: [
      { label: '8" × 11"', price: 25, paymentLink: "" },
      { label: '12" × 16"', price: 50, paymentLink: "" },
    ],
  },
  {
    id: "some-endings",
    title: "Some Endings Make Room",
    quote: "Some endings make room for better beginnings.",
    category: "Photography",
    image: someEndings,
    edition: "Fine-art photo print",
    sizes: [
      { label: '8" × 11"', price: 45, paymentLink: "" },
      { label: '16" × 20"', price: 95, paymentLink: "" },
    ],
  },
  {
    id: "layla",
    title: "Layla, On Finding Light",
    quote: "On finding light in the dark.",
    category: "Photography",
    image: layla,
    edition: "Fine-art photo print",
    sizes: [
      { label: '8" × 11"', price: 75, paymentLink: "" },
      { label: '16" × 20"', price: 150, paymentLink: "" },
    ],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
