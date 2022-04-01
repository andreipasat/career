import ApplicationBlock from "../Molecules/ApplicationBlock";
import AppButton from "../Atoms/AppButton";
import {useState} from "react";

const MyApplications = (props) => {
    
    const initWishlist = {
        name: 'Wishlist',
        amount: 3,
        svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.6954 12.3302L16.7633 11.8137C16.9173 11.2375 17 10.6299 17 10C17 9.37007 16.9173 8.76253 16.7633 8.18626L18.6954 7.66978C18.8941 8.41301 19 9.19414 19 10C19 10.8059 18.8941 11.587 18.6954 12.3302ZM17.7955 5.49928L16.0644 6.50089C15.4494 5.43791 14.5621 4.55061 13.4991 3.93557L14.5007 2.20446C15.8665 2.99468 17.0053 4.13351 17.7955 5.49928ZM12.3302 1.30458L11.8137 3.23675C11.2375 3.08271 10.6299 3 10 3C9.37007 3 8.76253 3.08271 8.18626 3.23675L7.66978 1.30458C8.41301 1.10591 9.19414 1 10 1C10.8059 1 11.587 1.10591 12.3302 1.30458ZM5.49928 2.20446L6.50089 3.93557C5.43791 4.55061 4.55061 5.43791 3.93557 6.50089L2.20446 5.49928C2.99468 4.13351 4.13351 2.99468 5.49928 2.20446ZM1.30458 7.66978C1.10591 8.41301 1 9.19414 1 10C1 10.8059 1.10591 11.587 1.30458 12.3302L3.23675 11.8137C3.08271 11.2375 3 10.6299 3 10C3 9.37007 3.08271 8.76253 3.23675 8.18626L1.30458 7.66978ZM2.20446 14.5007L3.93557 13.4991C4.55061 14.5621 5.43791 15.4494 6.50089 16.0644L5.49928 17.7955C4.13351 17.0053 2.99468 15.8665 2.20446 14.5007ZM7.66978 18.6954L8.18626 16.7633C8.76253 16.9173 9.37007 17 10 17C10.6299 17 11.2375 16.9173 11.8137 16.7633L12.3302 18.6954C11.587 18.8941 10.8059 19 10 19C9.19414 19 8.41301 18.8941 7.66978 18.6954ZM14.5007 17.7955L13.4991 16.0644C14.5621 15.4494 15.4494 14.5621 16.0644 13.4991L17.7955 14.5007C17.0053 15.8665 15.8665 17.0053 14.5007 17.7955Z" fill="#98A1B3"/>
              </svg>`
    }

    const [wishlist, setWishlist] = useState(initWishlist)
    
    const initApplied = {
        name: 'Applied',
        amount: 1,
        svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clipRule="evenodd" d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" fill="#F68559"/>
              </svg>`
    }
    
    const [applied, setApplied] = useState(initApplied)
    
    const initInterview = {
        name: 'Interview',
        amount: 1,
        svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clipRule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 5C12.7614 5 15 7.23858 15 10H5C5 7.23858 7.23858 5 10 5Z" fill="#5863DD"/>
              </svg>`
    }
    
    const [interview, setInterview] = useState(initInterview)
    
    const initOffer = {
        name: 'Offer',
        amount: 0,
        svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10.0607 12.8536L14.7071 8.20711L13.2929 6.79289L9.00001 11.0858L6.70712 8.79289L5.29291 10.2071L7.93935 12.8536C8.52514 13.4393 9.47489 13.4393 10.0607 12.8536Z" fill="#25B869"/>
              </svg>`
    }
    
    const [offer, setOffer] = useState(initOffer)
    
    return (
        <div>
            <div className="flex justify-between align-middle py-5 font-semibold">
                <div>
                    <h1 className="text-neutral text-xl">My applications</h1>
                </div>
                <div className="mt-1">
                    <AppButton>Job tracker</AppButton>
                </div>
            </div>
            <ul role="list" className="grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <li className="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154">
                    <ApplicationBlock application={wishlist} />
                </li>
                <li className="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154">
                    <ApplicationBlock application={applied} />
                </li>
                <li className="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154">
                    <ApplicationBlock application={interview} />
                </li>
                <li className="col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-154 min-h-154">
                    <ApplicationBlock application={offer} />
                </li>
            </ul>
        </div>
    )
}

export default MyApplications
