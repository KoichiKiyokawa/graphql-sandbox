import { MetaTags } from '@redwoodjs/web'

import TimelineCell from 'src/components/Status/TimelineCell'

const TimelinePage = () => {
  return (
    <>
      <MetaTags title="Timeline" description="Timeline page" />

      <TimelineCell />
    </>
  )
}

export default TimelinePage
