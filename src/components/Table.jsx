import React from 'react';

function Table() {
  return (
    <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        CustomerID
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-black border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        123456
                    </th>
                    <td class="py-4 px-6">
                        Sriram
                    </td>
                    <td class="py-4 px-6">
                        <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                            <span>Open</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table