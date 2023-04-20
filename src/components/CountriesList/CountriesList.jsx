import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries, setActiveRegion } from '../../store/features/setCountryName'

const CountriesList = () => {
  const dispatch = useDispatch()
  const activeRegion = useSelector((state) => state.countries.activeRegion)
  const countries = useSelector((state) => state.countries.data)
  console.log(activeRegion);
  console.log(countries);

  return (
    
    <div>
      <div className='countries_wrapper'>
        {
          countries.map(item => {
            
          })
        }
      </div>
    </div>
  )
}

export default CountriesList