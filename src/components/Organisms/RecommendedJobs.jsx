import AppButton from "../Atoms/AppButton";
import { useEffect, useContext } from "react"
import http from "../../hooks/http";
import useFetchList from "../../hooks/fetchList";
import { Context } from "../../hooks/context";
import AppLoader from "../Atoms/AppLoader";

const RecommendedJobs = (props) => {

    const {getRecommendedJobsIdentifier} = useContext(Context)
    const identifier = getRecommendedJobsIdentifier()
    console.log(identifier);
    
    const jobsList = useFetchList(`http://18.217.126.4:8000/classification/?identifier=${identifier}`)

    useEffect(() => {
        jobsList.fetchList()
    }, [identifier])

    const dismissJob = (id) => {
        jobsList.removeFromList(id)
    }
    
    return (
        <div>
            <div className="flex justify-between align-middle py-5 font-semibold">
                <div>
                    <h1 className="text-neutral text-xl">Jobs you may be interested in</h1>
                </div>
                <div className="mt-1">
                    <AppButton>More jobs</AppButton>
                </div>
            </div>
            { jobsList.loading
                ? <div><AppLoader /></div>
                : <ul role="list" className="grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    
                    {jobsList.list.slice(0, 4).map((job,idx) => {
                        return (
                            <li key={job.title + idx} className="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-264 min-h-264">
                                <div>
                                    <div className="space-y-5 w-full h-36">
                                        <div className="w-full flex justify-between space-x-6">
                                            {job.imgSrc 
                                                ? <img className="w-10 h-10 bg-gray-300 rounded flex-shrink-0" src={job.imgSrc} alt=""/>
                                                : 
                                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="42" height="42" rx="21" fill="#EFF2F9"/>
                                                        <mask id="mask0_201_3544" maskUnits="userSpaceOnUse" x="11" y="11" width="20" height="20">
                                                            <rect x="11" y="11" width="20" height="20" fill="#C4C4C4"/>
                                                        </mask>
                                                        <g mask="url(#mask0_201_3544)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.3335 16.8334C19.3335 16.3731 19.7066 16 20.1668 16H21.8335C22.2937 16 22.6668 16.3731 22.6668 16.8334V17.6667H19.3335V16.8334ZM17.6668 17.6667H15.3335C14.7812 17.6667 14.3335 18.1144 14.3335 18.6667V26.6667C14.3335 27.219 14.7812 27.6667 15.3335 27.6667H26.6668C27.2191 27.6667 27.6668 27.219 27.6668 26.6667V18.6667C27.6668 18.1144 27.2191 17.6667 26.6668 17.6667H24.3335V16.8334C24.3335 15.4527 23.2142 14.3334 21.8335 14.3334H20.1668C18.7861 14.3334 17.6668 15.4527 17.6668 16.8334V17.6667Z" fill="#9FA6BB"/>
                                                        </g>
                                                    </svg>
                                            }
            
                                            <a href="#">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z" fill="#B0B0B0"/>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="space-y-1">
                                            <h1 className="text-neutral font-sans text-lg">{job.title.substring(0, 20)} {job.title.length >= 20 && '...'}</h1>
                                            {job.companyName !== 'NaN' && <h2 className="text-gray-3 font-sans text-sm">{job.companyName}</h2>}
                                        </div>
                                    </div>

                                    <div className="space-y-5 w-full">
                                        <div className="flex space-x-1">
                                            <div className="flex justify-center basis-1/7">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.00008 4.66664C9.41457 4.66664 10.7711 5.22854 11.7713 6.22874C12.7715 7.22893 13.3334 8.58549 13.3334 9.99997C13.3334 11.4145 12.7715 12.771 11.7713 13.7712C10.7711 14.7714 9.41457 15.3333 8.00008 15.3333C6.58559 15.3333 5.22904 14.7714 4.22885 13.7712C3.22865 12.771 2.66675 11.4145 2.66675 9.99997C2.66675 8.58549 3.22865 7.22893 4.22885 6.22874C5.22904 5.22854 6.58559 4.66664 8.00008 4.66664ZM8.00008 5.99997C6.93922 5.99997 5.9218 6.4214 5.17165 7.17155C4.42151 7.92169 4.00008 8.93911 4.00008 9.99997C4.00008 11.0608 4.42151 12.0783 5.17165 12.8284C5.9218 13.5785 6.93922 14 8.00008 14C9.06095 14 10.0784 13.5785 10.8285 12.8284C11.5787 12.0783 12.0001 11.0608 12.0001 9.99997C12.0001 8.93911 11.5787 7.92169 10.8285 7.17155C10.0784 6.4214 9.06095 5.99997 8.00008 5.99997ZM8.00008 6.99997L8.88208 8.78664L10.8534 9.07331L9.42675 10.4633L9.76341 12.4273L8.00008 11.5L6.23675 12.4266L6.57341 10.4633L5.14675 9.07264L7.11808 8.78597L8.00008 6.99997ZM12.0001 1.33331V3.33331L11.0914 4.09197C10.3374 3.69636 9.51412 3.44986 8.66675 3.36597V1.33331H12.0001ZM7.33341 1.33264V3.36597C6.48631 3.44974 5.6633 3.69601 4.90941 4.09131L4.00008 3.33331V1.33331L7.33341 1.33264Z" fill="#207544"/>
                                                </svg>
                                            </div>
                                            { job.greatFit && <div className="basis-10/12"><span className="text-green font-sans text-xs">Great fit</span></div> }
                                        </div>
                
                                        <div className="flex justify-between">
                                            <div>
                                                <a onClick={(e) => {e.preventDefault();dismissJob(job.id)}} href="#">
                                                    <span className="font-semibold font-sans text-gray-0 text-sm">Dismiss</span>
                                                </a>
                                            </div>
                                            <div className="basis-1/2 flex justify-end">
                                                <a href="#">
                                                    <span className="text-sm font-semibold font-sans text-indigo">Learn more</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default RecommendedJobs
