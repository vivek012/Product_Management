


function Button(props) {
 return (
    <>
     <button disabled={props.disable} onClick={props.onClickEvent} className="bg-blue-600 mx-5 px-5 py-1.5 rounded-sm text-white  font-bold text-2xl">
        {props.children}</button>
    </>
 )    
}
export default Button; 