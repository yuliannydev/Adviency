import React from 'react'
import { Gifts } from '../helpers/data'

export const ListGifts = () => {
  return (
  <ul>
    { Gifts.map( item => ( <li key={item.id}> {item.gift} </li> )) }
  </ul>
  )
}
