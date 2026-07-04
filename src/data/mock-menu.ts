import { Category, MenuItem } from "../types/menu";

export const categories: Category[] = [
  {
    id: "cat-deals",
    name: "Deals",
    slug: "deals",
    sortOrder: 1,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-new-addition",
    name: "New Addition",
    slug: "new-addition",
    sortOrder: 2,
    bannerStyle: "plain",
  },
  {
    id: "cat-starters",
    name: "Starters",
    slug: "starters",
    sortOrder: 3,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-bbq",
    name: "BBQ",
    slug: "bbq",
    sortOrder: 4,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-chaat",
    name: "Chaat",
    slug: "chaat",
    sortOrder: 5,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-karahi",
    name: "Karahi",
    slug: "karahi",
    sortOrder: 6,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-handi",
    name: "Handi",
    slug: "handi",
    sortOrder: 7,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-chefs-recommendation",
    name: "Chef's Recommendation",
    slug: "chefs-recommendation",
    sortOrder: 8,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-flavors-of-the-world",
    name: "Flavors of the World",
    slug: "flavors-of-the-world",
    sortOrder: 9,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-steaks",
    name: "Steaks",
    slug: "steaks",
    sortOrder: 10,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-brick-oven-pizza",
    name: "Brick Oven Pizza",
    slug: "brick-oven-pizza",
    sortOrder: 11,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-kids-corner",
    name: "Kid's Corner",
    slug: "kids-corner",
    sortOrder: 12,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-rice",
    name: "Rice",
    slug: "rice",
    sortOrder: 13,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-naan-paratha",
    name: "Naan, Paratha & Chapati",
    slug: "naan-paratha",
    sortOrder: 14,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-desserts",
    name: "Desserts",
    slug: "desserts",
    sortOrder: 15,
    bannerStyle: "pentagon",
  },
  {
    id: "cat-hot-beverages",
    name: "Hot Beverages",
    slug: "hot-beverages",
    sortOrder: 16,
    bannerStyle: "plain",
  },
  {
    id: "cat-cold-beverages",
    name: "Cold Beverages",
    slug: "cold-beverages",
    sortOrder: 17,
    bannerStyle: "pentagon",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "deal-combo-box",
    categoryId: "cat-deals",
    name: "Combo Box",
    description:
      "1 Chicken Biryani, 1/2 Chicken Peshawari Karahi, 1 Malai boti or Chicken Bihari boti with 2 Soft Drinks.",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    basePrice: 2950,
    discountedPrice: 2950,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
    dealLayout: true,
  },
  {
    id: "deal-1",
    categoryId: "cat-deals",
    name: "Deal 1",
    description: "Half peshawari chicken karahi + 3 fresh naan",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 1760,
    discountedPrice: 1760,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
    dealLayout: true,
  },
  {
    id: "deal-2",
    categoryId: "cat-deals",
    name: "Deal 2",
    description: "Club sandwich + soft drink with golden French fries",
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
    basePrice: 1375,
    discountedPrice: 1375,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
    dealLayout: true,
  },

  // --- NEW ADDITION ---
  {
    id: "new-crispy-bhindi",
    categoryId: "cat-new-addition",
    name: "Crispy Bhindi (new)",
    description:
      "Finely sliced okra seasoned with special spices, crispy-fried to perfection.",
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80",
    basePrice: 690,
    discountedPrice: 414,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "new-dhaka-fish",
    categoryId: "cat-new-addition",
    name: "Dhaka Fish (new)",
    description:
      "Sesame coated crispy deep-fried fish fingers, served with special dip.",
    imageUrl:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80",
    basePrice: 1350,
    discountedPrice: 810,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "new-buffalo-burger",
    categoryId: "cat-new-addition",
    name: "Buffalo Chicken Burger",
    description:
      "Crispy fried chicken breast dipped in hot buffalo sauce, topped with cheese and ranch.",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    basePrice: 1250,
    discountedPrice: 750,
    hasVariants: false,
    badge: "NEW_ARRIVAL",
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "new-chicken-chowmein",
    categoryId: "cat-new-addition",
    name: "Chicken Chowmein",
    description:
      "Stir-fried noodles with chicken, vegetables, and rich soy-sesame glaze.",
    imageUrl:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80",
    basePrice: 1090,
    discountedPrice: 654,
    hasVariants: false,
    badge: "NEW_ARRIVAL",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "new-chicken-chilli-dry",
    categoryId: "cat-new-addition",
    name: "Chicken Chilli Dry",
    description:
      "Classic wok-tossed chicken slices with green chillies, ginger, and garlic.",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
    basePrice: 1450,
    discountedPrice: 870,
    hasVariants: false,
    badge: "NEW_ARRIVAL",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "new-dry-beef-chilli",
    categoryId: "cat-new-addition",
    name: "Dry Beef Chilli",
    description:
      "Stir-fried sliced beef tenderloin with spring onions and fresh green chillies.",
    imageUrl:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&auto=format&fit=crop&q=80",
    basePrice: 1750,
    discountedPrice: 1050,
    hasVariants: false,
    badge: "NEW_ARRIVAL",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "new-shawarma-platter",
    categoryId: "cat-new-addition",
    name: "Shawarma Platter",
    description:
      "Juicy Shawarma Chicken, Mexican Rice, Cucumber, Lettuce and Onions with tangy white sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&auto=format&fit=crop&q=80",
    basePrice: 1600,
    discountedPrice: 960,
    hasVariants: false,
    badge: "NEW_ARRIVAL",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "new-kunafa",
    categoryId: "cat-new-addition",
    name: "kunafa",
    description:
      "Indulge in the luscious layers of crispy, sweet kunafa pastry, filled with ooey-gooey cheese.",
    imageUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
    basePrice: 900,
    discountedPrice: 540,
    hasVariants: false,
    badge: "NEW_ARRIVAL",
    isAvailable: true,
    isFeatured: false,
  },

  // --- STARTERS ---
  {
    id: "starter-chicken-corn-soup",
    categoryId: "cat-starters",
    name: "Chicken Corn Soup",
    description:
      "Classic rich broth with sweet corn kernels and shredded tender chicken breast.",
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
    basePrice: 490,
    discountedPrice: 294,
    hasVariants: false,
    badge: "BEST_SELLER",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "starter-hot-sour-soup",
    categoryId: "cat-starters",
    name: "Hot & Sour Soup",
    description:
      "Spicy and tangy broth loaded with minced veggies, chicken, and egg drops.",
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
    basePrice: 490,
    discountedPrice: 294,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "starter-cream-chicken-soup",
    categoryId: "cat-starters",
    name: "Cream of Chicken Soup",
    description:
      "Rich, smooth, and incredibly creamy soup slow-simmered with chicken cubes.",
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
    basePrice: 490,
    discountedPrice: 294,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "starter-cream-tomato-soup",
    categoryId: "cat-starters",
    name: "Cream of Tomato Soup",
    description:
      "Silky puréed tomatoes simmered with cream and topped with garlic croutons.",
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
    basePrice: 490,
    discountedPrice: 294,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- BBQ ---
  {
    id: "bbq-chicken-tikka",
    categoryId: "cat-bbq",
    name: "Chicken Tikka",
    description:
      "Spicy yogurt-marinated chicken quarter leg or breast cooked over wood charcoal.",
    imageUrl:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80",
    basePrice: 770,
    discountedPrice: 462,
    hasVariants: false,
    badge: "TRENDING",
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "bbq-fish-tikka",
    categoryId: "cat-bbq",
    name: "Fish Tikka",
    description:
      "River fish cubes marinated in special tandoori red masala, charbroiled on skewers.",
    imageUrl:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80",
    basePrice: 1440,
    discountedPrice: 864,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "bbq-chicken-malai-boti",
    categoryId: "cat-bbq",
    name: "Chicken Malai Boti",
    description:
      "Melt-in-mouth chicken boneless bites marinated in cream, white pepper, and green chillies.",
    imageUrl:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80",
    basePrice: 1380,
    discountedPrice: 828,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "bbq-shish-taouk",
    categoryId: "cat-bbq",
    name: "Shish Taouk served with saffron rice and fries",
    description:
      "Arabian style garlic-herb chicken skewers served over aromatic saffron rice.",
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&auto=format&fit=crop&q=80",
    basePrice: 1480,
    discountedPrice: 888,
    hasVariants: false,
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "bbq-afghani-boti",
    categoryId: "cat-bbq",
    name: "Afghani Boti",
    description:
      "Extremely mild, melt-in-the-mouth salted boneless meat cubes cooked over open charcoal.",
    imageUrl:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80",
    basePrice: 1580,
    discountedPrice: 948,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "bbq-beef-seekh",
    categoryId: "cat-bbq",
    name: "Beef Seekh Kabab",
    description:
      "Juicy, melt-in-your-mouth spiced minced beef, grilled on metal skewers.",
    imageUrl:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80",
    basePrice: 1300,
    discountedPrice: 780,
    hasVariants: false,
    badge: "TRENDING",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "bbq-turkish-kabab",
    categoryId: "cat-bbq",
    name: "Chicken Turkish kebab",
    description:
      "Turkish inspired minced chicken seasoned with bell peppers, parsley, and garlic.",
    imageUrl:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80",
    basePrice: 1350,
    discountedPrice: 810,
    hasVariants: false,
    servingNote: "Served With Saffron Rice",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "bbq-beef-bihari",
    categoryId: "cat-bbq",
    name: "Beef Bihari kebab",
    description:
      "Thin beef ribbons tenderized in raw papaya, mustard oil, and spices, smokey charred.",
    imageUrl:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80",
    basePrice: 1400,
    discountedPrice: 840,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  // --- CHAAT ---
  {
    id: "chaat-mix",
    categoryId: "cat-chaat",
    name: "Mix Chaat",
    description:
      "Classic savory chickpea salad with boiled potatoes, dynamic spices, yogurt and sweet tamarind.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    basePrice: 425,
    discountedPrice: 255,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chaat-pani-puri",
    categoryId: "cat-chaat",
    name: "Pani Puri",
    description:
      "Crispy puffed hollow pooris stuffed with chickpeas, potatoes, served with tangy sour water.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    basePrice: 425,
    discountedPrice: 255,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chaat-meethi-puri",
    categoryId: "cat-chaat",
    name: "Meethi Puri",
    description:
      "Puffed pooris filled with chickpea salad, loaded with sweet yogurt and fine sev garnish.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    basePrice: 425,
    discountedPrice: 255,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chaat-bhel-puri",
    categoryId: "cat-chaat",
    name: "Bhel Puri",
    description:
      "Crisp puffed rice tossed with onions, tomatoes, sweet tamarind, and spicy mint chutneys.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    basePrice: 425,
    discountedPrice: 255,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- KARAHI ---
  {
    id: "karahi-chicken-peshawari",
    categoryId: "cat-karahi",
    name: "Chicken Peshawari Karahi",
    description:
      "Dhaba style karahi cooked with tomatoes, green chillies, ginger, and freshly crushed spices.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 1990,
    discountedPrice: 1194,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-weight",
        name: "Portion Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-half", name: "Half (0.5 Kg)", additionalPrice: 0 },
          { id: "opt-full", name: "Full (1.0 Kg)", additionalPrice: 800 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "karahi-chicken-white",
    categoryId: "cat-karahi",
    name: "Chicken White Karahi",
    description:
      "Creamy and velvet soft white gravy karahi cooked with green chillies, cream, and black pepper.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 1990,
    discountedPrice: 1194,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-weight",
        name: "Portion Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-half", name: "Half (0.5 Kg)", additionalPrice: 0 },
          { id: "opt-full", name: "Full (1.0 Kg)", additionalPrice: 800 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "karahi-chicken-cheese",
    categoryId: "cat-karahi",
    name: "Chicken Cheese Karahi",
    description:
      "A rich and cheesy fusion twist to our classic savory wok tomato chicken gravy.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2290,
    discountedPrice: 1374,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-weight",
        name: "Portion Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-half", name: "Half (0.5 Kg)", additionalPrice: 0 },
          { id: "opt-full", name: "Full (1.0 Kg)", additionalPrice: 900 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "karahi-balochi",
    categoryId: "cat-karahi",
    name: "Balochi Tikka",
    description:
      "Wok tossed deep-fried chicken cubes infused with heavy garlic, ginger, and dynamic Balochi spices.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 1990,
    discountedPrice: 1194,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-weight",
        name: "Portion Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-half", name: "Half (0.5 Kg)", additionalPrice: 0 },
          { id: "opt-full", name: "Full (1.0 Kg)", additionalPrice: 800 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "karahi-mutton-peshawari",
    categoryId: "cat-karahi",
    name: "Mutton Peshawari Karahi",
    description:
      "Premium soft mutton cuts wok-cooked in butter, tomato base and crushed dynamic peppercorns.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2790,
    discountedPrice: 1674,
    hasVariants: true,
    pricePrefix: "From",
    badge: "TRENDING",
    variants: [
      {
        id: "var-weight",
        name: "Portion Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-half", name: "Half (0.5 Kg)", additionalPrice: 0 },
          { id: "opt-full", name: "Full (1.0 Kg)", additionalPrice: 1100 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "karahi-mutton-white",
    categoryId: "cat-karahi",
    name: "Mutton White Karahi",
    description:
      "Extremely mild and creamy mutton cuts cooked in rich curd, cream, and green chillies.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2790,
    discountedPrice: 1674,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-weight",
        name: "Portion Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-half", name: "Half (0.5 Kg)", additionalPrice: 0 },
          { id: "opt-full", name: "Full (1.0 Kg)", additionalPrice: 1100 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "karahi-ghalib-signature",
    categoryId: "cat-karahi",
    name: "Ghalib Signature Mutton Karahi",
    description:
      "Our house-special premium mutton cooked in secret spices with butter and fresh green herbs.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2790,
    discountedPrice: 1674,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-weight",
        name: "Portion Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-half", name: "Half (0.5 Kg)", additionalPrice: 0 },
          { id: "opt-full", name: "Full (1.0 Kg)", additionalPrice: 1200 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "karahi-prawn",
    categoryId: "cat-karahi",
    name: "Prawn Peshawari Karahi",
    description:
      "Wok tossed spicy prawns cooked in rich gingery tomato gravy with heavy seasoning.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2600,
    discountedPrice: 1560,
    hasVariants: false,
    badge: "SPECIAL_FLAVORS",
    isAvailable: true,
    isFeatured: false,
  },

  // --- HANDI ---
  {
    id: "handi-makhni",
    categoryId: "cat-handi",
    name: "Chicken Makhni Handi",
    description:
      "Rich, creamy, and savory chicken in a signature buttery sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2490,
    discountedPrice: 1494,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "handi-paneer-reshmi",
    categoryId: "cat-handi",
    name: "Chicken Paneer Reshmi Handi",
    description:
      "Tender chicken and soft paneer cooked in a creamy, aromatic gravy.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2490,
    discountedPrice: 1494,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "handi-hunzai",
    categoryId: "cat-handi",
    name: "Chicken Hunzai Handi",
    description:
      "A unique blend of savory chicken with fragrant herbs and mild spices.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2490,
    discountedPrice: 1494,
    hasVariants: false,
    badge: "POPULAR",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "handi-kabab",
    categoryId: "cat-handi",
    name: "Chicken Kabab Handi",
    description: "Spiced chicken kebabs blended in a deliciously savory sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    basePrice: 2490,
    discountedPrice: 1494,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- CHEF'S RECOMMENDATION ---
  {
    id: "chef-tarka-daal",
    categoryId: "cat-chefs-recommendation",
    name: "Tarka Daal",
    description:
      "Comfort in a bowl, slow-cooked lentils tempered with fragrant spices.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    basePrice: 920,
    discountedPrice: 552,
    hasVariants: false,
    badge: "TRENDING",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chef-palak-paneer",
    categoryId: "cat-chefs-recommendation",
    name: "Palak Paneer",
    description:
      "Fresh spinach and creamy paneer unite for a delicious vegetarian treat.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    basePrice: 980,
    discountedPrice: 588,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chef-mixed-sabzi",
    categoryId: "cat-chefs-recommendation",
    name: "Mixed Sabzi Masala",
    description: "Garden-fresh veggies sautéed in savory, aromatic masala.",
    imageUrl:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    basePrice: 920,
    discountedPrice: 552,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chef-lahori-chargha",
    categoryId: "cat-chefs-recommendation",
    name: "Lahori Chargha",
    description:
      "Crispy, tender chicken, marinated with traditional Lahori spices.",
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&auto=format&fit=crop&q=80",
    basePrice: 1650,
    discountedPrice: 990,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- FLAVORS OF THE WORLD ---
  {
    id: "world-club-sandwich",
    categoryId: "cat-flavors-of-the-world",
    name: "Ghalib Club Sandwich",
    description:
      "A classic club favorite packed with layers of savory delights, eggs, chicken, and fries.",
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
    basePrice: 1450,
    discountedPrice: 870,
    hasVariants: false,
    badge: "BEST_SELLER",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "world-crispy-chicken-burger",
    categoryId: "cat-flavors-of-the-world",
    name: "Crispy Fried Chicken Burger",
    description:
      "Crispy, golden chicken with a delicious crunch in every bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    basePrice: 1250,
    discountedPrice: 750,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "world-garlic-mayo-burger",
    categoryId: "cat-flavors-of-the-world",
    name: "Ghalib Chicken Burger With Garlic Mayo",
    description:
      "Chicken and creamy garlic sauce in a soft bun for a savory treat.",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    basePrice: 1250,
    discountedPrice: 750,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "world-cheddar-mushroom-burger",
    categoryId: "cat-flavors-of-the-world",
    name: "Chargrilled Beef Burger With Cheddar Mushrooms",
    description: "Smoked beef patty topped with savory cheddar mushrooms.",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    basePrice: 1300,
    discountedPrice: 780,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- STEAKS ---
  {
    id: "steak-chicken-tarragon",
    categoryId: "cat-steaks",
    name: "Chicken Steak with creamy tarragon sauce",
    description:
      "Tender chicken paired with a luxurious sauce. Served with choice of side lines.",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    basePrice: 1750,
    discountedPrice: 1050,
    hasVariants: false,
    badge: "SPECIAL_FLAVORS",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "steak-beef-tarragon",
    categoryId: "cat-steaks",
    name: "Beef Steak with creamy tarragon sauce",
    description:
      "With creamy tarragon sauce on sizzling premium cut beef steak.",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    basePrice: 2690,
    discountedPrice: 1614,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "steak-decked-beef",
    categoryId: "cat-steaks",
    name: "Decked Beef Steak",
    description:
      "The rich earthiness of mushrooms meets tender grilled beef steak. Served with sauteed vegetables.",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    basePrice: 2690,
    discountedPrice: 1614,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "steak-american",
    categoryId: "cat-steaks",
    name: "American Steak",
    description:
      "All-American comfort with a savory sauce. Served with fries or baked potato.",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    basePrice: 1750,
    discountedPrice: 1050,
    hasVariants: true,
    pricePrefix: "From",
    badge: "TRENDING",
    variants: [
      {
        id: "var-meat",
        name: "Choose Meat",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-steak-chicken", name: "Chicken Cut", additionalPrice: 0 },
          {
            id: "opt-steak-beef",
            name: "Premium Beef Cut",
            additionalPrice: 564,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  // --- BRICK OVEN PIZZA ---
  {
    id: "pizza-margherita",
    categoryId: "cat-brick-oven-pizza",
    name: "Margherita",
    description:
      "Simple, classic, and delicious - tomato sauce and mozzarella perfection.",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    basePrice: 1050,
    discountedPrice: 630,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "pizza-fajita",
    categoryId: "cat-brick-oven-pizza",
    name: "Chicken Fajita",
    description:
      "Bold chicken, peppers, and onions with savory sauce on a crisp crust.",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    basePrice: 1650,
    discountedPrice: 990,
    hasVariants: false,
    badge: "TRENDING",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "pizza-pepperoni",
    categoryId: "cat-brick-oven-pizza",
    name: "Pepperoni",
    description:
      "A classic pizza topped with savory slices of spicy pepperoni.",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    basePrice: 1650,
    discountedPrice: 990,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "pizza-tikka",
    categoryId: "cat-brick-oven-pizza",
    name: "Chicken Tikka Pizza",
    description: "Bold, savory chicken tikka flavors baked to perfection.",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    basePrice: 1650,
    discountedPrice: 990,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  // --- KID'S CORNER ---
  {
    id: "kids-mac-cheese",
    categoryId: "cat-kids-corner",
    name: "Mac & Cheese",
    description: "Cheesy comfort that kids can't resist.",
    imageUrl:
      "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&auto=format&fit=crop&q=80",
    basePrice: 1050,
    discountedPrice: 630,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "kids-nuggets-fries",
    categoryId: "cat-kids-corner",
    name: "Chicken Nuggets with Fries",
    description: "Crispy nuggets paired with golden fries for tiny tastebuds.",
    imageUrl:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80",
    basePrice: 850,
    discountedPrice: 510,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "kids-cheese-pizza",
    categoryId: "cat-kids-corner",
    name: "Cheese Pizza",
    description: "Gooey, cheesy, and kid-approved every time.",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    basePrice: 1050,
    discountedPrice: 630,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- RICE ---
  {
    id: "rice-matka-biryani",
    categoryId: "cat-rice",
    name: "Matka Biryani",
    description:
      "Fragrant, spiced rice slow-cooked in a clay pot for an aromatic treat.",
    imageUrl:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80",
    basePrice: 1450,
    discountedPrice: 870,
    hasVariants: false,
    badge: "CHEFS_SPECIAL",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "rice-veg-fried",
    categoryId: "cat-rice",
    name: "Vegetable Fried Rice",
    description: "Wok-tossed veggies and savory rice for a wholesome bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "rice-egg-fried",
    categoryId: "cat-rice",
    name: "Egg Fried Rice",
    description: "Fluffy rice and scrambled egg sautéed to perfection.",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
    basePrice: 550,
    discountedPrice: 330,
    hasVariants: false,
    badge: "SPECIAL_FLAVORS",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "rice-saffron",
    categoryId: "cat-rice",
    name: "Saffron rice",
    description: "Fragrant and delicate rice with a hint of saffron elegance.",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80",
    basePrice: 350,
    discountedPrice: 210,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- NAAN, PARATHA & CHAPATI ---
  {
    id: "naan-plain",
    categoryId: "cat-naan-paratha",
    name: "Plain Naan",
    description: "Soft, warm, and baked to perfection.",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80",
    basePrice: 90,
    discountedPrice: 90,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "naan-garlic",
    categoryId: "cat-naan-paratha",
    name: "Garlic Naan",
    description: "Fragrant, buttery, and infused with savory garlic.",
    imageUrl:
      "https://images.unsplash.com/photo-1559561724-4ea348cd867f?w=600&auto=format&fit=crop&q=80",
    basePrice: 160,
    discountedPrice: 96,
    hasVariants: false,
    badge: "POPULAR",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "naan-roghni",
    categoryId: "cat-naan-paratha",
    name: "Roghni Naan",
    description: "Rich and soft, with a golden, crispy top.",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80",
    basePrice: 160,
    discountedPrice: 96,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "naan-kandhari",
    categoryId: "cat-naan-paratha",
    name: "Kandhari Naan",
    description: "Traditional, flavorful, and perfect for any curry.",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80",
    basePrice: 140,
    discountedPrice: 84,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "naan-cheese",
    categoryId: "cat-naan-paratha",
    name: "Cheese Naan",
    description: "Stuffed with creamy cheese for a gooey delight.",
    imageUrl:
      "https://images.unsplash.com/photo-1724116382212-2d18c7272318??w=600&auto=format&fit=crop&q=80",
    basePrice: 770,
    discountedPrice: 462,
    hasVariants: false,
    badge: "POPULAR",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "paratha-lachha",
    categoryId: "cat-naan-paratha",
    name: "Lachha Paratha",
    description: "Flaky, layered, and deliciously crisp.",
    imageUrl:
      "https://images.unsplash.com/photo-1683533746199-9e3920bf3eab?w=600&auto=format&fit=crop&q=80",
    basePrice: 170,
    discountedPrice: 102,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "paratha-puri",
    categoryId: "cat-naan-paratha",
    name: "Puri Paratha",
    description: "Puffy, golden, and indulgently crisp.",
    imageUrl:
      "https://images.unsplash.com/photo-1605719161691-5d9771fc144f?w=600&auto=format&fit=crop&q=80",
    basePrice: 170,
    discountedPrice: 102,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chapati",
    categoryId: "cat-naan-paratha",
    name: "Chapati",
    description: "Light, soft, and freshly made.",
    imageUrl:
      "https://images.unsplash.com/photo-1599232288126-7dbd2127db14?w=600&auto=format&fit=crop&q=80",
    basePrice: 80,
    discountedPrice: 80,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "roti-whole-wheat",
    categoryId: "cat-naan-paratha",
    name: "Whole Wheat Roti",
    description: "Wholesome, rustic, and soft for every bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80",
    basePrice: 90,
    discountedPrice: 90,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- DESSERTS ---
  {
    id: "dessert-rabri",
    categoryId: "cat-desserts",
    name: "Rabri",
    description: "Lush, creamy, and fragrant, a timeless delight.",
    imageUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-gulab-jamun",
    categoryId: "cat-desserts",
    name: "Hot Gulab Jamun",
    description: "Warm, soft, and soaked in sweetness. Pure comfort!",
    imageUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
    basePrice: 400,
    discountedPrice: 240,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-divine-cake-slice",
    categoryId: "cat-desserts",
    name: "Chocolate Divine Cake Slice",
    description: "A rich, divine treat for every bite.",
    imageUrl:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&auto=format&fit=crop&q=80",
    basePrice: 600,
    discountedPrice: 360,
    hasVariants: false,
    badge: "POPULAR",
    isAvailable: false,
    isFeatured: false,
  },
  {
    id: "dessert-divine-cake-2lb",
    categoryId: "cat-desserts",
    name: "Chocolate Divine Cake 2 pounds",
    description: "Double the chocolate, double the divine experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&auto=format&fit=crop&q=80",
    basePrice: 3000,
    discountedPrice: 1800,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-fudge-brownie",
    categoryId: "cat-desserts",
    name: "Chocolate Fudge Brownie with Ice Cream",
    description:
      "Indulge in pure decadence with our rich and gooey Chocolate Fudge Brownie, topped with vanilla.",
    imageUrl: undefined,
    basePrice: 700,
    discountedPrice: 420,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-sizzling-brownie",
    categoryId: "cat-desserts",
    name: "sizzling Brownie With Vanilla Ice Cream",
    description:
      "Rich sizzling brownie served on hot cast iron with cool vanilla ice cream.",
    imageUrl: undefined,
    basePrice: 900,
    discountedPrice: 540,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-kulfi-falooda",
    categoryId: "cat-desserts",
    name: "Kulfi Falooda",
    description:
      "Indulge in the rich and creamy Kulfi Falooda, a decadent dessert that will take your taste...",
    imageUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
    basePrice: 540,
    discountedPrice: 324,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-ice-cream",
    categoryId: "cat-desserts",
    name: "Ice Cream",
    description: "Cool refreshing sweet scoops in assorted flavors.",
    imageUrl: undefined,
    basePrice: 320,
    discountedPrice: 192,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-lava-cake",
    categoryId: "cat-desserts",
    name: "Lava Cake with vanilla ice cream",
    description:
      "Warm chocolate lava cake with a molten center, served with ice cream.",
    imageUrl: undefined,
    basePrice: 900,
    discountedPrice: 540,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-kunafa-add",
    categoryId: "cat-desserts",
    name: "kunafa",
    description:
      "Indulge in the luscious layers of crispy, sweet kunafa pastry, filled with ooey-gooey cheese.",
    imageUrl:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
    basePrice: 900,
    discountedPrice: 540,
    hasVariants: false,
    badge: "NEW_ARRIVAL",
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-gajar-halwa",
    categoryId: "cat-desserts",
    name: "Gajar ka Halwa",
    description:
      "Traditional slow-cooked carrot dessert enriched with milk and dry fruits.",
    imageUrl: undefined,
    basePrice: 390,
    discountedPrice: 234,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "dessert-three-milk-new",
    categoryId: "cat-desserts",
    name: "Three Milk Cake Slice (New)",
    description: "Creamy and sweet rich milk sponge cake slice.",
    imageUrl: undefined,
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- HOT BEVERAGES (plain bannerStyle) ---
  {
    id: "hot-doodh-patti",
    categoryId: "cat-hot-beverages",
    name: "Doodh Patti",
    description:
      "Traditional heavy-milk tea slow cooked with premium loose tea leaves.",
    imageUrl: undefined,
    basePrice: 320,
    discountedPrice: 192,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "hot-kashmiri-chai",
    categoryId: "cat-hot-beverages",
    name: "Kashmiri Chai",
    description: "Authentic pink tea brewed with nuts and cardamoms.",
    imageUrl: undefined,
    basePrice: 390,
    discountedPrice: 234,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "hot-elaichi-chai",
    categoryId: "cat-hot-beverages",
    name: "Elaichi Chai",
    description: "Fragrant tea brewed with crushed green cardamom pods.",
    imageUrl: undefined,
    basePrice: 300,
    discountedPrice: 180,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "hot-kawah",
    categoryId: "cat-hot-beverages",
    name: "Kawah",
    description: "Traditional green tea infused with mint and saffron hints.",
    imageUrl: undefined,
    basePrice: 230,
    discountedPrice: 138,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },

  // --- COLD BEVERAGES ---
  {
    id: "cold-coffee",
    categoryId: "cat-cold-beverages",
    name: "Cold Coffee",
    description: "Rich, creamy, and ice-cold indulgence.",
    imageUrl:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80",
    basePrice: 600,
    discountedPrice: 360,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-mango-lassi",
    categoryId: "cat-cold-beverages",
    name: "Mango Lassi",
    description:
      "Indulge your taste buds with the refreshing and creamy goodness of Mango Lassi. This...",
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    basePrice: 380,
    discountedPrice: 228,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-mango-juice",
    categoryId: "cat-cold-beverages",
    name: "Mango Juice",
    description:
      "Indulge in the pure, tropical bliss of our refreshing Mango Juice. Each sip bursts with...",
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    basePrice: 480,
    discountedPrice: 288,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-mango-shake",
    categoryId: "cat-cold-beverages",
    name: "Mango Shake",
    description:
      "Indulge in the luscious blend of ripe mangoes and creamy milk in every sip of our...",
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 312,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-peachy-lychee",
    categoryId: "cat-cold-beverages",
    name: "Peachy Lychee",
    description: "Fragrant lychee meets luscious peach.",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-mint-lemonade",
    categoryId: "cat-cold-beverages",
    name: "Mint Lemonade",
    description: "Zesty lemon and cooling mint for a fresh kick.",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 420,
    discountedPrice: 252,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-fresh-juice",
    categoryId: "cat-cold-beverages",
    name: "Fresh Juice",
    description: "Pure fruit, freshly squeezed for a revitalizing treat.",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 600,
    discountedPrice: 360,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-pina-colada",
    categoryId: "cat-cold-beverages",
    name: "Pina Colada",
    description: "Tropical paradise in a creamy sip.",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 312,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-meethi-lassi",
    categoryId: "cat-cold-beverages",
    name: "Meethi Lassi",
    description: "Smooth yogurt sweetness in a glass.",
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    basePrice: 420,
    discountedPrice: 252,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-namkeen-lassi",
    categoryId: "cat-cold-beverages",
    name: "Namkeen Lassi",
    description: "Salty, creamy, and oh so traditional.",
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    basePrice: 420,
    discountedPrice: 252,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-sugarcane-juice",
    categoryId: "cat-cold-beverages",
    name: "Sugarcane Juice",
    description: "Pure, sweet, and invigorating.",
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    basePrice: 300,
    discountedPrice: 180,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-tropical-sunset",
    categoryId: "cat-cold-beverages",
    name: "Tropical Sunset",
    description: "Blend of peach and red grapes.",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 450,
    discountedPrice: 270,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-blonde-bombshell",
    categoryId: "cat-cold-beverages",
    name: "Blonde Bombshell (New)",
    description: "(blend of mango & orange)",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 420,
    discountedPrice: 252,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-tangy-surprise",
    categoryId: "cat-cold-beverages",
    name: "Tangy Surprise (New)",
    description: "(blend of apple & peach)",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-blue-lemonade",
    categoryId: "cat-cold-beverages",
    name: "Tropical Blue Lemonade",
    description: "A wave of citrus and blue refreshment.",
    imageUrl: undefined,
    basePrice: 420,
    discountedPrice: 252,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-strawberry-margarita",
    categoryId: "cat-cold-beverages",
    name: "Strawberry and Orange Margarita",
    description: "A fruity, tangy dance in every sip.",
    imageUrl: undefined,
    basePrice: 450,
    discountedPrice: 270,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-mint-lassi",
    categoryId: "cat-cold-beverages",
    name: "Mint Lassi",
    description: "Refreshingly creamy with a hint of mint.",
    imageUrl: undefined,
    basePrice: 390,
    discountedPrice: 234,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-sunset-heaven",
    categoryId: "cat-cold-beverages",
    name: "Sunset Heaven",
    description: "Blend of Peach and Orange.",
    imageUrl: undefined,
    basePrice: 450,
    discountedPrice: 270,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-mango-peach",
    categoryId: "cat-cold-beverages",
    name: "Mango Peach Paradise",
    description: "Tropical sweetness at its best.",
    imageUrl: undefined,
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-mineral-water",
    categoryId: "cat-cold-beverages",
    name: "Mineral Water",
    description: "Pure refreshment in every sip.",
    imageUrl: undefined,
    basePrice: 150,
    discountedPrice: 90,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-water-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-water-small", name: "Small (500ml)", additionalPrice: 0 },
          { id: "opt-water-large", name: "Large (1.5L)", additionalPrice: 110 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-soft-drinks",
    categoryId: "cat-cold-beverages",
    name: "Soft Drinks",
    description: "Coke, Sprite, Fanta, Sprite Zero, Coke Zero, Diet Coke, etc.",
    imageUrl: undefined,
    basePrice: 220,
    discountedPrice: 132,
    hasVariants: true,
    variants: [
      {
        id: "var-drink-type",
        name: "Choose Flavor",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-coke", name: "Coca Cola", additionalPrice: 0 },
          { id: "opt-sprite", name: "Sprite", additionalPrice: 0 },
          { id: "opt-fanta", name: "Fanta", additionalPrice: 0 },
          { id: "opt-coke-zero", name: "Coke Zero", additionalPrice: 0 },
          { id: "opt-sprite-zero", name: "Sprite Zero", additionalPrice: 0 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-iced-tea",
    categoryId: "cat-cold-beverages",
    name: "Iced Tea",
    description: "Chilled iced black tea with lemon infusion.",
    imageUrl: undefined,
    basePrice: 520,
    discountedPrice: 312,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-sparkling-peach",
    categoryId: "cat-cold-beverages",
    name: "Sparkling Peach Margarita",
    description: "Bubbly, juicy, and elegantly sweet.",
    imageUrl: undefined,
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-tropicana",
    categoryId: "cat-cold-beverages",
    name: "Tropicana",
    description: "Blend of Orange, Pineapple & Blueberry.",
    imageUrl: undefined,
    basePrice: 500,
    discountedPrice: 300,
    hasVariants: false,
    isAvailable: true,
    isFeatured: false,
  },
];

// TODO: MULTI-TENANT — Replace with: await api.getMenu(slug)

export const iceCreamCategories = [
  {
    id: "cat-special-combos",
    name: "Special Combos",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-classic-scoops",
    name: "Classic Scoops",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
    isAvailable: false,
  },
  {
    id: "cat-premium-scoops",
    name: "Premium Scoops",
    imageUrl:
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-sundaes",
    name: "Sundaes",
    imageUrl:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-milkshakes",
    name: "Milkshakes",
    imageUrl:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-waffles",
    name: "Waffles",
    imageUrl:
      "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-ice-cakes",
    name: "Ice Cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-falooda",
    name: "Falooda",
    imageUrl:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-smoothies",
    name: "Smoothies",
    imageUrl:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-coffee",
    name: "Coffee",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
];

export const iceCreamItems = [
  {
    id: "vanilla-scoop",
    categoryId: "cat-classic-scoops",
    name: "Vanilla Scoop",
    description: "Rich and creamy vanilla ice cream made with fresh dairy.",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
    basePrice: 350,
    discountedPrice: 290,
    badge: "TRENDING",
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-vanilla-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-vanilla-single",
            name: "Single Scoop",
            additionalPrice: 0,
          },
          {
            id: "opt-vanilla-double",
            name: "Double Scoop",
            additionalPrice: 180,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "chocolate-scoop",
    categoryId: "cat-classic-scoops",
    name: "Chocolate Scoop",
    description: "Smooth chocolate ice cream with rich cocoa flavor.",
    imageUrl:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop&q=80",
    basePrice: 360,
    discountedPrice: 300,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-chocolate-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-choco-single", name: "Single Scoop", additionalPrice: 0 },
          {
            id: "opt-choco-double",
            name: "Double Scoop",
            additionalPrice: 180,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "strawberry-scoop",
    categoryId: "cat-classic-scoops",
    name: "Strawberry Scoop",
    description: "Refreshing strawberry ice cream made with real fruit.",
    imageUrl:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop&q=80",
    basePrice: 360,
    discountedPrice: 310,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-strawberry-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-strawberry-single",
            name: "Single Scoop",
            additionalPrice: 0,
          },
          {
            id: "opt-strawberry-double",
            name: "Double Scoop",
            additionalPrice: 180,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "mango-scoop",
    categoryId: "cat-classic-scoops",
    name: "Mango Scoop",
    description: "Sweet mango ice cream bursting with tropical flavor.",
    imageUrl:
      "https://images.unsplash.com/photo-1689012133602-79f95fba010f?w=600&auto=format&fit=crop&q=80",
    basePrice: 370,
    discountedPrice: 320,
    hasVariants: true,
    badge: "POPULAR",
    pricePrefix: "From",
    variants: [
      {
        id: "var-mango-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-mango-single", name: "Single Scoop", additionalPrice: 0 },
          {
            id: "opt-mango-double",
            name: "Double Scoop",
            additionalPrice: 180,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "belgian-chocolate",
    categoryId: "cat-premium-scoops",
    name: "Belgian Chocolate",
    description:
      "Premium Belgian chocolate ice cream with intense cocoa richness.",
    imageUrl:
      "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 460,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-belgian-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-belgian-single",
            name: "Single Scoop",
            additionalPrice: 0,
          },
          {
            id: "opt-belgian-double",
            name: "Double Scoop",
            additionalPrice: 220,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "cookies-cream",
    categoryId: "cat-premium-scoops",
    name: "Cookies & Cream",
    description: "Creamy vanilla ice cream loaded with crunchy cookie pieces.",
    imageUrl:
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&auto=format&fit=crop&q=80",
    basePrice: 510,
    discountedPrice: 450,
    badge: "NEW_ARRIVAL",
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-cookie-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-cookie-single", name: "Single Scoop", additionalPrice: 0 },
          {
            id: "opt-cookie-double",
            name: "Double Scoop",
            additionalPrice: 220,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "pistachio-delight",
    categoryId: "cat-premium-scoops",
    name: "Pistachio Delight",
    description: "Silky pistachio ice cream topped with roasted pistachios.",
    imageUrl:
      "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=600&auto=format&fit=crop&q=80",
    basePrice: 540,
    discountedPrice: 470,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-pistachio-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-pista-single", name: "Single Scoop", additionalPrice: 0 },
          {
            id: "opt-pista-double",
            name: "Double Scoop",
            additionalPrice: 220,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "salted-caramel",
    categoryId: "cat-premium-scoops",
    name: "Salted Caramel",
    description: "Smooth caramel ice cream balanced with a hint of sea salt.",
    imageUrl:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 455,
    badge: "HOT_SELLING",
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-caramel-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-caramel-single",
            name: "Single Scoop",
            additionalPrice: 0,
          },
          {
            id: "opt-caramel-double",
            name: "Double Scoop",
            additionalPrice: 220,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "brownie-sundae",
    categoryId: "cat-sundaes",
    name: "Brownie Sundae",
    description:
      "Warm chocolate brownie topped with vanilla ice cream and fudge.",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
    basePrice: 690,
    discountedPrice: 620,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-brownie-addons",
        name: "Extra Toppings",
        required: false,
        minSelect: 0,
        maxSelect: 2,
        options: [
          { id: "opt-brownie-oreo", name: "Oreo Crumbs", additionalPrice: 70 },
          { id: "opt-brownie-nuts", name: "Roasted Nuts", additionalPrice: 90 },
          {
            id: "opt-brownie-sauce",
            name: "Extra Chocolate Sauce",
            additionalPrice: 60,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "hot-fudge-sundae",
    categoryId: "cat-sundaes",
    name: "Hot Fudge Sundae",
    description:
      "Classic vanilla ice cream topped with warm hot fudge and whipped cream.",
    imageUrl:
      "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?w=600&auto=format&fit=crop&q=80",
    basePrice: 670,
    discountedPrice: 610,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-fudge-addons",
        name: "Extra Toppings",
        required: false,
        minSelect: 0,
        maxSelect: 2,
        options: [
          {
            id: "opt-fudge-sprinkles",
            name: "Rainbow Sprinkles",
            additionalPrice: 50,
          },
          {
            id: "opt-fudge-marshmallow",
            name: "Mini Marshmallows",
            additionalPrice: 70,
          },
          { id: "opt-fudge-cherry", name: "Cherry", additionalPrice: 40 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "oreo-sundae",
    categoryId: "cat-sundaes",
    name: "Oreo Sundae",
    description:
      "Creamy vanilla ice cream layered with crushed Oreo cookies and chocolate sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80",
    basePrice: 720,
    discountedPrice: 650,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-oreo-sundae-toppings",
        name: "Extra Toppings",
        required: false,
        minSelect: 0,
        maxSelect: 2,
        options: [
          {
            id: "opt-oreo-sauce",
            name: "Extra Chocolate Sauce",
            additionalPrice: 60,
          },
          {
            id: "opt-oreo-cookie",
            name: "Extra Oreo Crumbs",
            additionalPrice: 80,
          },
          {
            id: "opt-oreo-whipped",
            name: "Whipped Cream",
            additionalPrice: 50,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "nutty-sundae",
    categoryId: "cat-sundaes",
    name: "Nutty Sundae",
    description:
      "Premium ice cream topped with roasted almonds, cashews and caramel.",
    imageUrl:
      "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783108661/download_bqg6xy.png?w=600&auto=format&fit=crop&q=80",
    basePrice: 760,
    discountedPrice: 690,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-nutty-sundae-toppings",
        name: "Extra Toppings",
        required: false,
        minSelect: 0,
        maxSelect: 2,
        options: [
          {
            id: "opt-nutty-almonds",
            name: "Extra Almonds",
            additionalPrice: 90,
          },
          {
            id: "opt-nutty-cashews",
            name: "Extra Cashews",
            additionalPrice: 90,
          },
          {
            id: "opt-nutty-caramel",
            name: "Extra Caramel",
            additionalPrice: 60,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chocolate-milkshake",
    categoryId: "cat-milkshakes",
    name: "Chocolate Milkshake",
    description: "Rich chocolate milkshake blended with premium ice cream.",
    imageUrl:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 470,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-chocolate-milkshake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-choco-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-choco-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "vanilla-milkshake",
    categoryId: "cat-milkshakes",
    name: "Vanilla Milkshake",
    description: "Classic vanilla shake made with creamy vanilla ice cream.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1695927470038-35a215e794f0?w=600&auto=format&fit=crop&q=80",
    basePrice: 500,
    discountedPrice: 450,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-vanilla-milkshake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-vanilla-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-vanilla-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "oreo-milkshake",
    categoryId: "cat-milkshakes",
    name: "Oreo Milkshake",
    description: "Creamy Oreo cookies blended into a thick milkshake.",
    imageUrl:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80",
    basePrice: 580,
    discountedPrice: 520,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-oreo-milkshake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-oreo-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-oreo-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "mango-milkshake",
    categoryId: "cat-milkshakes",
    name: "Mango Milkshake",
    description:
      "Refreshing mango milkshake made with ripe mangoes and fresh milk.",
    imageUrl:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=80",
    basePrice: 540,
    discountedPrice: 490,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-mango-milkshake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-mango-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-mango-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "nutella-waffle",
    categoryId: "cat-waffles",
    name: "Nutella Waffle",
    description:
      "Fresh Belgian waffle topped with Nutella and vanilla ice cream.",
    imageUrl:
      "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=600&auto=format&fit=crop&q=80",
    basePrice: 780,
    discountedPrice: 710,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "chocolate-waffle",
    categoryId: "cat-waffles",
    name: "Chocolate Waffle",
    description:
      "Golden waffle served with chocolate syrup and chocolate ice cream.",
    imageUrl:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=80",
    basePrice: 760,
    discountedPrice: 690,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "strawberry-waffle",
    categoryId: "cat-waffles",
    name: "Strawberry Waffle",
    description:
      "Belgian waffle topped with fresh strawberries and whipped cream.",
    imageUrl:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&auto=format&fit=crop&q=80",
    basePrice: 770,
    discountedPrice: 700,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "caramel-waffle",
    categoryId: "cat-waffles",
    name: "Caramel Waffle",
    description:
      "Warm waffle drizzled with salted caramel and served with ice cream.",
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop&q=80",
    basePrice: 790,
    discountedPrice: 720,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "chocolate-ice-cream-cake",
    categoryId: "cat-ice-cream-cakes",
    name: "Chocolate Ice Cream Cake",
    description:
      "Layers of rich chocolate sponge and creamy chocolate ice cream topped with chocolate ganache.",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    basePrice: 2490,
    discountedPrice: 2190,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-choco-cake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-choco-half", name: "Half Kg", additionalPrice: 0 },
          { id: "opt-choco-one", name: "1 Kg", additionalPrice: 1200 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "vanilla-ice-cream-cake",
    categoryId: "cat-ice-cream-cakes",
    name: "Vanilla Ice Cream Cake",
    description:
      "Classic vanilla ice cream cake with soft sponge and whipped cream frosting.",
    imageUrl:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&auto=format&fit=crop&q=80",
    basePrice: 2390,
    discountedPrice: 2090,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-vanilla-cake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-vanilla-half", name: "Half Kg", additionalPrice: 0 },
          { id: "opt-vanilla-one", name: "1 Kg", additionalPrice: 1150 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "oreo-ice-cream-cake",
    categoryId: "cat-ice-cream-cakes",
    name: "Oreo Ice Cream Cake",
    description:
      "Crunchy Oreo cookies layered with creamy vanilla ice cream and chocolate drizzle.",
    imageUrl:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80",
    basePrice: 2690,
    discountedPrice: 2390,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-oreo-cake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-oreo-half", name: "Half Kg", additionalPrice: 0 },
          { id: "opt-oreo-one", name: "1 Kg", additionalPrice: 1300 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "red-velvet-ice-cream-cake",
    categoryId: "cat-ice-cream-cakes",
    name: "Red Velvet Ice Cream Cake",
    description:
      "Premium red velvet sponge layered with smooth vanilla ice cream and cream cheese frosting.",
    imageUrl:
      "https://images.unsplash.com/photo-1557979619-445218f326b9?w=600&auto=format&fit=crop&q=80",
    basePrice: 2790,
    discountedPrice: 2490,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-redvelvet-cake-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-red-half", name: "Half Kg", additionalPrice: 0 },
          { id: "opt-red-one", name: "1 Kg", additionalPrice: 1350 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "royal-falooda",
    categoryId: "cat-falooda",
    name: "Royal Falooda",
    description:
      "Traditional falooda with kulfi, vermicelli, basil seeds and rose syrup.",
    imageUrl:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80",
    basePrice: 690,
    discountedPrice: 620,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "kulfi-falooda",
    categoryId: "cat-falooda",
    name: "Kulfi Falooda",
    description:
      "Creamy kulfi served with falooda noodles, sweet basil seeds and chilled milk.",
    imageUrl:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80",
    basePrice: 720,
    discountedPrice: 650,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chocolate-falooda",
    categoryId: "cat-falooda",
    name: "Chocolate Falooda",
    description:
      "Chocolate-flavored falooda topped with chocolate ice cream and syrup.",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
    basePrice: 740,
    discountedPrice: 670,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "mango-falooda",
    categoryId: "cat-falooda",
    name: "Mango Falooda",
    description:
      "Refreshing mango falooda served with mango ice cream and fresh mango puree.",
    imageUrl:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=80",
    basePrice: 730,
    discountedPrice: 660,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "berry-smoothie",
    categoryId: "cat-smoothies",
    name: "Berry Smoothie",
    description: "A refreshing blend of strawberries, blueberries and yogurt.",
    imageUrl:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&auto=format&fit=crop&q=80",
    basePrice: 540,
    discountedPrice: 490,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-berry-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-berry-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-berry-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "banana-smoothie",
    categoryId: "cat-smoothies",
    name: "Banana Smoothie",
    description: "Creamy banana smoothie blended with fresh milk and honey.",
    imageUrl:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 470,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-banana-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-banana-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-banana-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "mango-smoothie",
    categoryId: "cat-smoothies",
    name: "Mango Smoothie",
    description:
      "Refreshing mango smoothie blended with ripe mangoes and creamy yogurt.",
    imageUrl:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=80",
    basePrice: 560,
    discountedPrice: 510,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-mango-smoothie-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-mango-smoothie-regular",
            name: "Regular",
            additionalPrice: 0,
          },
          {
            id: "opt-mango-smoothie-large",
            name: "Large",
            additionalPrice: 180,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "peach-smoothie",
    categoryId: "cat-smoothies",
    name: "Peach Smoothie",
    description:
      "Sweet peach smoothie blended with fresh fruit and creamy yogurt.",
    imageUrl:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&auto=format&fit=crop&q=80",
    basePrice: 550,
    discountedPrice: 500,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-peach-smoothie-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-peach-smoothie-regular",
            name: "Regular",
            additionalPrice: 0,
          },
          {
            id: "opt-peach-smoothie-large",
            name: "Large",
            additionalPrice: 180,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cold-coffee",
    categoryId: "cat-coffee",
    name: "Cold Coffee",
    description: "Creamy chilled coffee blended with vanilla ice cream.",
    imageUrl:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80",
    basePrice: 480,
    discountedPrice: 430,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-cold-coffee-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-cold-coffee-regular",
            name: "Regular",
            additionalPrice: 0,
          },
          { id: "opt-cold-coffee-large", name: "Large", additionalPrice: 170 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "mocha",
    categoryId: "cat-coffee",
    name: "Mocha",
    description: "Espresso blended with chocolate and steamed milk.",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 470,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-mocha-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-mocha-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-mocha-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "latte",
    categoryId: "cat-coffee",
    name: "Latte",
    description: "Smooth espresso with steamed milk and a light layer of foam.",
    imageUrl:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80",
    basePrice: 500,
    discountedPrice: 450,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-latte-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-latte-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-latte-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "cappuccino",
    categoryId: "cat-coffee",
    name: "Cappuccino",
    description:
      "Classic cappuccino with rich espresso, steamed milk and velvety foam.",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
    basePrice: 510,
    discountedPrice: 460,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-cappuccino-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-cappuccino-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-cappuccino-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "family-combo",
    categoryId: "cat-special-combos",
    name: "Family Combo",
    description:
      "4 premium scoops, 2 waffles and 4 toppings—perfect for sharing.",
    imageUrl:
      "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783108661/download_bqg6xy.png?w=600&auto=format&fit=crop&q=80",
    basePrice: 2990,
    discountedPrice: 2590,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "couple-combo",
    categoryId: "cat-special-combos",
    name: "Couple Combo",
    description: "2 premium scoops, 1 waffle and 2 soft drinks.",
    imageUrl:
      "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=600&auto=format&fit=crop&q=80",
    basePrice: 1690,
    discountedPrice: 1490,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "kids-combo",
    categoryId: "cat-special-combos",
    name: "Kids Combo",
    description:
      "A fun combo with a single scoop, mini waffle and fruit juice.",
    imageUrl:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop&q=80",
    basePrice: 890,
    discountedPrice: 790,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "party-pack",
    categoryId: "cat-special-combos",
    name: "Party Pack",
    description:
      "8 scoops, 4 waffles, brownies and toppings for the ultimate celebration.",
    imageUrl:
      "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783108449/download_xb77bl.png?w=600&auto=format&fit=crop&q=80",
    basePrice: 4990,
    discountedPrice: 4390,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
];

export const pizzaCategories = [
  {
    id: "cat-deals",
    name: "Deals",
    sortOrder: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-signature-pizzas",
    name: "Signature Pizzas",
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-classic-pizzas",
    name: "Classic Pizzas",
    imageUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-stuffed-crust",
    name: "Stuffed Crust",
    imageUrl:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-sides",
    name: "Sides",
    imageUrl:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-pasta",
    name: "Pasta",
    imageUrl:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-wings",
    name: "Wings",
    imageUrl:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-salads",
    name: "Salads",
    imageUrl:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-desserts",
    name: "Desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
  {
    id: "cat-drinks",
    name: "Drinks",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    isAvailable: true,
  },
];

export const pizzaItems = [
  {
    id: "truffle-chicken-pizza",
    categoryId: "cat-signature-pizzas",
    name: "Truffle Chicken Pizza",
    description:
      "Grilled chicken, mushrooms, mozzarella and truffle sauce on a hand-tossed crust.",
    imageUrl:
      "https://i.pinimg.com/736x/fd/ee/18/fdee189f5d9d0d46ec626c9fb8d2932e.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 1590,
    discountedPrice: 1390,
    hasVariants: true,
    badge: "HOT_SELLING",
    pricePrefix: "From",
    variants: [
      {
        id: "var-truffle-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-truffle-small", name: "Small", additionalPrice: 0 },
          { id: "opt-truffle-medium", name: "Medium", additionalPrice: 500 },
          { id: "opt-truffle-large", name: "Large", additionalPrice: 900 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "bbq-ranch-pizza",
    categoryId: "cat-signature-pizzas",
    name: "BBQ Ranch Pizza",
    description:
      "Tender BBQ chicken, onions, ranch drizzle and mozzarella cheese.",
    imageUrl:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&auto=format&fit=crop&q=80",
    basePrice: 1490,
    discountedPrice: 1290,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-bbq-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-bbq-small", name: "Small", additionalPrice: 0 },
          { id: "opt-bbq-medium", name: "Medium", additionalPrice: 450 },
          { id: "opt-bbq-large", name: "Large", additionalPrice: 850 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "spicy-supreme-pizza",
    categoryId: "cat-signature-pizzas",
    name: "Spicy Supreme Pizza",
    description:
      "Loaded with pepperoni, chicken, jalapeños, olives and spicy sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&auto=format&fit=crop&q=80",
    basePrice: 1690,
    discountedPrice: 1490,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-supreme-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-supreme-small", name: "Small", additionalPrice: 0 },
          { id: "opt-supreme-medium", name: "Medium", additionalPrice: 500 },
          { id: "opt-supreme-large", name: "Large", additionalPrice: 950 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "four-cheese-pizza",
    categoryId: "cat-signature-pizzas",
    name: "Four Cheese Pizza",
    description:
      "A rich blend of mozzarella, cheddar, parmesan and feta cheeses.",
    imageUrl:
      "https://i.pinimg.com/736x/27/05/2c/27052c60bd2bbf3382a565960bb4b14b.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 1540,
    badge: "BEST_SELLER",
    discountedPrice: 1340,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-cheese-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-cheese-small", name: "Small", additionalPrice: 0 },
          { id: "opt-cheese-medium", name: "Medium", additionalPrice: 450 },
          { id: "opt-cheese-large", name: "Large", additionalPrice: 850 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "pepperoni-pizza",
    categoryId: "cat-classic-pizzas",
    name: "Pepperoni Pizza",
    description:
      "Classic pepperoni pizza topped with mozzarella and pizza sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=80",
    basePrice: 1390,
    discountedPrice: 1190,
    hasVariants: true,
    pricePrefix: "From",

    badge: "CHEFS_RECOMMENDATION",
    variants: [
      {
        id: "var-pepperoni-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-pepperoni-small", name: "Small", additionalPrice: 0 },
          { id: "opt-pepperoni-medium", name: "Medium", additionalPrice: 400 },
          { id: "opt-pepperoni-large", name: "Large", additionalPrice: 800 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "margherita-pizza",
    categoryId: "cat-classic-pizzas",
    name: "Margherita Pizza",
    description:
      "Traditional pizza with mozzarella, tomato sauce and fresh basil.",
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=80",
    basePrice: 1190,
    discountedPrice: 990,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-margherita-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-margherita-small", name: "Small", additionalPrice: 0 },
          { id: "opt-margherita-medium", name: "Medium", additionalPrice: 350 },
          { id: "opt-margherita-large", name: "Large", additionalPrice: 700 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "veggie-pizza",
    categoryId: "cat-classic-pizzas",
    name: "Veggie Pizza",
    description:
      "Loaded with mushrooms, onions, olives, capsicum and sweet corn.",
    imageUrl:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&auto=format&fit=crop&q=80",
    basePrice: 1290,
    discountedPrice: 1090,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-veggie-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-veggie-small", name: "Small", additionalPrice: 0 },
          { id: "opt-veggie-medium", name: "Medium", additionalPrice: 400 },
          { id: "opt-veggie-large", name: "Large", additionalPrice: 800 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "chicken-tikka-pizza",
    categoryId: "cat-classic-pizzas",
    name: "Chicken Tikka Pizza",
    description:
      "Pakistan's favorite chicken tikka flavor with onions and green peppers.",
    imageUrl:
      "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=600&auto=format&fit=crop&q=80",
    basePrice: 1450,
    discountedPrice: 1250,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-tikka-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-tikka-small", name: "Small", additionalPrice: 0 },
          { id: "opt-tikka-medium", name: "Medium", additionalPrice: 450 },
          { id: "opt-tikka-large", name: "Large", additionalPrice: 850 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "cheesy-stuffed-crust",
    categoryId: "cat-stuffed-crust",
    name: "Cheesy Stuffed Crust Pizza",
    description: "A classic pizza with a mozzarella cheese stuffed crust.",
    imageUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
    basePrice: 1690,
    discountedPrice: 1490,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-cheesy-crust-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-cheesy-small", name: "Small", additionalPrice: 0 },
          { id: "opt-cheesy-medium", name: "Medium", additionalPrice: 500 },
          { id: "opt-cheesy-large", name: "Large", additionalPrice: 900 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "garlic-stuffed-crust",
    categoryId: "cat-stuffed-crust",
    name: "Garlic Stuffed Crust Pizza",
    description: "Cheese-filled crust seasoned with garlic butter and herbs.",
    imageUrl:
      "https://i.pinimg.com/1200x/da/fe/99/dafe997b7f1a7ec3f418d3e649dbefea.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 1740,
    discountedPrice: 1540,
    hasVariants: true,
    badge: "TRENDING",
    pricePrefix: "From",
    variants: [
      {
        id: "var-garlic-crust-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-garlic-small", name: "Small", additionalPrice: 0 },
          { id: "opt-garlic-medium", name: "Medium", additionalPrice: 500 },
          { id: "opt-garlic-large", name: "Large", additionalPrice: 900 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chicken-stuffed-crust",
    categoryId: "cat-stuffed-crust",
    name: "Chicken Stuffed Crust Pizza",
    description:
      "Juicy chicken chunks with mozzarella stuffed crust and signature tomato sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600&auto=format&fit=crop&q=80",
    basePrice: 1790,
    discountedPrice: 1590,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-chicken-stuffed-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          {
            id: "opt-chicken-stuffed-small",
            name: "Small",
            additionalPrice: 0,
          },
          {
            id: "opt-chicken-stuffed-medium",
            name: "Medium",
            additionalPrice: 500,
          },
          {
            id: "opt-chicken-stuffed-large",
            name: "Large",
            additionalPrice: 900,
          },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "beef-stuffed-crust",
    categoryId: "cat-stuffed-crust",
    name: "Beef Stuffed Crust Pizza",
    description:
      "Loaded beef chunks with melted cheese stuffed crust and spicy sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&auto=format&fit=crop&q=80",
    basePrice: 1820,
    discountedPrice: 1620,
    hasVariants: true,
    pricePrefix: "From",
    variants: [
      {
        id: "var-beef-stuffed-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-beef-stuffed-small", name: "Small", additionalPrice: 0 },
          {
            id: "opt-beef-stuffed-medium",
            name: "Medium",
            additionalPrice: 500,
          },
          { id: "opt-beef-stuffed-large", name: "Large", additionalPrice: 900 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "garlic-bread",
    categoryId: "cat-sides",
    name: "Garlic Bread",
    description: "Freshly baked bread brushed with garlic butter and herbs.",
    imageUrl:
      "https://i.pinimg.com/vwebpf/1200x/a0/59/41/a05941e4b18e57d5ced7b013cb6e2384.webp?w=600&auto=format&fit=crop&q=80",
    basePrice: 390,
    discountedPrice: 290,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-garlic-bread-size",
        name: "Portion",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-garlic-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-garlic-large", name: "Large", additionalPrice: 150 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "cheesy-breadsticks",
    categoryId: "cat-sides",
    name: "Cheesy Breadsticks",
    description:
      "Soft breadsticks loaded with mozzarella cheese and garlic dip.",
    imageUrl:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&auto=format&fit=crop&q=80",
    basePrice: 450,
    discountedPrice: 350,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "loaded-fries",
    categoryId: "cat-sides",
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese sauce, jalapeños and mayo.",
    imageUrl:
      "https://i.pinimg.com/736x/73/9f/e2/739fe23e40119b217e73b62462da1403.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 420,
    hasVariants: true,
    badge: "SPECIAL_FLAVORS",
    pricePrefix: "",
    variants: [
      {
        id: "var-fries-spice",
        name: "Spice Level",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-fries-mild", name: "Mild", additionalPrice: 0 },
          { id: "opt-fries-spicy", name: "Spicy", additionalPrice: 50 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "mozzarella-sticks",
    categoryId: "cat-sides",
    name: "Mozzarella Sticks",
    description: "Golden fried mozzarella sticks served with marinara dip.",
    imageUrl:
      "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=600&auto=format&fit=crop&q=80",
    basePrice: 480,
    discountedPrice: 380,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "chicken-alfredo-pasta",
    categoryId: "cat-pasta",
    name: "Chicken Alfredo Pasta",
    description:
      "Creamy Alfredo sauce with grilled chicken and parmesan cheese.",
    imageUrl:
      "https://images.unsplash.com/photo-1702827762413-5e65a63cf700?w=600&auto=format&fit=crop&q=80",
    basePrice: 790,
    discountedPrice: 690,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-alfredo-size",
        name: "Portion",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-alfredo-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-alfredo-large", name: "Large", additionalPrice: 200 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "spaghetti-bolognese",
    categoryId: "cat-pasta",
    name: "Spaghetti Bolognese",
    description: "Classic spaghetti with rich beef Bolognese sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=600&auto=format&fit=crop&q=80",
    basePrice: 820,
    discountedPrice: 720,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-bolognese-size",
        name: "Portion",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-bolognese-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-bolognese-large", name: "Large", additionalPrice: 200 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "creamy-penne",
    categoryId: "cat-pasta",
    name: "Creamy Penne Pasta",
    description: "Penne pasta tossed in creamy white sauce with herbs.",
    imageUrl:
      "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=600&auto=format&fit=crop&q=80",
    basePrice: 750,
    discountedPrice: 650,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-penne-size",
        name: "Portion",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-penne-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-penne-large", name: "Large", additionalPrice: 200 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },
  {
    id: "mac-and-cheese",
    categoryId: "cat-pasta",
    name: "Mac & Cheese",
    description: "Classic macaroni pasta baked with rich cheddar cheese sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&auto=format&fit=crop&q=80",
    basePrice: 680,
    discountedPrice: 580,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-mac-size",
        name: "Portion",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-mac-regular", name: "Regular", additionalPrice: 0 },
          { id: "opt-mac-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "hot-wings",
    categoryId: "cat-wings",
    name: "Hot Wings",
    description: "Spicy crispy chicken wings tossed in hot chili sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&auto=format&fit=crop&q=80",
    basePrice: 590,
    discountedPrice: 490,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-hot-wings-size",
        name: "Quantity",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-wings-6", name: "6 Pieces", additionalPrice: 0 },
          { id: "opt-wings-10", name: "10 Pieces", additionalPrice: 250 },
          { id: "opt-wings-15", name: "15 Pieces", additionalPrice: 450 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "bbq-wings",
    categoryId: "cat-wings",
    name: "BBQ Wings",
    description: "Juicy chicken wings glazed with smoky BBQ sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop&q=80",
    basePrice: 610,
    discountedPrice: 510,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-bbq-wings-size",
        name: "Quantity",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-bbq-6", name: "6 Pieces", additionalPrice: 0 },
          { id: "opt-bbq-10", name: "10 Pieces", additionalPrice: 250 },
          { id: "opt-bbq-15", name: "15 Pieces", additionalPrice: 450 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "garlic-wings",
    categoryId: "cat-wings",
    name: "Garlic Wings",
    description: "Crispy wings tossed in buttery garlic sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&auto=format&fit=crop&q=80",
    basePrice: 600,
    discountedPrice: 500,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-garlic-wings-size",
        name: "Quantity",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-garlic-6", name: "6 Pieces", additionalPrice: 0 },
          { id: "opt-garlic-10", name: "10 Pieces", additionalPrice: 250 },
          { id: "opt-garlic-15", name: "15 Pieces", additionalPrice: 450 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "honey-wings",
    categoryId: "cat-wings",
    name: "Honey Wings",
    description: "Sweet and sticky honey-glazed chicken wings.",
    imageUrl:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&auto=format&fit=crop&q=80",
    basePrice: 620,
    discountedPrice: 520,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-honey-wings-size",
        name: "Quantity",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-honey-6", name: "6 Pieces", additionalPrice: 0 },
          { id: "opt-honey-10", name: "10 Pieces", additionalPrice: 250 },
          { id: "opt-honey-15", name: "15 Pieces", additionalPrice: 450 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  // Salads
  {
    id: "caesar-salad",
    categoryId: "cat-salads",
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce, croutons, parmesan and Caesar dressing.",
    imageUrl:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&auto=format&fit=crop&q=80",
    basePrice: 450,
    discountedPrice: 380,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-caesar-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-caesar-small", name: "Small", additionalPrice: 0 },
          { id: "opt-caesar-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "greek-salad",
    categoryId: "cat-salads",
    name: "Greek Salad",
    description: "Cucumber, olives, feta cheese and fresh vegetables.",
    imageUrl:
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=600&auto=format&fit=crop&q=80",
    basePrice: 470,
    discountedPrice: 390,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-greek-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-greek-small", name: "Small", additionalPrice: 0 },
          { id: "opt-greek-large", name: "Large", additionalPrice: 180 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "garden-salad",
    categoryId: "cat-salads",
    name: "Garden Salad",
    description: "Mixed greens with tomatoes, cucumbers and light dressing.",
    imageUrl:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&auto=format&fit=crop&q=80",
    basePrice: 430,
    discountedPrice: 350,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-garden-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-garden-small", name: "Small", additionalPrice: 0 },
          { id: "opt-garden-large", name: "Large", additionalPrice: 150 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "chicken-salad",
    categoryId: "cat-salads",
    name: "Chicken Salad",
    description: "Grilled chicken served over fresh mixed greens.",
    imageUrl:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 440,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-chicken-salad-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-chicken-small", name: "Small", additionalPrice: 0 },
          { id: "opt-chicken-large", name: "Large", additionalPrice: 200 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  // Desserts (first half)
  {
    id: "chocolate-lava-cake",
    categoryId: "cat-desserts",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center.",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    basePrice: 490,
    discountedPrice: 390,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "brownie-slice",
    categoryId: "cat-desserts",
    name: "Chocolate Brownie",
    description: "Fudgy chocolate brownie served warm with chocolate drizzle.",
    imageUrl:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80",
    basePrice: 420,
    discountedPrice: 320,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: false,
  },
  {
    id: "ice-cream-scoop-dessert",
    categoryId: "cat-desserts",
    name: "Ice Cream Scoop Dessert",
    description:
      "Single scoop of premium ice cream served with chocolate drizzle.",
    imageUrl:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
    basePrice: 350,
    discountedPrice: 250,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-icecream-flavor",
        name: "Flavor",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-vanilla", name: "Vanilla", additionalPrice: 0 },
          { id: "opt-chocolate", name: "Chocolate", additionalPrice: 30 },
          { id: "opt-strawberry", name: "Strawberry", additionalPrice: 30 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "cheesecake-slice",
    categoryId: "cat-desserts",
    name: "Cheesecake Slice",
    description: "Creamy baked cheesecake with a buttery biscuit base.",
    imageUrl:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80",
    basePrice: 520,
    discountedPrice: 420,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },

  // Drinks
  {
    id: "coke",
    categoryId: "cat-drinks",
    name: "Coca Cola",
    description: "Chilled refreshing soft drink.",
    imageUrl:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&auto=format&fit=crop&q=80",
    basePrice: 120,
    discountedPrice: 90,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-coke-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-coke-small", name: "330ml", additionalPrice: 0 },
          { id: "opt-coke-large", name: "500ml", additionalPrice: 40 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "sprite",
    categoryId: "cat-drinks",
    name: "Sprite",
    description: "Lemon-lime sparkling soft drink.",
    imageUrl:
      "https://images.unsplash.com/photo-1690988109041-458628590a9e?w=600&auto=format&fit=crop&q=80",
    basePrice: 120,
    discountedPrice: 90,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-sprite-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-sprite-small", name: "330ml", additionalPrice: 0 },
          { id: "opt-sprite-large", name: "500ml", additionalPrice: 40 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "fanta",
    categoryId: "cat-drinks",
    name: "Fanta",
    description: "Orange flavored sparkling drink.",
    imageUrl:
      "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&auto=format&fit=crop&q=80",
    basePrice: 120,
    discountedPrice: 90,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-fanta-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-fanta-small", name: "330ml", additionalPrice: 0 },
          { id: "opt-fanta-large", name: "500ml", additionalPrice: 40 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: false,
  },

  {
    id: "mineral-water",
    categoryId: "cat-drinks",
    name: "Mineral Water",
    description: "Pure chilled bottled water.",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    basePrice: 100,
    discountedPrice: 70,
    hasVariants: true,
    pricePrefix: "",
    variants: [
      {
        id: "var-water-size",
        name: "Size",
        required: true,
        minSelect: 1,
        maxSelect: 1,
        options: [
          { id: "opt-water-small", name: "500ml", additionalPrice: 0 },
          { id: "opt-water-large", name: "1.5L", additionalPrice: 80 },
        ],
      },
    ],
    isAvailable: true,
    isFeatured: true,
  },

  // Deals
  {
    id: "solo-meal-deal",
    categoryId: "cat-deals",
    name: "Solo Meal Deal",
    description: "1 medium pizza + 1 drink + 1 side.",
    imageUrl:
      "https://i.pinimg.com/1200x/21/1b/e4/211be462f855bc8e2137fafaad69c5e2.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 1290,
    discountedPrice: 1090,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "couple-deal",
    categoryId: "cat-deals",
    name: "Couple Deal",
    description: "1 large pizza + 2 drinks + 1 side + dessert.",
    imageUrl:
      "https://i.pinimg.com/1200x/c0/e3/73/c0e373e5f19e982532701f96e57c4fab.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 2190,
    discountedPrice: 1890,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "family-feast",
    categoryId: "cat-deals",
    name: "Family Feast",
    description: "2 large pizzas + 2 sides + 4 drinks.",
    imageUrl:
      "https://i.pinimg.com/736x/02/77/2a/02772aa378d66f932e247d48a4c36b7a.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 3490,
    discountedPrice: 2990,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },

  {
    id: "party-box",
    categoryId: "cat-deals",
    name: "Party Box",
    description: "3 large pizzas + 2 sides + 6 drinks + dessert combo.",
    imageUrl:
      "https://i.pinimg.com/1200x/e7/98/47/e798471e47f4ea367e116c3c325d7cf2.jpg?w=600&auto=format&fit=crop&q=80",
    basePrice: 4990,
    discountedPrice: 4290,
    hasVariants: false,
    pricePrefix: "",
    variants: [],
    isAvailable: true,
    isFeatured: true,
  },
];
