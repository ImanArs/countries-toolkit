import React, { useState } from 'react'
import { fetchCountries, setActiveRegion } from '../../store/features/setCountryName';
import { useDispatch } from 'react-redux';
import styles from './header.module.scss'

const Header = () => {
    const [active, setActive] = useState('asia')
    console.log(active);
    const url = `https://restcountries.com/v3.1/region/${active}`

    const dispatch = useDispatch()
    const handleClick = (region) => {
        dispatch(setActiveRegion(region))
        dispatch(fetchCountries(region))
    }

  return (
    <header className={styles.header}>
        <button onClick={() => handleClick('asia')} >Asia</button>
        <button onClick={() => handleClick('europe')}>Europe</button>
        <button onClick={() => handleClick('africa')}>Africa</button>
        <button onClick={() => handleClick('america')}>America</button>
    </header>
  )
}

export default Header