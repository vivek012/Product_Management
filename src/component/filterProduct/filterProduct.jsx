let FilterProduct = (props)=> {

function onFilterValueChanged(event){
    
    props.onFilterValueSelected(event.target.value)

}
    return (
        <div className="w-[100%] bg-white px-5 py-2  rounded-2xl">
            <select  onChange={onFilterValueChanged} name="isAvailable"  className="border-1 rounded-2xl p-1.5">
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
        </div>
    )
}

export default FilterProduct;