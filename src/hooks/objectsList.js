import { useState } from "react"

const useObjectsList = (initList) => {
    const [list, setList] = useState(initList)

    const placeList = (values) => {
        setList(values)
    }
    
    return {list, placeList}
}

export default useObjectsList