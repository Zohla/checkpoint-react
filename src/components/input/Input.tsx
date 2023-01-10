
type InputProps = {
    labelText: string;
    type: string;
    id: string;
    value: string;
    setValue:(value:string)=>void;
}

const Input =({labelText,type,id,setValue}:InputProps)=>{
    return(
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} name={id} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}
export default Input;