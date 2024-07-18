<template>
    <div>
        <div class="p-4 sm:ml-64">

<div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">


    <div class="flex justify-between">
<div>
<h1 class="font-semibold">Roles</h1>

</div>

<div class="order-last">
<router-link to ="/addroles"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " >Add</button>
</router-link>
</div>
</div>



<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Role name
                </th>
                <th scope="col" class="px-6 py-3">
                    Enabled
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Role in Role" :key="Role.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{Role.name}}
                </th>
                <td class="px-6 py-4">
                    <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model=" Role.isEnabled">
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                      
                </td>
                <td class="px-6 py-4 space-x-3 ">
                <router-link :to="{path: '/'+Role.id+'/editrole' }">
                <button  type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                </router-link>
                <button @click="toggleModal(Role.id)" data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="px-3 py-2 text-xs font-medium text-center rounded-lg text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 " type="button">
Delete
</button>
                </td>
            </tr>
            
          
            
        </tbody>


        <div id="popup-modal" ref="modal" tabindex="-1" class="fixed top-0 left-0 w-full h-full flex justify-center items-center" :class="{ 'hidden':!modalOpen }">
  <!-- modal content -->
  <div class="bg-white rounded-lg shadow-md p-4 max-w-md">
        <div class="relative  dark:bg-gray-700">
            <button @click="toggleModal" type="button"  class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button @click="deleteForm(selectedRoleId)" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <button  @click="toggleModal" data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
        </div>
    </div>
</div>
    </table>
</div>












</div>
</div>


    </div>
</template>

<script>

import axios from 'axios';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
  
  export default {
    data() {
  return {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJpZCI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVmVuZG9ySWQiOiIzOTc5MSIsIm5iZiI6MTcyMDUyOTE1NiwiZXhwIjoxNzMyNTI5MTU2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MCJ9.QqcQPVlSMYl6d61GuqxnwGMS1YskKRJaXnzL3e3cZmw',
    Role: [], 
    error: null,
    modalOpen: false,
    selectedRoleId: null
  };
},
mounted() {
  this.fetchData();
},
methods: {
  fetchData() {
    axios
      .get('http://68.183.69.211:5025/api/Role', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then(res => {
        this.Role = res.data; 
        
      })
      .catch(error => {
        console.error(error);
      });
  },


  toggleModal(Roleid) {
    this.selectedRoleId = Roleid;
    this.$refs.modal.classList.toggle('hidden');
  },
  deleteForm() {
        console.log(this.selectedRoleId);
        axios.delete(`http://68.183.69.211:5025/api/Role/${this.selectedRoleId}`, {
          headers: {
            Authorization: 'Bearer ' + this.token
          }
        })
        .then((response) => {
        console.log(response.data);
        this.Role = this.Role.filter(Role => Role.id!== this.selectedRoleId);
        this.toggleModal();
      
          toast("User Deleted Successfully", {
  "theme": "auto",
  "type": "success",
  "dangerouslyHTMLString": true
})})
          .catch((error) => {
            console.log(error);
            toast("something went wrong", {
  "theme": "auto",
  "type": "error",
  "dangerouslyHTMLString": true
})
          });
          }
},
  };

</script>

