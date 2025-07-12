export const Input = ({ ...rest }) => {
 return (
  <input 
  { ...rest } 
  className="block rounded border-slate-400 dark:border-gray-600 border-2 p-2 hover:border-slate-500 dark:hover:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
 );
};