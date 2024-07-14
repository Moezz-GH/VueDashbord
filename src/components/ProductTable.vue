<template>
    <div>

        <div class="p-4 sm:ml-64">

<div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

  

<div class="flex justify-between">
<div>
<h1 class="font-semibold">Products</h1>
<!-- <p>Welcome To my Dashboard</p> -->
</div>

<div class="order-last">
<router-link to ="/AddProduct"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " >Add</button>
</router-link>
</div>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
 <table v-if="products" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
             <th scope="col" class="px-6 py-3">
                 Product Name
             </th>
             <th scope="col" class="px-6 py-3">
                 Color
             </th>
             <th scope="col" class="px-6 py-3">
                 Category
             </th>
             <th scope="col" class="px-6 py-3">
                 Price
             </th>
             <th scope="col" class="px-8 py-3">
                 Action
             </th>
         </tr>
     </thead>
     <tbody>
         <tr v-for="products in products" :key="products.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
             <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {{products.id
                 }}
             </td>
             <td class="px-6 py-4">
                 {{products.title}}
             </td>
             <td class="px-6 py-4">
                {{products.description}}
             </td>
             <td class="px-6 py-4">
                {{products.category}}
             </td>
             <td class="px-4 py-4 flex ">
                <button  type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</button>
                 <button  @click="deleteRow(products.id)" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
             </td>
         </tr>
       
     </tbody>
 </table>


 


 <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between py-4" aria-label="Table navigation ">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto ml-1">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 ">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>



</div>

</div>
</div>







    </div>
</template>

<script>


import axios from 'axios';


export default {
   
    data() {
    return {
    products: [],
    error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    
    fetchData() {
        axios
        .get('https://dummyjson.com/products')
        .then(res => {
            this.products = res.data.products;
        })
        .catch(error => {
          console.error(error);
        });
    },

    deleteRow(id) {
    axios.delete(`https://dummyjson.com/products/${id}`)
      .then(res => {
        this.products = this.products.filter(products => products.id !== id);
        console.log('Row deleted successfully');
      })
      .catch(error => {
        console.error(error);
      });

  },

 

 



  },
  
};

</script>


