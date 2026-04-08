import blackTee from "@/assets/products/black-tee.jpg";
import whiteTee from "@/assets/products/white-tee.jpg";
import blackJoggers from "@/assets/products/black-joggers.jpg";
import greyShorts from "@/assets/products/grey-shorts.jpg";
import blackHoodie from "@/assets/products/black-hoodie.jpg";
import greyTank from "@/assets/products/grey-tank.jpg";
import blackBomber from "@/assets/products/black-bomber.jpg";
import whitePolo from "@/assets/products/white-polo.jpg";

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  colors: string[];
  category: string;
  collection: string[];
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  fit: string;
  material: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Precision Tee",
    subtitle: "Performance Fit",
    price: 48,
    image: blackTee,
    hoverImage: whiteTee,
    colors: ["#000000", "#FFFFFF", "#4A4A4A"],
    category: "tops",
    collection: ["new-arrivals", "essentials", "black-essentials"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    isNew: true,
    isBestSeller: true,
    description: "Engineered for movement. The Precision Tee combines four-way stretch fabric with a clean silhouette for seamless transitions between training and life.",
    fit: "Athletic Fit — True to size with a tailored feel through the torso",
    material: "87% Nylon, 13% Elastane — Moisture-wicking, quick-dry finish",
  },
  {
    id: "2",
    name: "Oversized Essential Tee",
    subtitle: "Relaxed Fit",
    price: 42,
    image: whiteTee,
    hoverImage: blackTee,
    colors: ["#FFFFFF", "#000000", "#D4D4D4"],
    category: "tops",
    collection: ["new-arrivals", "essentials", "oversized"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    description: "Premium heavyweight cotton in a relaxed, oversized silhouette. Dropped shoulders and a longer body for effortless daily wear.",
    fit: "Oversized Fit — Size down for a regular fit",
    material: "100% Premium Cotton, 280gsm — Preshrunk, enzyme-washed",
  },
  {
    id: "3",
    name: "Stealth Jogger",
    subtitle: "Tapered Fit",
    price: 78,
    image: blackJoggers,
    colors: ["#000000", "#4A4A4A"],
    category: "bottoms",
    collection: ["essentials", "black-essentials", "training"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isBestSeller: true,
    description: "Technical jogger with a tapered silhouette. Zippered pockets and articulated knees for unrestricted movement.",
    fit: "Tapered Fit — Slim through the leg with a clean ankle",
    material: "92% Polyester, 8% Elastane — Water-resistant DWR coating",
  },
  {
    id: "4",
    name: "Training Short 7\"",
    subtitle: "Performance Fit",
    price: 52,
    image: greyShorts,
    colors: ["#4A4A4A", "#000000"],
    category: "bottoms",
    collection: ["new-arrivals", "training", "essentials"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: true,
    description: "The go-to training short. Lightweight stretch fabric with internal compression liner and side pockets.",
    fit: "Athletic Fit — 7\" inseam, sits at mid-thigh",
    material: "86% Polyester, 14% Elastane — Laser-cut ventilation zones",
  },
  {
    id: "5",
    name: "Motion Hoodie",
    subtitle: "Standard Fit",
    price: 98,
    image: blackHoodie,
    colors: ["#000000", "#FFFFFF"],
    category: "outerwear",
    collection: ["new-arrivals", "black-essentials"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    description: "Clean-line zip hoodie in a premium tech fleece. Minimal design, maximum function.",
    fit: "Standard Fit — True to size with room for layering",
    material: "78% Cotton, 22% Polyester — 320gsm tech fleece",
  },
  {
    id: "6",
    name: "Focus Tank",
    subtitle: "Slim Fit",
    price: 38,
    image: greyTank,
    colors: ["#4A4A4A", "#000000", "#FFFFFF"],
    category: "tops",
    collection: ["training", "essentials"],
    sizes: ["S", "M", "L", "XL"],
    isBestSeller: true,
    description: "A refined training tank with a modern cut. Ultralight mesh panels for airflow where it counts.",
    fit: "Slim Fit — Contours to the body without restriction",
    material: "90% Nylon, 10% Elastane — Seamless construction",
  },
  {
    id: "7",
    name: "Stealth Bomber",
    subtitle: "Standard Fit",
    price: 148,
    image: blackBomber,
    colors: ["#000000"],
    category: "outerwear",
    collection: ["black-essentials", "new-season"],
    sizes: ["S", "M", "L", "XL"],
    description: "A modern take on the classic bomber. Water-resistant shell with a clean matte finish and minimal hardware.",
    fit: "Standard Fit — True to size",
    material: "100% Nylon — DWR-coated, wind-resistant",
  },
  {
    id: "8",
    name: "Performance Polo",
    subtitle: "Athletic Fit",
    price: 58,
    originalPrice: 72,
    image: whitePolo,
    colors: ["#FFFFFF", "#000000"],
    category: "tops",
    collection: ["essentials", "new-season"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Technical polo with moisture management and UV protection. From training to travel, effortlessly versatile.",
    fit: "Athletic Fit — Slightly tapered through the torso",
    material: "88% Polyester, 12% Elastane — UPF 40+ protection",
  },
];

export const categories = [
  { name: "New Arrivals", slug: "new-arrivals", count: products.filter(p => p.isNew).length },
  { name: "Best Sellers", slug: "best-sellers", count: products.filter(p => p.isBestSeller).length },
  { name: "Tops", slug: "tops", count: products.filter(p => p.category === "tops").length },
  { name: "Bottoms", slug: "bottoms", count: products.filter(p => p.category === "bottoms").length },
  { name: "Outerwear", slug: "outerwear", count: products.filter(p => p.category === "outerwear").length },
  { name: "Shorts", slug: "shorts", count: products.filter(p => p.name.toLowerCase().includes("short")).length },
  { name: "Joggers", slug: "joggers", count: products.filter(p => p.name.toLowerCase().includes("jogger")).length },
  { name: "Essentials", slug: "essentials", count: products.filter(p => p.collection.includes("essentials")).length },
];

export const collections = [
  { name: "Black Essentials", slug: "black-essentials", description: "The foundation of every wardrobe." },
  { name: "New Season Drop", slug: "new-season", description: "Fresh pieces for the new season." },
  { name: "Core Training", slug: "training", description: "Built for performance." },
  { name: "Everyday Essentials", slug: "essentials", description: "Refined basics, daily wear." },
  { name: "Oversized Edit", slug: "oversized", description: "Relaxed proportions, elevated style." },
];

export function getProductsByFilter(filter: string): Product[] {
  switch (filter) {
    case "new-arrivals":
      return products.filter(p => p.isNew);
    case "best-sellers":
      return products.filter(p => p.isBestSeller);
    case "tops":
    case "bottoms":
    case "outerwear":
      return products.filter(p => p.category === filter);
    case "shorts":
      return products.filter(p => p.name.toLowerCase().includes("short"));
    case "joggers":
      return products.filter(p => p.name.toLowerCase().includes("jogger"));
    default:
      return products.filter(p => p.collection.includes(filter));
  }
}
