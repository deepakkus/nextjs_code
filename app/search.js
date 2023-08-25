'use client'


import { useRouter } from 'next/navigation';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display:'flex'}}>
                <input type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search" 
                style={{padding:'3px 5px 3px 5px',fontSize:15,borderRadius:5,border:'1px slod #fff'}} />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} style={{padding:5,borderRadius:6,border:'1px slod #fff',fontSize:15}} /></button>
            </form>
        </div>
    );
}

export default Search;
