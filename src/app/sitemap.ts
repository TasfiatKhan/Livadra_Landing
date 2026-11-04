import type { MetadataRoute } from 'next'
import { SITE_URL, PRIVACY_POLICY_PATH, ACCOUNT_DELETION_PATH } from '@/config/links'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}${PRIVACY_POLICY_PATH}`,
      lastModified: new Date('2026-11-04'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}${ACCOUNT_DELETION_PATH}`,
      lastModified: new Date('2026-11-04'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
