import { createClient, groq } from 'next-sanity'

export async function getHeroSection() {
  const client = createClient({
    projectId: 'aknaujo3',
    dataset: 'production',
    apiVersion: '2023-08-30',
    useCdn: false,
  })

  client.fetch(groq`*[_type == "hero"]{
        title,
        brandHighlight,
        subtitle,
        "image": image.asset->url
    }`)
}

export async function getTestSection() {
  const client = createClient({
    projectId: 'aknaujo3',
    dataset: 'production',
    apiVersion: '2023-08-30',
    useCdn: false,
  })

  client.fetch(groq`*[_type == "test"]{
        title
    }`)
}
