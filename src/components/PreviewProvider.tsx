import { LiveQueryProvider } from 'next-sanity/preview'
import { useMemo } from 'react'

import { getClient } from '~/lib/sanity.client'

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) {
  const client = useMemo(() => getClient({ token }), [token])
  return (
    // @ts-ignore
    <LiveQueryProvider client={client} logger={console}>
      {children}
    </LiveQueryProvider>
  )
}
