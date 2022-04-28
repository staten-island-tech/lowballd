<template>
<div class="pb-8 border-current">
    <h1 class="text-2xl m-10 font-bold">Description</h1>
    <p class="mx-10 -mt-8 text-base text-gray-400">Write a little joke or greeting for any passerbys.</p>
    <div class="relative h-auto">
        <textarea id="description" name="description" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block mx-auto w-11/12 sm:w-5/6 sm:text-sm border border-gray-300 rounded-md" placeholder="Maximum 150 words."></textarea>
    </div>
    <h1 class="text-2xl font-bold mx-10 mt-10">Recieve Emails</h1>
        <div class="mx-10 py-4 flex flex-col">
            <label for="checked-newsletter" class="relative inline-flex items-center cursor-pointer mb-2">
                <input type="checkbox" value="" id="checked-newsletter" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lowballd Newsletter</span>
            </label>
            <label for="checked-messages" class="relative inline-flex items-center cursor-pointer mb-2">
                <input type="checkbox" value="" id="checked-messages" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">New Messages</span>
            </label>
            <label for="checked-recieved" class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" id="checked-recieved" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Offers Received</span>
            </label>
        </div>
        <div class="mt-6">
            <button type="button" class="w-11/12 sm:w-5/6 mx-10 sm:focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save Changes</button>
        </div>
</div>
</template>

<script>
    export default {
        name: 'ManageAccount',
    }
    
</script>