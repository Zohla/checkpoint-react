

type SelectProps = {
    value: string;
    options: string[];
    setValue: (value: string) => void;
}

const Select =({value,options,setValue}:SelectProps)=>{
    return(
        <div>
            <label htmlFor="color">Choose a team:</label>
            <select id="color" name="color" value={value} onChange={(e) => setValue(e.target.value)}>
            {options.map((option,index) => {
          return (
              <option value={option} key={index}>{option}</option>
          );
        })}
            </select>
        </div>
    )
}
export default Select;