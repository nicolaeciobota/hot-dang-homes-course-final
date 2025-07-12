import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const TickItem = ({children}) => {
 return (<div className="grid grid-cols-[50px_1fr] gap-3">
<div className="text-3xl text-green-500 dark:text-green-400 flex justify-center items-center">
 <FontAwesomeIcon icon={faCircleCheck} />
</div>
<div className="text-gray-900 dark:text-gray-100">
{children}
</div>
 </div>);
};