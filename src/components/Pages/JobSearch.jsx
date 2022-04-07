import AppDropdown from "../Atoms/AppDropdown";

import useDropdown from "../../hooks/dropdown";
import useObjectsList from "../../hooks/objectsList";

const JobsSearch = () => {

    const addressOptions = [
        {val: 'md', name: 'Republic of Moldova'},
        {val: 'jupiter', name: 'Jupiter'},
    ]

    const salaryOptions = [
        {val: null, name: 'All salaries'},
        {val: 100000, name: '100000'},
        {val: 200000, name: '200000'},
        {val: 300000, name: '300000'},
        {val: 500000, name: '500000'},
    ]

    const postedTimeOptions = [
        {val: null, name: 'Posted any time'},
        {val: '30d', name: 'Within 30 days'},
        {val: '10d', name: 'Within 10 days'},
        {val: '5d', name: 'Within 5 days'},
        {val: '1d', name: 'Within 1 day'},
    ]

    const boardsOptions = [
        {val: null, name: 'All boards'},
        {val: 'zip', name: 'ZipRecruiter'},
        {val: 'indeed', name: 'Indeed'},
    ]

    const addressDropdown = useDropdown(addressOptions[0], addressOptions)
    const salaryDropdown = useDropdown(salaryOptions[0], salaryOptions)
    const postTimeDropdown = useDropdown(postedTimeOptions[0], postedTimeOptions)
    const boardsDropdown = useDropdown(boardsOptions[0], boardsOptions)

    const jobsList = [
        {
            title: 'Project manager', 
            description : 'Do quis non officia laborum commodo. Ea incididunt nostrud excepteur elit ea ea ad occaecat tempor velit nulla sit cillum est. Nostrud exercitation elit ut mollit aute proident.'
        },
        {
            title: 'Fullstack developer', 
            description : 'Do quis non officia laborum commodo. Ea incididunt nostrud excepteur elit ea ea ad occaecat tempor velit nulla sit cillum est. Nostrud exercitation elit ut mollit aute proident.'
        },
        {
            title: 'Backend developer', 
            description : 'Do quis non officia laborum commodo. Ea incididunt nostrud excepteur elit ea ea ad occaecat tempor velit nulla sit cillum est. Nostrud exercitation elit ut mollit aute proident.'
        }
    ]

    const jobs = useObjectsList(jobsList)

    return (
        <>
            <div className=" w-2/5 m-auto text-center">
                <h1 className="text-neutral text-xl mb-4">Find your dream job</h1>
                <div className="relative">
                    <input type="text"
                           className=" font-tt_commons_light text-lg-1 text-gray-3 block outline-0 w-full px-10 py-3 border border-gray-2 focus:border-gray-2 rounded-3xl"
                           placeholder="Search your dream job"/>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.435 3.86397C13.3877 5.81659 13.3877 8.98242 11.435 10.935C9.48241 12.8877 6.31658 12.8877 4.36396 10.935C2.41134 8.98242 2.41134 5.81659 4.36396 3.86397C6.31658 1.91135 9.48241 1.91135 11.435 3.86397ZM12.0923 13.006C9.3505 15.0619 5.44344 14.8429 2.94975 12.3493C0.216077 9.61558 0.216077 5.18343 2.94975 2.44976C5.68342 -0.283912 10.1156 -0.283912 12.8492 2.44976C15.3427 4.94325 15.5618 8.84988 13.5065 11.5917L16.2986 14.3813L14.8843 15.7955L12.0923 13.006Z"
                                  fill="#828BA2"/>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between mt-2 text-gray-3 text-lg-1 font-tt_commons_light">
                    <div>
                        <span className="">Suggested:</span>&nbsp;<span className=" text-indigo-2 font-tt_commons">Product manager</span>
                    </div>
                    <div>
                        <a href="#">Advanced search</a>
                    </div>
                </div>
            </div>
            <div className="p-4 m-auto text-center flex justify-center space-x-2">
                
                <div className="w-1/4">
                    <AppDropdown selected={addressDropdown.value} setSelected={addressDropdown.onChange}  options={addressDropdown.options} />
                </div>
                
                <div className="w-1/4">
                    <AppDropdown selected={salaryDropdown.value} setSelected={salaryDropdown.onChange}  options={salaryDropdown.options} />
                </div>

                <div className="w-1/4">
                    <AppDropdown selected={postTimeDropdown.value} setSelected={postTimeDropdown.onChange}  options={postTimeDropdown.options} />
                </div>

                <div className="w-1/4">
                    <AppDropdown selected={boardsDropdown.value} setSelected={boardsDropdown.onChange}  options={boardsDropdown.options} />
                </div>
                
            </div>

            {jobs && 
                <div className="p-4 m-auto text-left space-y-2">
                    {jobs.list.map((job, idx) => {
                        return (
                            <div key={job.title + idx} className="px-6 py-3 text-gray-3 bg-white border border-gray-1 rounded-lg">
                                <h1 className="text-neutral text-lg mb-2">{job.title}</h1>
                                <p>{job.description}</p>
                                <div className="text-right">
                                    <a href="#" className="">                            
                                        <span className="text-sm font-semibold font-sans text-indigo">See more...</span>
                                    </a>    
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            }
        </>
    )    
}

export default JobsSearch
