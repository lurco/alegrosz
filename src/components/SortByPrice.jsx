import {useState} from "react";

function SortByPrice() {
    const [value, setValue] = useState('ascending');

    function handleSelect(event){
        setValue(event.target.value);
    }

    return (
        <div>
            <label htmlFor="sortByPrice">Sortowanie po cenie</label>
            <select id="sortByPrice" value={value} onChange={handleSelect}>
                <option value="">---</option>
                <option value="ascending">rosnąco</option>
                <option value="descending">malejąco</option>
            </select>
        </div>
    );
}

export default SortByPrice;