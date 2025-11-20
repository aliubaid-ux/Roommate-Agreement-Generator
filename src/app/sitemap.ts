import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // Replace with your actual domain

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
    '/what-to-include'
  ].map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
  }));

  // In a real application, you would fetch these from a database or CMS
  const locations = [
    "New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Columbus", "Charlotte", "Indianapolis", "San Francisco", "Seattle", "Denver", "Boston", "Washington, D.C.", "Nashville", "Portland", "Baltimore", "Las Vegas", "Oklahoma City", "Milwaukee", "Minneapolis", "Atlanta", "Miami", "Kansas City",
    "London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Edinburgh", "Liverpool", "Bristol", "Nottingham", "Sheffield",
    "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Hamilton", "London (Ontario)", "Mississauga",
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast", "Hobart",
    "Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart",
    "Amsterdam", "Rotterdam", "Utrecht",
    "Paris", "Lyon", "Marseille",
    "Barcelona", "Madrid", "Valencia",
    "Dubai", "Abu Dhabi", "Sharjah", "Doha", "Riyadh", "Jeddah", "Kuwait City", "Muscat",
    "Bengaluru", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai", "Gurgaon", "Noida", "Kolkata", "Ahmedabad",
    "Singapore", "Kuala Lumpur", "Bangkok", "Tokyo", "Osaka", "Seoul", "Hong Kong"
  ].map(slugify).map((location) => ({
    url: `${baseUrl}/roommate-agreement/${location}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPages,
    ...locations,
  ];
}

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}
