import {useState} from 'react';
function Filter() {
     let [selectorValue, setSelectorValue] = useState('all');
    return(<>
            <select
            value={selectorValue}
            onChange={e => {
                setSelectorValue(e.target.value);
            }}
            >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="all">all</option>
            </select>
    </>);
}

export default Filter