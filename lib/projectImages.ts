export const projectImages = [
  "WhatsApp Image 2025-12-23 at 5.05.46 PM (1).jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.46 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.47 PM (1).jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.47 PM (2).jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.47 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.48 PM (2).jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.55 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.56 PM (2).jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.56 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.57 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.58 PM (1).jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.58 PM (2).jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.58 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.05.59 PM (1).jpeg",
  "WhatsApp Image 2025-12-23 at 5.06.08 PM (1).jpeg",
  "WhatsApp Image 2025-12-23 at 5.06.10 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.06.18 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.06.19 PM (2).jpeg",
  "WhatsApp Image 2025-12-23 at 5.06.22 PM.jpeg",
  "WhatsApp Image 2025-12-23 at 5.06.43 PM (2).jpeg",
  "WhatsApp Image 2025-12-23 at 5.06.50 PM (1).jpeg",
  "برجولات .jpeg",
  "بروجولات 3.jpeg",
  "بروجولات 33.jpeg",
  "بروجولات 343.jpeg",
  "بروجولات 34545.jpeg",
  "بروجولات 4567546754.jpeg",
  "بروجولات 7.jpeg",
  "بروجولات 8.jpeg",
  "بروجولات 8888.jpeg",
  "بروجولات 9867987.jpeg",
  "بروجولات 99.jpeg",
  "بيت سعر 456.jpeg",
  "بيت شعر  .jpeg",
  "بيت شعر .jpeg",
  "بيت شعر 1.jpeg",
  "بيت شعر 2.jpeg",
  "بيت شعر 3.jpeg",
  "بيت شعر 3434.jpeg",
  "بيت شعر 34ق.jpeg",
  "بيت شعر 35.jpeg",
  "بيت شعر 36546.jpeg",
  "بيت شعر 4.jpeg",
  "بيت شعر 4576.jpeg",
  "بيت شعر 5.jpeg",
  "بيت شعر 546456.jpeg",
  "بيت شعر 6.jpeg",
  "بيت شعر 657.jpeg",
  "بيت شعر 67575.jpeg",
  "بيت شعر 7.jpeg",
  "بيت شعر 8.jpeg",
  "بيت شعر.jpeg",
  "بيت شعر3.jpeg",
  "بيت شعر45675467.jpeg",
  "سوااتر.jpeg",
  "سواتر .jpeg",
  "سواتر 097.jpeg",
  "سواتر 2343.jpeg",
  "سواتر 3.jpeg",
  "سواتر 32532452.jpeg",
  "سواتر 34234.jpeg",
  "سواتر 343.jpeg",
  "سواتر 7.jpeg",
  "سواتر 778.jpeg",
  "سواتر 899.jpeg",
  "سواتر 908098.jpeg",
  "سواتر 9087987.jpeg",
  "سواتر5656.jpeg",
  "قرميد.jpeg",
  "قرميد1.jpeg",
  "قرميد89.jpeg",
  "قرميد99.jpeg",
  "مظلات سيارات .jpeg",
  "مظلات سيارات 1.jpeg",
  "مظلات سيارات 3.jpeg",
  "مظلات سيارات 34.jpeg",
  "مظلات سيارات 342345.jpeg",
  "مظلات سيارات 3434.jpeg",
  "مظلات سيارات 346.jpeg",
  "مظلات سيارات 35.jpeg",
  "مظلات سيارات 4.jpeg",
  "مظلات سيارات 45 (2).jpeg",
  "مظلات سيارات 45.jpeg",
  "مظلات سيارات 45645634.jpeg",
  "مظلات سيارات 4575.jpeg",
  "مظلات سيارات 567.jpeg",
  "مظلات سيارات 77777.jpeg",
  "مظلات سيارات 867.jpeg",
  "مظلات سيارات 867867986.jpeg",
  "مظلات سيارات 888.jpeg",
  "مظلات سيارات 999.jpeg",
  "مظلات سيارات.jpeg",
  "مظلات سيارات57.jpeg"
];

export type CategoryKey = 'cars' | 'pergola' | 'screens' | 'tiles' | 'tents' | 'other';

export const getCategoryFromFilename = (filename: string): CategoryKey => {
  const name = filename.toLowerCase();
  if (name.includes('مظلات') || name.includes('سيارات')) return 'cars';
  if (name.includes('برجولات') || name.includes('بروجولات')) return 'pergola';
  if (name.includes('سواتر') || name.includes('سوااتر')) return 'screens';
  if (name.includes('قرميد')) return 'tiles';
  if (name.includes('بيت شعر') || name.includes('خيام') || name.includes('بيت سعر')) return 'tents';
  return 'other'; // For the generic "WhatsApp Image" ones if they don't match specific logic, or treat as random
};

export const getImagesByCategory = (category: CategoryKey): string[] => {
  return projectImages.filter(img => {
    const imgCat = getCategoryFromFilename(img);
    // If asking for 'other' or a specific category, match it.
    // NOTE: The "WhatsApp Image..." files might be mixed. 
    // For now we'll put the "WhatsApp" files in 'cars' or 'screens' randomly 
    // OR we can default "WhatsApp" files to 'other' and include them in "all".
    // Let's assume the explicit named files go to their categories.
    return imgCat === category;
  }).map(img => encodeURI("/" + img));
};

export const getProjectImageByCategory = (category: CategoryKey, index: number = 0): string => {
  const images = getImagesByCategory(category);
  // Fallback to all images if specific category empty
  if (images.length === 0) return encodeURI("/" + projectImages[index % projectImages.length]);
  return images[index % images.length];
};

// Keep for compatibility but updated to be cleaner
export const getProjectImage = (index: number): string => {
  return encodeURI("/" + projectImages[index % projectImages.length]);
};
