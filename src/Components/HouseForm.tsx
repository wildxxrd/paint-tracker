import React from 'react'

const HouseForm: React.FC = () => {
  return (
    <div className='flex justify-center bg-blue-400'>
        <form className='py-5 text-3xl font-bacasime' action="">
            <label htmlFor="lot_number">Lot# </label>
            <input type="number" name="lot_number" id="lot_number" />
            &nbsp;&nbsp;
            <label htmlFor="paint_number">Paint: </label>
            <input type="text" name="paint_number" id="paint_number" />
            &nbsp;&nbsp;
            <input type="submit" value="Submit" />
        </form>

    </div>
  )
}

export default HouseForm
