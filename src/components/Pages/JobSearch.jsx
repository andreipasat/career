const JobsSearch = () => {
    return (
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
                    <a href="#">Advanced search -></a>
                </div>
            </div>
        </div>
    )    
}

export default JobsSearch
