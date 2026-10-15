import React, { useEffect } from 'react'
import { siteSeo } from '../../siteSeo'

interface SeoHeadProps {
  title?: string
  description?: string
  canonicalPath?: string
  noIndex?: boolean
  schemaType?: string
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  noIndex = false,
  schemaType = 'MovingCompany'
}) => {
  const finalTitle = title || siteSeo.routes[0].title
  const finalDescription = description || siteSeo.routes[0].description
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`
  const finalCanonical = `${siteSeo.baseUrl}${cleanPath === '/' ? '/' : cleanPath}`

  useEffect(() => {
    // 1. Title
    document.title = finalTitle

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', finalDescription)

    // 3. Meta robots
    let metaRobots = document.querySelector('meta[name="robots"]')
    if (!metaRobots) {
      metaRobots = document.createElement('meta')
      metaRobots.setAttribute('name', 'robots')
      document.head.appendChild(metaRobots)
    }
    metaRobots.setAttribute('content', noIndex ? 'noindex, follow' : 'index, follow')

    // 4. Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]')
    if (!linkCanonical) {
      linkCanonical = document.createElement('link')
      linkCanonical.setAttribute('rel', 'canonical')
      document.head.appendChild(linkCanonical)
    }
    linkCanonical.setAttribute('href', finalCanonical)

    // 5. Open Graph tags
    const setOgTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
      if (!ogTag) {
        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        document.head.appendChild(ogTag)
      }
      ogTag.setAttribute('content', content)
    }

    setOgTag('og:title', finalTitle)
    setOgTag('og:description', finalDescription)
    setOgTag('og:url', finalCanonical)
    setOgTag('og:type', 'website')

    // 6. Structured Data (JSON-LD)
    let schemaScript = document.getElementById('json-ld-schema')
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.id = 'json-ld-schema'
      schemaScript.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schemaScript)
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: siteSeo.businessName,
      legalName: siteSeo.legalName,
      url: finalCanonical,
      telephone: siteSeo.telephone,
      areaServed: {
        '@type': 'City',
        name: 'Visakhapatnam'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteSeo.address.addressLocality,
        addressRegion: siteSeo.address.addressRegion,
        addressCountry: siteSeo.address.addressCountry
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteSeo.geo.latitude,
        longitude: siteSeo.geo.longitude
      },
      priceRange: '₹₹'
    }

    schemaScript.textContent = JSON.stringify(jsonLd)
  }, [finalTitle, finalDescription, finalCanonical, noIndex, schemaType])

  return null
}
