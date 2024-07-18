<template>
    <div>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="flex justify-between">
            <div>
              <h1 class="font-semibold">Products</h1>
            </div>
            <div class="order-last">
              <!-- <router-link to="/AddProduct"> -->
                <button type="button" @click="fetchhossam" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Add
                </button>
              <!-- </router-link> -->
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
                <tr v-for="product in products" :key="product.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ product.title }}
                  </td>
                 
                  <td class="px-6 py-4">
                    {{ product.category }}
                  </td>
                  <td class="px-6 py-4">
                    {{ product.price }}
                  </td>
                  <td class="px-4 py-4 flex">
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Edit
                    </button>
                    <button @click="deleteRow(product.id)" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

       




 


 <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between py-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto ml-1">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ products.total }}</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 mr-4 ">
            <li>
                <a href="#" @click="previousPage" :disabled="currentPage === 1" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ currentPage }}</a>
    </li>

            <li>
        <a href="#" @click="nextPage" :disabled="currentPage === totalPages" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ">Next</a>
            </li>
        </ul>
    </nav>




</div>

</div>
</div>







    </div>
</template>

<script>


import { data } from 'autoprefixer';
import axios from 'axios';



export default {
   
    data() {
    return {
      products: [],
      currentPage: 1,
      productsPerPage: 10,
      totalPages: 0,
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
  const url = `https://dummyjson.com/products?page=${this.currentPage}&per_page=${this.productsPerPage}`;
  axios.get(url)
    .then(response => {
      const startIndex = (this.currentPage - 1) * this.productsPerPage;
      const endIndex = startIndex + this.productsPerPage;
      this.products = response.data.products.slice(startIndex, endIndex);
      this.totalPages = Math.ceil(response.data.total / this.productsPerPage);
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
},

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
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



  // fetchhossam(){
  //   axios.get(`http://192.168.2.31:1337/api/products`)
  //   .then(response => {
  //             console.log(response.data);
  //           })
  //           .catch(error => {
  //             console.log(error);
  //           });
 



  // }},
}
  
};

</script>


