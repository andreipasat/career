import FileUpload from "../Organisms/FileUpload";
import MyApplications from "../Organisms/MyApplications";
import RecommendedJobs from "../Organisms/RecommendedJobs";
import {Context} from "../../hooks/context"

import useAppStore from "../../hooks/store";

const Dashboard = (props) => {

    const appStore = useAppStore()
    // const setRecommendedJobsIdentifier = appStore.setRecommendedJobsIdentifier
    // const getRecommendedJobsIdentifier = appStore.getRecommendedJobsIdentifier

    return (
        <div>
            <Context.Provider value={{...appStore}}>
                <FileUpload />
                <div className=" mt-16"></div>
                <MyApplications />
                <div className=" mt-16"></div>
                <RecommendedJobs />    
            </Context.Provider>
        </div>
    )
}

export default Dashboard
