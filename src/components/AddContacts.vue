<template>
    <div>

        <div class="p-4 sm:ml-64">

<div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
<form @submit="submitForm" class="max-w-md mx-auto">
    <div class="mb-5">
      <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
      <input type="text" v-model="formData.name" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
       
    </div>
  
  <div class="mb-5">
      <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
      <input type="text" v-model="formData.email" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      
    </div>
    <div class="mb-5">
      <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
      <input type="text" v-model="formData.phoneNumber" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      
    </div>

  <div class="mb-5">
              <label for="area-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">WhatsApp</label>
              <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="formData.whatsApp"> 
            </div>

  <div class="mb-5">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Vendor</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="formData.vendor">
    <option v-for="vendor in Vendors" :key="vendor.id"
    :value="vendor.id">{{ vendor.name }}</option>
  </select>
      
    </div>


  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  <router-link to="/contacts"><button type="button" class="text-blue-700 hover:bg-gray-100   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2.5">Cancel</button>
  </router-link>
</form>



</div>
</div>








    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    
    const formData = reactive({
      name: '', 
      email: '',
      whatsApp: false,
      phoneNumber:'',
      vendor: ''
    });

    const validationRules = {
      formData: {
        name: { required },
        email: { required },
       
      }
    };

    const v$ = useVuelidate(validationRules, formData);

    return {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJpZCI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVmVuZG9ySWQiOiIzOTc5MSIsIm5iZiI6MTcyMDUyOTE1NiwiZXhwIjoxNzMyNTI5MTU2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MCJ9.QqcQPVlSMYl6d61GuqxnwGMS1YskKRJaXnzL3e3cZmw',
      formData,
      v$,
      Vendors:[]
    };


  },

 
    methods: {
  submitForm(event) {
    event.preventDefault();
        this.sendForm();
     
    },

    sendForm() {
        
        axios.post('http://68.183.69.211:5025/api/Contact', this.formData, {
    headers: {
    Authorization: 'Bearer ' + this.token
    }
  })
    .then(response => {
    console.log(response.data);
    this.resetForm();
    })
    toast("Contact Added Successfully", {
  "theme": "auto",
  "type": "success",
  "dangerouslyHTMLString": true
})

    .catch(error => {
    console.error(error);
    toast("something went wrong", {
  "theme": "auto",
  "type": "error",
  "dangerouslyHTMLString": true
})
    });
    },

    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.whatsApp = false;
      this.formData.phoneNumber='';
      this.formData.vendor = '';
    }

    ,
    fetchVendor() {
        axios
          .get('http://68.183.69.211:5025/api/Vendor', {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then(res => {
            this.Vendors = res.data;
            console.log(res);
          })
          .catch(error => {
            console.error(error);
          });
      },

  },
mounted(){
  this.fetchVendor();
}
}



</script>



