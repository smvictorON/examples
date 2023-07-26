import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

export default function Autocomplete(props) {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([])

  useEffect(() => {
    if (!searchText)
      return setList([])

    const timer = setTimeout(() => {
      document.getElementById('control').classList.add('is-loading')
      fetchData(searchText)
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const fetchData = async (text) => {
    const result = await axios.get(ITEMS_API_URL, {
      params: {
        q: text
      }
    })

    setList(result.data)
    document.getElementById('control').classList.remove('is-loading')
  }

  return (
    <div className="wrapper">
      <div className="control" id="control">
        <input type="text" className="input" value={searchText} onChange={handleSearchTextChange} />
      </div>
      {list.length > 0 &&
        <div className="list is-hoverable">
          {list.length > 0 && list.map((item, index) => (
            <a className="list-item" onClick={() => props.onSelectItem(item)} key={index}>
              {item}
            </a>
          ))}
        </div>
      }
    </div>
  );
}

