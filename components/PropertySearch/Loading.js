import React from "react";
const Loading = () => {
 return (
  <section className="py-24">
   <div className="max-w-xs sm:max-w-2xl  mx-auto">
   <div className="bg-white dark:bg-gray-800 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" ><div className="text-sm align-text-top text-center text-slate-900 dark:text-gray-300 content-center py-24">... SEARCHING</div></div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-200 dark:bg-gray-700 w-full animate-pulse h-14 rounded-2xl" ></div>
          <div className="bg-gray-200 dark:bg-gray-700 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 dark:bg-gray-700 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 dark:bg-gray-700 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 dark:bg-gray-700 w-full animate-pulse h-3 rounded-2xl" ></div>
        </div>
        <div className="mt-auto flex gap-3">
          <div className="bg-gray-200 dark:bg-gray-700 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 dark:bg-gray-700 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 dark:bg-gray-700 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
        </div>
      </div>
</div>
   </div>
  </section>
 );
};
export default Loading;