import { standard } from '../AccountShowCell/AccountShowCell.mock'

import AccountCard from './AccountCard'

export const generated = () => {
  return <AccountCard data={standard().account} />
}

export default {}
