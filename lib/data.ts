import { addDays, format, isWeekend } from 'date-fns';
import type { Creator } from './types';

function generateAvailability(days = 14): Record<string, string[]> {
  const slots: Record<string, string[]> = {};
  for (let i = 0; i < days; i++) {
    const d = addDays(new Date(), i);
    const key = format(d, 'yyyy-MM-dd');
    if (isWeekend(d)) {
      slots[key] = ['11:00', '15:00'];
    } else {
      slots[key] = ['10:00', '14:00', '18:00'];
    }
  }
  return slots;
}

export const creators: Creator[] = [
  {
    id: 'aiko-streams',
    name: 'Aiko Streams',
    avatarUrl: 'https://i.pravatar.cc/200?img=5',
    platforms: ['YouTube', 'Twitch'],
    categories: ['Gaming', 'Tech'],
    ratePerPost: 1200,
    location: 'Tokyo, JP',
    bio: 'Variety streamer and tech enthusiast. Collaborations, reviews, and sponsored streams.',
    socials: [
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'Twitch', url: 'https://twitch.tv' },
    ],
    availability: generateAvailability(),
  },
  {
    id: 'marco-fitness',
    name: 'Marco Fit',
    avatarUrl: 'https://i.pravatar.cc/200?img=12',
    platforms: ['Instagram', 'TikTok'],
    categories: ['Fitness', 'Lifestyle'],
    ratePerPost: 800,
    location: 'Barcelona, ES',
    bio: 'Fitness coach creating short-form workout and wellness content.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'TikTok', url: 'https://tiktok.com' },
    ],
    availability: generateAvailability(),
  },
  {
    id: 'nina-beauty',
    name: 'Nina Beauty',
    avatarUrl: 'https://i.pravatar.cc/200?img=31',
    platforms: ['YouTube', 'Instagram'],
    categories: ['Beauty', 'Skincare'],
    ratePerPost: 1500,
    location: 'Los Angeles, US',
    bio: 'Makeup artist sharing tutorials and product reviews. Open to brand collabs.',
    socials: [
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'Instagram', url: 'https://instagram.com' },
    ],
    availability: generateAvailability(),
  },
  {
    id: 'leo-dev',
    name: 'Leo Dev',
    avatarUrl: 'https://i.pravatar.cc/200?img=23',
    platforms: ['YouTube', 'X'],
    categories: ['Programming', 'AI'],
    ratePerPost: 2000,
    location: 'Berlin, DE',
    bio: 'Software engineer making tutorials and deep dives on AI and web dev.',
    socials: [
      { platform: 'YouTube', url: 'https://youtube.com' },
      { platform: 'X', url: 'https://x.com' },
    ],
    availability: generateAvailability(),
  },
  {
    id: 'sara-food',
    name: 'Sara Cooks',
    avatarUrl: 'https://i.pravatar.cc/200?img=47',
    platforms: ['Instagram', 'TikTok'],
    categories: ['Food', 'Travel'],
    ratePerPost: 700,
    location: 'Lisbon, PT',
    bio: 'Home-cook turned creator. Recipe shorts and food trips.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
      { platform: 'TikTok', url: 'https://tiktok.com' },
    ],
    availability: generateAvailability(),
  },
  {
    id: 'dion-fashion',
    name: 'Dion Styles',
    avatarUrl: 'https://i.pravatar.cc/200?img=52',
    platforms: ['Instagram'],
    categories: ['Fashion'],
    ratePerPost: 1100,
    location: 'New York, US',
    bio: 'Streetwear looks and styling tips. Open to sponsored posts and events.',
    socials: [
      { platform: 'Instagram', url: 'https://instagram.com' },
    ],
    availability: generateAvailability(),
  },
];
