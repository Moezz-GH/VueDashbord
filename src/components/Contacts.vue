<template>

    <div>


      
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="flex justify-between">
            <div>
              <h1 class="font-semibold">Contacts</h1>
            </div>
            <div class="order-last">
              <router-link to="/addcontacts">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Add
                </button>
              </router-link>
            </div>
          </div>
  
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    WhatsApp
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone Number
                  </th>
                  
                  <th scope="col" class="px-8 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="contact in contact" :key="contact.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                 
                  <td class="px-6 py-4">
                    {{ contact.name }}
                  </td>
                  <td class="px-6 py-4">
                    <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model=" contact.whatsApp">
                    <label for="checkbox-table-3" class="sr-only">checkbox</label>
                  </td>
                  <td class="px-6 py-4">
                    {{ contact.email }}
                  </td>
                  <td class="px-6 py-4">
                    {{ contact.phoneNumber }}
                  </td>
                 
                  <td class="px-4 py-4 space-x-3">
                    <router-link :to="{path: '/'+contact.id+'/editcontacts' }">
                    
                <button  type="button" class="px-3 py-2 text-xs font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                </router-link>             
                  </td>
                </tr>
              </tbody>
            
            </table>

            
          </div>







        </div>


       

        




        
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
//   import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  
  export default {

   
    data() {
      return {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJpZCI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVmVuZG9ySWQiOiIzOTc5MSIsIm5iZiI6MTcyMDUyOTE1NiwiZXhwIjoxNzMyNTI5MTU2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MCJ9.QqcQPVlSMYl6d61GuqxnwGMS1YskKRJaXnzL3e3cZmw',
        contact: [],
        error: null,
        currentPage: 1,
        ContactPerPage:10,
        totalPages: 0,
        isLoading: false
        
      };
    },
    mounted() {
      this.fetchData();
    
    },
    methods: {
        fetchData() {
    const url = `http://68.183.69.211:5025/api/Contact/Filter?PageSize=${this.ContactPerPage}&PageNumber=${this.currentPage}`;
    axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + this.token
      }
    })
    .then(response => {
        console.log('Response:', response);
        const contacts = response.data.data; 
        this.contact = contacts;
        this.totalPages = Math.ceil(response.data.totalSize / this.ContactPerPage);
        // console.log('Updated state:', this.Vendor, this.totalPages);
      })
          .catch(error => {
            console.error(error);
          });
      },


      previousPage() {
    if (this.currentPage > 1 &&!this.isLoading) {
      this.currentPage--;
      this.fetchData();
    }
  },

  nextPage() {
    if (this.currentPage < this.totalPages &&!this.isLoading) {
      this.currentPage++;
      this.fetchData();
    }
  }
,

 
     


  }};
  </script>