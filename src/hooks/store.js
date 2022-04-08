import { useState } from "react"
const useAppStore = () => {
    const [jobsIdentifier, setJobsIdentifier] = useState(1)
    const setRecommendedJobsIdentifier = (identifier) => {
        setJobsIdentifier(identifier)
    }
    const getRecommendedJobsIdentifier = () => {
        return jobsIdentifier
    }
    return {setRecommendedJobsIdentifier, getRecommendedJobsIdentifier}
}

export default useAppStore