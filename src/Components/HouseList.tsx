import React from 'react'

interface ListProps {
  isDisabled: boolean
  houseList: Array<{
    lot: string
    color: string
  }>
}

const HouseList: React.FC<ListProps> = (props) => {
  const { isDisabled, houseList } = props
  console.log(houseList)
  return !isDisabled
    ? <div className="overflow-scroll max-h-96">
    {houseList.map((house, index) => {
      return (
            <div className="flex justify-center bg-red-400 py-1" key={index}>
            <div>
                <div className="text-3xl font-bacasime">
                <div>Lot# {house.lot}</div>
                <div>Paint: {house.color}</div>
                </div>
            </div>
            </div>
      )
    }
    )}
  </div>
    : <div></div>
}

export default HouseList
