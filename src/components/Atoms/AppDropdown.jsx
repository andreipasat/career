import PropTypes from 'prop-types'

import { Menu } from '@headlessui/react'


const AppDropdown = ({selected,options, setSelected}) => {

    const setItem = (item) => {
        setSelected(item);
    }
    
    return (
        <Menu as="ul" className="mt-1 relative w-full">

            <Menu.Button
                    className="bg-white relative w-full border border-gray-1 rounded-md shadow-sm 
                    pl-3 pr-10 py-2 text-left cursor-default focus:outline-none 
                    focus:ring-gray-1 focus:border-gray-1 sm:text-sm">
                <span className="block truncate text-gray-3">
                    {selected.name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    
                    <svg className="h-5 w-5 text-gray-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"/>
                    </svg>
                </span>
            </Menu.Button>

            <Menu.Items className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            
                {/*Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.*/}
                
                {/*Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"*/}
                {options.map((item, idx) => {
                    return (
                        <Menu.Item key={item.val + idx}>
                            <li onClick={() => setItem(item)} className="text-gray-3 cursor-default select-none relative py-2 pl-3 pr-9">

                                    <span className="block truncate">
                                        {item.name}
                                    </span>

                                    {item.val === selected.val && 
                                        <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                            
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"/>
                                            </svg>
                                        </span>
                                    }

                            </li>
                        </Menu.Item>
                    )
                })}
            
            </Menu.Items>      
        </Menu>    
    )
}

AppDropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}

export default AppDropdown
