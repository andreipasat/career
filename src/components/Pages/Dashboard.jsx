import FileUpload from "../Organisms/FileUpload";
import MyApplications from "../Organisms/MyApplications";
import RecommendedJobs from "../Organisms/RecommendedJobs";

const Dashboard = (props) => {
    return (
        <div>
            <FileUpload />
            <div className=" mt-16"></div>
            <MyApplications />
            <div className=" mt-16"></div>
            <RecommendedJobs />    
        </div>
    )
}

export default Dashboard
