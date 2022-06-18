import { standard } from '../TimelineCell/TimelineCell.mock'

import TimelineCard from './TimelineCard'

const One = () => {
  return <TimelineCard data={standard().statuses[0]} />
}

export const generated = () => (
  <>
    <One />
    <One />
  </>
)

export default { title: 'Components/TimelineCard' }
