import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import '../globalStyles.css'
import { collection, getFirestore, deleteDoc, getDocs, doc } from 'firebase/firestore'

interface House {
  id: string
  lot: string
  color: string
  location: string
}
const HouseList: React.FC = () => {
  const [house, setHouse] = useState<House[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const firestore = getFirestore()
        const collectionRef = collection(firestore, 'Houses')
        const snapshot = await getDocs(collectionRef)
        const fetchedData = snapshot.docs.map((doc: { id: any, data: () => any }) => ({
          id: doc.id,
          ...doc.data()
        })) as House[]

        // Filter out duplicates based on a unique identifier (e.g., 'id' field)
        const filteredData = fetchedData.filter((item, index, self) =>
          self.findIndex(i => i.id === item.id) === index
        )

        setHouse(filteredData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData()
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function deleteItem (itemId: string) {
    try {
      const firestore = getFirestore()
      const itemRef = doc(firestore, 'Houses', itemId)
      await deleteDoc(itemRef)

      // Update the local state or perform any necessary actions after deletion
      const updatedData = house.filter(item => item.id !== itemId)
      setHouse(updatedData)
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  return (
    <div className=' flex justify-center bg-blue-400 '>
      <ul>
        <li><h1 className='text-4xl font-bacasime border-b-2 px-3 py-2'>List of Houses</h1></li>
      {house.map(item => (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        item.location === undefined
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          ? <li key={item.id} className='text-2xl bg-[#5A96E3] text-[#FFF6F4] px-3 py-4 my-4 border-b-2' >Lot#: {item.lot + ', House Color: ' + item.color + '   '}<FontAwesomeIcon className='cursor-pointer' color='red' icon={faTrash} onClick={async () => { await deleteItem(item.id) }} /> </li>
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          : <li key={item.id} className='text-2xl bg-[#5A96E3] text-[#FFF6F4] px-3 py-4 my-4 border-b-2' >Lot#: {item.lot + ', House Color: ' + item.color + ', ' + 'Location: ' + item.location + '   '}<FontAwesomeIcon className='cursor-pointer' color='red' icon={faTrash} onClick={async () => { await deleteItem(item.id) }} /> </li>
      ))}
      </ul>
    </div>
  )
}

export default HouseList
