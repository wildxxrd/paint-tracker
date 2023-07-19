/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { firestore } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import '../globalStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
interface House {
  lot: string
  color: string
  location: string
}

async function addDocument (house: House): Promise<void> {
  try {
    const docRef = await addDoc(collection(firestore, 'Houses'), house)
  } catch (error) {
    console.error('Error adding document:', error)
  }
}

const HouseForm: React.FC = () => {
  const [lotNumer, setLotNumber] = useState<string>('')
  const [paint, setPaint] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const house: House = {
      lot: lotNumer,
      color: paint,
      location
    }
    void addDocument(house)
    setLotNumber('')
    setPaint('')
    setLocation('')
  }
  return (
    <div>
      <div className="flex flex-glow justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <form
        className="grid py-10 my-10 text-2xl font-bacasime"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          size={25}
          style={{ height: '50px' }}
          type="text"
          name="lot_number"
          placeholder='Lot#'
          id="lot_number"
          value={lotNumer}
          onChange={(e) => {
            setLotNumber(e.target.value)
          }}
        />
        &nbsp;&nbsp;
        <input
          size={25}
          style={{ height: '50px' }}
          type="text"
          name="paint_number"
          id="paint_number"
          placeholder='Paint'
          value={paint}
          onChange={(e) => {
            setPaint(e.target.value)
          }}
        />
        &nbsp;&nbsp;
        <input
          size={25}
          style={{ height: '50px' }}
          type="text"
          name="house_location"
          placeholder='Location'
          id="house_location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value)
          }
          }
        />
        &nbsp;&nbsp;
        <button type="submit" className='py-6'>
        <FontAwesomeIcon color='white' size='4x' icon={faPlusCircle} />
        </button>
      </form>
    </div>
    </div>
  )
}

export default HouseForm
