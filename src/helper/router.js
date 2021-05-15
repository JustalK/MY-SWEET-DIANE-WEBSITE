import { useRouter } from 'next/router'

export const getCanonicalUrl = () => {
  const site = process.env.NEXT_PUBLIC_WEBSITE_URL
  return site + useRouter().asPath
}
