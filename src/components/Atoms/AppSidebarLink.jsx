import { Link } from "react-router-dom";

const AppSidebarLink = (props) => {
    return (
        <Link to={props.to} className="flex flex-nowrap px-3 py-6px hover:text-neutral-2 hover:bg-gray-4 hover:rounded">
            <span className="grow">
                {props.children}
            </span>
            {props.count && <span className="text-xs-no-line-height text-indigo-2 font-semibold text-center bg-gray-4 w-6 h-6 rounded-full">
                                {props.count}
                            </span>
            }
        </Link>
    )
}

export default AppSidebarLink
