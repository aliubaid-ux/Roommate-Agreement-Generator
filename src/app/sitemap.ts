
import { MetadataRoute } from 'next';
import { slugify } from '@/lib/utils';

const BASE_URL = 'https://roommateready.com'; // Replace with your actual domain

// List of static pages
const staticPages = [
  '/',
  '/about',
  '/blog',
  '/faq',
  '/how-it-works',
  '/legal-disclaimer',
  '/locations',
  '/privacy',
  '/sample-roommate-agreement',
  '/templates',
  '/terms-of-service',
  '/what-to-include',
];

// List of all locations for dynamic sitemap entries
const locations = [
    // USA
    "New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Columbus", "Charlotte", "Indianapolis", "San Francisco", "Seattle", "Denver", "Boston", "Washington, D.C.", "Nashville", "Portland", "Baltimore", "Las Vegas", "Oklahoma City", "Milwaukee", "Minneapolis", "Atlanta", "Miami", "Kansas City",
    // UK
    "London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Edinburgh", "Liverpool", "Bristol", "Nottingham", "Sheffield",
    // Canada
    "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Hamilton", "London (Ontario)", "Mississauga",
    // Australia
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast", "Hobart",
    // Europe
    "Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Amsterdam", "Rotterdam", "Utrecht", "Paris", "Lyon", "Marseille", "Barcelona", "Madrid", "Valencia",
    // Middle East
    "Dubai", "Abu Dhabi", "Sharjah", "Doha", "Riyadh", "Jeddah", "Kuwait City", "Muscat",
    // India
    "Bengaluru", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai", "Gurgaon", "Noida", "Kolkata", "Ahmedabad",
    // Asia
    "Singapore", "Kuala Lumpur", "Bangkok", "Tokyo", "Osaka", "Seoul", "Hong Kong"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const locationUrls = locations.map((location) => ({
    url: `${BASE_URL}/roommate-agreement/${slugify(location)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...locationUrls];
}
