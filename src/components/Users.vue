<template>
    <div>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="flex justify-between">
            <div>
              <h1 class="font-semibold">Users</h1>
            </div>
            <div class="order-last">
              <router-link to="/addusers">
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
                  <!-- <th scope="col" class="px-6 py-3">
                    Full Name
                  </th> -->
                  <th scope="col" class="px-6 py-3">
                    User Name
                  </th>
                  <!-- <th scope="col" class="px-6 py-3">
                    Phone Number
                  </th> -->
                  <!-- <th scope="col" class="px-6 py-3">
                    Enabled
                  </th> -->
                  <th scope="col" class="px-8 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in user" :key="user.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ user.fullName }}
                  </td>
                  <td class="px-6 py-4">
                    {{ user.userName }}
                  </td>
                  <!-- <td class="px-6 py-4">
                    {{ user.phoneNumber }}
                  </td> -->
                  <!-- <td class="px-6 py-4">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model=" user.isEnabled">
                    <label for="checkbox-table-2" class="sr-only">checkbox</label>
                    {{ user.isEnabled }}
                  </td> -->
                  <td class="px-4 py-4 flex space-x-3">
                    <router-link :to="{path: '/'+user.id+'/edituser' }">
                <button  type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</button>
                </router-link>
                
                <button @click="deleteForm(user.id)"  type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
              
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
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  
  export default {

   
    data() {
      return {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJpZCI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVmVuZG9ySWQiOiIzOTc5MSIsIm5iZiI6MTcyMDUyOTE1NiwiZXhwIjoxNzMyNTI5MTU2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MCJ9.QqcQPVlSMYl6d61GuqxnwGMS1YskKRJaXnzL3e3cZmw',
        user: [],
        error: null,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get('http://68.183.69.211:5025/api/User', {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then(res => {
            this.user = res.data;
            console.log(res);
          })
          .catch(error => {
            console.error(error);
          });
      },
      deleteForm(userid) {
        console.log(userid);
        axios.delete(`http://68.183.69.211:5025/api/User?ids=${userid}`, {
          headers: {
            Authorization: 'Bearer ' + this.token
          }
        })
          .then((response) => {
            console.log(response.data);
            this.user = this.user.filter(user => user.id !== userid);
          })
          toast("User Added Successfully", {
  "theme": "auto",
  "type": "success",
  "dangerouslyHTMLString": true
})
          .catch((error) => {
            console.log(error);
            toast("Something went wrong", {
  "theme": "auto",
  "type": "error",
  "dangerouslyHTMLString": true
})
          });
          }    
    },
  };
  </script>