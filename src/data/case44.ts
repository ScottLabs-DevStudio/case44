export type BandMember = {
  name: string;
  role: string;
  bio: string;
  influences: string;
  initials: string;
  photo: string;
};

export type Show = {
  date: string;
  time?: string;
  title: string;
  venue: string;
  city?: string;
  featured?: boolean;
};

export type GalleryImage = {
  src: string;
  title: string;
  category: string;
};

export type Video = {
  title: string;
  description: string;
  embedUrl: string;
  venue: string;
  date: string;
};

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/Case44.rocks" },
  { label: "Instagram", href: "https://instagram.com/case44.rocks" },
  { label: "YouTube", href: "https://www.youtube.com/user/Case44rocks" },
  { label: "Threads", href: "http://www.threads.net/case44rocks" },
  { label: "Cash App", href: "https://cash.app/$phoenix841" },
];

export const heroImage = "/images/case44/f7248d2a-case44-main.png";
export const bandLogoImage = "/images/case44/204fc2d6-untitled-design.png";
export const letteredLogoImage = "/images/case44/1bdbd8c8-case44-lettered.png";
export const videoBannerImage = "/images/case44/341dfb4c-case44-banner.png";
export const merchImage = "/images/case44/57b6fc78-copy-of-the-alley.png";

export const members: BandMember[] = [
  {
    name: "Robert Elmore",
    role: "Bass & Backing Vocals",
    bio: "Self-taught since the age of twelve, Robert moved to St. Louis in 2016 and started sitting in at local jam sessions and meeting musicians. Robert met Steve at the National Blues Museum \"Sitting On The Porch\" jam sessions, and both played with Sisters Magnolia and The Weeds.",
    influences: "Marcus Miller, Leon Wilkeson, John Paul Jones",
    initials: "RE",
    photo: "/images/case44/7c661500-rob3.jpg",
  },
  {
    name: "Steve Eschbacher",
    role: "Drums",
    bio: "Born and raised in St. Louis, Steve has been playing drums for 50 years. His early influences covered pop, classic rock, funk, and blues. Wedding reception bands, original bands, cover bands, drum instruction, and jam sessions have all been part of his musical life.",
    influences: "Pop, Classic Rock, Funk & Blues",
    initials: "SE",
    photo: "/images/case44/8bea6e4f-steve2.jpg",
  },
  {
    name: "Michael J. Johnson",
    role: "Guitar & Lead Vocals",
    bio: "A guitarist and lead vocalist with a passion for music since age two that continues to this day. Mike met Steve and Robert through playing jam sessions at the National Blues Museum, and the three formed the core of Case 44.",
    influences: "Stevie Ray Vaughan, Kenny Wayne Shepherd, Jimi Hendrix, George Harrison, Jerry Garcia, Eric Clapton, John Mayer, Carlos Santana",
    initials: "MJJ",
    photo: "/images/case44/85471f36-mike1.jpeg",
  },
];

export const venues = [
  "Moonshine Blues Bar, St. Charles",
  "Fast Eddie's Bon-Air, Alton",
  "Hawg Pit BBQ, Grafton",
  "Salvatore's Italian Grill, St. Charles",
  "Baker & Hale, Godfrey",
  "Doit's Village Inn, Granite City",
  "St. Charles Music House, St. Charles",
  "Kenny's Bar & Grill, Barnhart",
  "Grafton Pub, Grafton",
  "Alton VFW Post 1308, Alton",
  "Alton Moose Lodge, Alton",
  "Wood River Moose Lodge, Wood River",
  "Bobby's Frozen Custard, Maryville",
  "National Blues Museum, St. Louis",
];

