import React from 'react'
import { Gifts } from '../helpers/data'

export const ListGift = () => {
  return (
    <ul>
        {
            Gifts.map( item => 
                (<li key={item.id}>{item.item}</li>)
                )
        }
    </ul>
  )
}
