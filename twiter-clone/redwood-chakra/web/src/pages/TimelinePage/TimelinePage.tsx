import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TimelinePage = () => {
  return (
    <>
      <MetaTags title="Timeline" description="Timeline page" />

      <TimelineCell />
    </>
  )
}

export default TimelinePage
