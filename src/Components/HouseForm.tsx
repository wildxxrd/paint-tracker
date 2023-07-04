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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const house: House = {
      lot: lotNumer,
      color: paint
    }
    void addDocument(house)
    setLotNumber('')
    setPaint('')
  }
  return (
    <div>
      <div className="flex justify-center bg-blue-400">
      <form
        className=" py-5 text-2xl font-bacasime"
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="lot_number">Lot# </label>
        <input
        size={10}
          type="text"
          name="lot_number"
          id="lot_number"
          value={lotNumer}
          onChange={(e) => {
            setLotNumber(e.target.value)
          }}
        />
        &nbsp;&nbsp;
        <label htmlFor="paint_number">Paint: </label>
        <input
        size={10}
          type="text"
          name="paint_number"
          id="paint_number"
          value={paint}
          onChange={(e) => {
            setPaint(e.target.value)
          }}
        />
        &nbsp;&nbsp;
        <button type="submit">
        <FontAwesomeIcon size='xl' icon={faPlusCircle} />
        </button>
      </form>
    </div>
    </div>
  )
}

export default HouseForm
