'use client'

import React, {  useState } from 'react';
import ArenaBanner from './ArenaBanner';

const Arena = ({data}) => {
  const [search, setSearch] = useState('ALL');
  const [location, setLocation] = useState('ALL');
  const [sportType, setSportType] = useState('ALL');
  const [priceRange, setPriceRange] = useState('ALL');
  const all_location=[
    ...new Set(
        data.map(res=>res.location)
    )
  ]
   const all_type=[
    ...new Set(
        data.map(res=>res.type)
    )
   ]
   console.log(all_type);
    return (
        <div>
            <ArenaBanner alltype={all_type} allloc={all_location} setLocation={setLocation} setSportType={setSportType} setSearch={setSearch}></ArenaBanner>
        </div>
    );
};

export default Arena;