'use client'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const LivePreviewListener: React.FC = () => {
  const router = useRouter()
  const url = typeof window !== 'undefined' ? window.location.origin : ''

  return <PayloadLivePreview refresh={router.refresh} serverURL={url} />
}