import React from 'react'
import { Gifts } from '../helpers/data.js'

export const ListGifts = () => {
  
  return (
    <ul>
    {
        Gifts.map((item) => { 
        return (
            <li key={item.id}>{item.name}</li>
        )})
    }
    </ul>)
}
