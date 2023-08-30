import { createClient, groq } from 'next-sanity'

export async function getHeroSection() {
  const client = createClient({
    projectId: 'aknaujo3',
    dataset: 'production',
    apiVersion: '2023-08-30',
    useCdn: false,
  })

  const res = await client.fetch(groq`*[_type == "hero"]{
        title,
        brandHighlight,
        subtitle,
        "image": image.asset->url
    }`)

  return res
}

export async function getHeaderContent() {
  const client = createClient({
    projectId: 'aknaujo3',
    dataset: 'production',
    apiVersion: '2023-08-30',
    useCdn: false,
  })
  const res = await client.fetch(groq`*[_type == "content-header"]{
        title,
        content
    }`)

  return res
}

export async function getContentSection() {
  const client = createClient({
    projectId: 'aknaujo3',
    dataset: 'production',
    apiVersion: '2023-08-30',
    useCdn: false,
  })
  const res = await client.fetch(groq`*[_type == "content"]{
        title,
        content,
        "image": image.asset->url
    }`)
  return res
}

export async function getProductSection() {
  const client = createClient({
    projectId: 'aknaujo3',
    dataset: 'production',
    apiVersion: '2023-08-30',
    useCdn: false,
  })

  const res = await client.fetch(groq`*[_type == "product"]{
        product_name,
        size,
        "image": image.asset->url
    }`)

  return res
}

export async function getMarketplaceSection() {
  const client = createClient({
    projectId: 'aknaujo3',
    dataset: 'production',
    apiVersion: '2023-08-30',
    useCdn: false,
  })

  const res = await client.fetch(groq`*[_type == "marketplace"]{
        marketplace_name,
        marketplace_url,
        "logo": marketplace_logo.asset->url

    }`)

  return res
}
