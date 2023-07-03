import React, { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs } from 'firebase/firestore'
// interface House {
//   houseList: Array<{
//     lot: string
//     color: string
//   }>
// }
// const houseList: object[] = []

interface House {
  id: string
  lot: string
  color: string
}
const HouseList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [houseList, setHouseList] = useState<object[]>([])
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

  return (
    <div>
      {house.map(item => (
        <p key={item.id}>Lot#: {item.lot + ', House Color: ' + item.color}</p>
      ))}
    </div>
  )
}

export default HouseList
