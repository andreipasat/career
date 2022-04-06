import { useState } from "react"
const useDropdown = (initValue, options) => {
    const [value, setValue] = useState(initValue)
    const onChange = (item) => {
        setValue(item)    
    }

    return {value, onChange, options}

}

export default useDropdown