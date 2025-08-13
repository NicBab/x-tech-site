import { MetadataRoute } from 'next';
import { Sec1CardInfo } from '@/constants/sec1';
import { Sec2CardInfo } from '@/constants/sec2';
import { Sec3CardInfo } from '@/constants/sec3';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xtechnology-usa.com';
  
  const staticRoutes = [
    '',
    '/aboutpg',
    '/servicespg',
    '/contactpg',
    '/careers',
    '/our-team',
    '/history',
    '/eventspg',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const industryRoutes = Sec1CardInfo.map((industry) => ({
    url: `${baseUrl}${industry.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceRoutes = Sec2CardInfo.map((service) => ({
    url: `${baseUrl}/service/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const extendServiceRoutes = Sec3CardInfo.map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...industryRoutes, ...serviceRoutes, ...extendServiceRoutes];
}