export const shows: Show[] = [
  { date: "2026-10-14", time: "6:00 PM", title: "Case 44 @ Baker & Hale - Bike Night", venue: "Bakers & Hale", city: "Godfrey", featured: true },
  { date: "2026-10-04", time: "4:00 PM", title: "Case 44 Hosts Weekly Jam Session", venue: "Moonshine Blues Bar", city: "Saint Charles", featured: true },
  { date: "2026-09-12", time: "9:00 PM", title: "Case 44 @ Alton Moose Lodge", venue: "Alton Moose Lodge", city: "Alton" },
  { date: "2026-09-12", time: "2:00 PM", title: "Case 44 @ Hawg Pit BBQ", venue: "Hawg Pit BBQ", city: "Grafton" },
  { date: "2026-09-06", time: "4:00 PM", title: "Case 44 Hosts Weekly Jam Session", venue: "Moonshine Blues Bar", city: "Saint Charles", featured: true },
  { date: "2026-08-02", time: "4:00 PM", title: "Case 44 Hosts Weekly Jam Session", venue: "Moonshine Blues Bar", city: "Saint Charles", featured: true },
  { date: "2026-07-15", time: "6:00 PM", title: "Case 44 @ Baker & Hale - Bike Night", venue: "Bakers & Hale", city: "Godfrey", featured: true },
  { date: "2026-07-11", time: "8:00 PM", title: "Case 44 @ St. Charles Music House", venue: "St. Charles Music House", city: "St. Charles" },
  { date: "2026-07-05", time: "4:00 PM", title: "Case 44 Hosts Weekly Jam Session", venue: "Moonshine Blues Bar", city: "Saint Charles", featured: true },
  { date: "2026-07-04", title: "Private Event", venue: "Private Event" },
  { date: "2026-06-25", time: "6:00 PM", title: "Case 44 @ Salvatore's", venue: "Salvatore's Italian Grill", city: "St. Charles" },
  { date: "2026-06-21", time: "7:30 PM", title: "Case 44 Debut @ Bobby's Frozen Custard - Outdoor Concert Series", venue: "Bobby's Frozen Custard", city: "Maryville", featured: true },
  { date: "2026-06-20", time: "2:00 PM", title: "Case 44 Debut @ Grafton Pub", venue: "Grafton Pub", city: "Grafton", featured: true },
  { date: "2026-06-13", time: "2:00 PM", title: "Case 44 @ Hawg Pit", venue: "Hawg Pit BBQ", city: "Grafton" },
  { date: "2026-06-07", time: "4:00 PM", title: "Case 44 Hosts Weekly Jam Session", venue: "Moonshine Blues Bar", city: "Saint Charles", featured: true },
  { date: "2026-05-27", time: "6:00 PM", title: "Case 44 @ Baker & Hale - Bike Night", venue: "Bakers & Hale", city: "Godfrey", featured: true },
  { date: "2026-05-22", time: "7:00 PM", title: "Case 44 @ Alton VFW", venue: "Alton VFW Post 1308", city: "Alton" },
  { date: "2026-05-17", time: "2:00 PM", title: "Case 44 @ Hawg Pit BBQ - Grafton Bike Week", venue: "Hawg Pit BBQ", city: "Grafton", featured: true },
  { date: "2026-05-10", time: "7:00 PM", title: "Case 44 @ Fast Eddie's Bon Air", venue: "Fast Eddie's Bon-Air", city: "Alton" },
  { date: "2026-05-03", time: "4:00 PM", title: "Case 44 Hosts Weekly Jam Session", venue: "Moonshine Blues Bar", city: "Saint Charles", featured: true },
  { date: "2026-04-25", time: "2:00 PM", title: "Case 44 @ Hawg Pit BBQ", venue: "Hawg Pit BBQ", city: "Grafton" },
  { date: "2026-04-24", time: "6:30 PM", title: "Case 44 @ Wood River Moose Lodge", venue: "Wood River Moose Lodge", city: "Wood River" },
  { date: "2026-04-23", time: "6:00 PM", title: "Case 44 @ Salvatore's Italian Grill", venue: "Salvatore's Italian Grill", city: "St. Charles" },
  { date: "2026-04-17", time: "8:00 PM", title: "Case 44 @ St. Charles Music House", venue: "St. Charles Music House", city: "St. Charles" },
  { date: "2026-04-04", time: "8:30 PM", title: "Case 44 @ Doit's Village Inn", venue: "Doit's Village Inn", city: "Granite City" },
  { date: "2026-03-29", time: "1:00 PM", title: "Case 44 @ Fast Eddie's Bon Air", venue: "Fast Eddie's Bon-Air", city: "Alton" },
  { date: "2026-03-26", time: "6:00 PM", title: "Case 44 @ Salvatore's Italian Grill", venue: "Salvatore's Italian Grill", city: "St. Charles" },
  { date: "2025-12-12", time: "8:00 PM", title: "Case 44 @ Kenny's Bar & Grill", venue: "Kenny's Bar & Grill", city: "Barnhart" },
  { date: "2025-12-11", time: "6:00 PM", title: "Case 44 @ Fast Eddie's Bon-Air", venue: "Fast Eddie's Bon-Air", city: "Alton" },
  { date: "2025-12-07", time: "4:00 PM", title: "Moonshine Blues Bar Open Jam Hosted by Case 44", venue: "Moonshine Blues Bar", city: "St. Charles", featured: true },
  { date: "2025-12-05", time: "8:30 PM", title: "Case 44 @ Doit's Village Inn", venue: "Doit's Village Inn", city: "Granite City" },
  { date: "2025-11-02", time: "4:00 PM", title: "Moonshine Blues Bar Open Jam Hosted by Case 44", venue: "Moonshine Blues Bar", city: "St. Charles", featured: true },
  { date: "2025-11-01", time: "8:30 PM", title: "Case 44 @ Doit's Village Inn", venue: "Doit's Village Inn", city: "Granite City" },
  { date: "2025-10-29", time: "6:00 PM", title: "Case 44 @ Baker & Hale - End of Year Bike Week Show", venue: "Bakers & Hale", city: "Godfrey", featured: true },
  { date: "2025-10-26", time: "2:00 PM", title: "Case 44 @ Hawg Pit BBQ", venue: "Hawg Pit BBQ", city: "Grafton" },
  { date: "2025-10-17", time: "8:00 PM", title: "Case 44 @ Kenny's Bar & Grill", venue: "Kenny's Bar & Grill", city: "Barnhart" },
  { date: "2025-10-05", time: "4:00 PM", title: "Moonshine Blues Bar Open Jam Hosted by Case 44", venue: "Moonshine Blues Bar", city: "St. Charles", featured: true },
  { date: "2025-09-21", time: "2:00 PM", title: "Case 44 @ Hawg Pit BBQ", venue: "Hawg Pit BBQ", city: "Grafton" },
  { date: "2025-09-11", time: "6:00 PM", title: "Case 44 @ Fast Eddie's Bon-Air", venue: "Fast Eddie's Bon-Air", city: "Alton" },
  { date: "2025-09-07", time: "4:00 PM", title: "Moonshine Blues Bar Open Jam Hosted by Case 44", venue: "Moonshine Blues Bar", city: "St. Charles", featured: true },
];

