import React, { Suspense } from 'react'
import styled from 'styled-components'

const LazyDetail = React.lazy(() => import('./Detail'))

const Load = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const SuspenseDetail = () => (
  <Suspense fallback={<Load>正在加载...</Load>}>
    <LazyDetail />
  </Suspense>
)

export default SuspenseDetail
