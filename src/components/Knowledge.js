/* eslint-disable react/no-unescaped-entities */
import React, { Suspense } from 'react'
import BaseLayout from './BaseLayout'
import { getContentSection, getHeaderContent } from '@/sanity/sanity-utils'
import KnowledgeDetail from './KnowledgeDetail'

export default async function Knowledge({ ref }) {
  const headerContent = await getHeaderContent()
  const contents = await getContentSection()

  return (
    <BaseLayout>
      <KnowledgeDetail headerContent={headerContent[0]} contents={contents} />
    </BaseLayout>
  )
}