export const videos: Video[] = [
  {
    title: "Case 44 Live Performance",
    description: "Live Case 44 performance video from the band's old site video page.",
    embedUrl: "https://www.youtube.com/embed/3FcU4j_u_bY?rel=0",
    venue: "Case 44",
    date: "2026",
  },
  {
    title: "Case 44 Blues Rock Set",
    description: "Another live clip from the official Case44rocks.com video archive.",
    embedUrl: "https://www.youtube.com/embed/L2g36A6zPXM?rel=0",
    venue: "Case 44",
    date: "2026",
  },
  {
    title: "Case 44 Live Clip",
    description: "Live performance footage sourced from the band's prior website.",
    embedUrl: "https://www.youtube.com/embed/OKBhh4VgPWQ?rel=0",
    venue: "Case 44",
    date: "2026",
  },
  {
    title: "Case 44 Stage Video",
    description: "Official video embed recovered from the original Case44rocks.com site.",
    embedUrl: "https://www.youtube.com/embed/SkW9LOmc_sI?rel=0",
    venue: "Case 44",
    date: "2026",
  },
  {
    title: "Case 44 Live Archive",
    description: "Additional performance video from the old site video section.",
    embedUrl: "https://www.youtube.com/embed/uZHmB_dYZj8?rel=0",
    venue: "Case 44",
    date: "2026",
  },
  {
    title: "Case 44 Home Page Video",
    description: "The embedded video that appeared on the old site's home page.",
    embedUrl: "https://www.youtube.com/embed/ZGQtLaKOGwA?rel=0",
    venue: "Case 44",
    date: "2026",
  },
];

export const merchDetails = {
  contact: "Michael Johnson",
  summary: "Please get in contact with Michael Johnson of Case 44 for merchandise purchases.",
  notes: [
    "The band currently stocks Medium through XL shirts in both designs.",
    "Sizes outside the stocked range can be special ordered and may include an additional charge.",
    "Shirts are available at shows or by request.",
    "More merchandise is planned.",
  ],
  sizes: ["Small", "Medium", "Large", "XL", "2XL", "3XL"],
  styles: ["Front Logo Only", "Double Sided Shirt"],
};

export const sponsors = [
  {
    name: "Viking Bags",
    href: "https://www.vikingbags.com/pages/motorcycle-saddlebags",
    description: "Sponsor listed on the original Case44rocks.com sponsored-by page.",
  },
];

const galleryFiles = [
  "204fc2d6-untitled-design.png",
  "f7248d2a-case44-main.png",
  "341dfb4c-case44-banner.png",
  "1bdbd8c8-case44-lettered.png",
  "57b6fc78-copy-of-the-alley.png",
  "5588e776-img-3474.jpeg",
  "d7ed7914-case-44.jpeg",
  "71124c3e-img-3586.jpg",
  "4e1e852b-img-3819.jpeg",
  "0d318f88-dsc-0155.jpg",
  "59122351-dsc-0265.jpg",
  "7c661500-rob3.jpg",
  "392fc036-rob4.jpg",
  "570111da-rob5.jpg",
  "6098e36b-rob1.jpg",
  "c506c0a3-robtoon.jpg",
  "8bea6e4f-steve2.jpg",
  "5daf002b-steve4.jpg",
  "960d8631-steve5.jpg",
  "85471f36-mike1.jpeg",
  "f5c8ae05-mike2.jpeg",
  "805c84c1-mike3.jpeg",
  "33be1cc9-mike4.jpg",
  "736ee28b-mike5.jpg",
  "07534ba9-dsc-0277.jpg",
  "09414671-dsc-0352.jpg",
  "11a5c7bc-img-9281.jpg",
  "19d2afa8-dsc-0271.jpg",
  "1c35a497-img-5235.jpg",
  "1ca2eca8-img-4680.jpg",
  "20bd195e-img-4752.jpg",
  "2e820ccc-img-0293.jpg",
  "33455b3f-dsc-0028.jpg",
  "349f86fe-img-0565.jpg",
  "3ec3de32-img-5895.jpg",
  "3f074817-dsc-0143.jpg",
  "44b9ee55-img-1063.jpeg",
  "5430eae2-img-1194.jpg",
  "5899dbf9-img-0570.jpg",
  "5a5b7180-img-1350.jpg",
  "5dafc442-dsc-0052.jpg",
  "60947b6c-img-3821.jpeg",
  "62bc883e-img-0903.jpg",
  "64e16f0a-dsc-0202.jpg",
  "6521db66-img-1204.jpeg",
  "66e44dbe-img-2566.jpg",
  "69208687-img-1064.jpeg",
  "71329c2b-img-4410.jpg",
  "722e812e-img-3820.jpeg",
  "745db47d-img-3587.jpg",
  "80548ce7-dsc-0269.jpg",
  "819a9f37-dsc-0308.jpg",
  "8260cdea-dsc-0305.jpg",
  "8564eb42-img-4589.jpg",
  "929aa2a4-img-3822.jpeg",
  "93e3294d-dsc-0155.jpg",
  "97bc9ef1-dsc-0151.jpg",
  "9ea5823b-img-1173.jpeg",
  "a142be6b-img-1136.jpg",
  "a320b5c1-img-3823.jpeg",
  "a3233e0a-dsc-0131.jpg",
  "a85be5d5-img-0578.jpg",
  "aef6cf96-img-1178.jpeg",
  "b355f4ec-img-0577.jpg",
  "b4041c5d-img-3499.jpg",
  "b4c1f68a-dsc-0304.jpg",
  "b597fb10-img-1046.jpeg",
  "b5b8f7f8-dsc-0020.jpg",
  "c0a0d5cf-img-8466.jpg",
  "c2dba4b5-dsc-0145.jpg",
  "cc08c448-halloween-2019.jpg",
  "cfc4acd2-dsc-0265.jpg",
  "d0535e16-img-2445.jpeg",
  "d0e61cdd-dsc-0285.jpg",
  "d683970d-img-3121.jpg",
  "d791f3ac-img-3819.jpeg",
  "e2e062b2-img-3824.jpeg",
  "e7745ce6-img-8437.jpg",
  "e837f720-dsc-0058.jpg",
  "ec94cc58-dsc-0059.jpg",
  "eceb2139-img-0566.jpg",
  "edf02032-dsc-0134.jpg",
  "fb2ab224-dsc-0027.jpg",
];

function titleFromFile(file: string) {
  return file
    .replace(/^[a-f0-9]+-/, "")
    .replace(/\.(jpg|jpeg|png)$/i, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function categoryFromFile(file: string) {
  if (file.includes("case44") || file.includes("case-44") || file.includes("lettered") || file.includes("untitled-design")) {
    return "Brand";
  }
  if (file.includes("copy-of-the-alley") || file.includes("img-3474")) {
    return "Merch";
  }
  if (file.includes("rob")) {
    return "Robert";
  }
  if (file.includes("steve")) {
    return "Steve";
  }
  if (file.includes("mike")) {
    return "Mike";
  }
  return "Live Shots";
}

export const galleryImages: GalleryImage[] = galleryFiles.map((file) => ({
  src: `/images/case44/${file}`,
  title: titleFromFile(file),
  category: categoryFromFile(file),
}));

export function formatShowDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function upcomingShows(limit?: number) {
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const filtered = shows
    .filter((show) => show.date >= todayKey)
    .sort((a, b) => a.date.localeCompare(b.date));

  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export function pastShows(limit?: number) {
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const filtered = shows
    .filter((show) => show.date < todayKey)
    .sort((a, b) => b.date.localeCompare(a.date));

  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}
