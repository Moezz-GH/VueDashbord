<template>
    <div>
        <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <form @submit="submitForm" class="max-w-md mx-auto">
            <div class="mb-5">
              <label for="name-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" v-model="formData.name" id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div v-if="v$?.formData?.name?.$error">
                <span class="text-red-500">{{ v$?.formData?.name?.$error }}</span>
              </div>
            </div>
  
            <div class="mb-5">
              <label for="area-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
              <input type="text" v-model="formData.area" id="area-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div v-if="v$?.formData?.area?.$error">
                <span class="text-red-500">{{ v$?.formData?.area?.$error }}</span>
              </div>
            </div>
  
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <router-link to="/vendors">
              <button type="button" class="text-blue-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2.5">Cancel</button>
            </router-link>
          </form>
        </div>
      </div>

    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    const formData = reactive({
      name: '',
      area: ''
    });

    const validationRules = {
      formData: {
        name: { required },
        area: { required }
      }
    };

    const v$ = useVuelidate(validationRules, formData);

    return {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJpZCI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVmVuZG9ySWQiOiIzOTc5MSIsIm5iZiI6MTcyMDUyOTE1NiwiZXhwIjoxNzMyNTI5MTU2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MCJ9.QqcQPVlSMYl6d61GuqxnwGMS1YskKRJaXnzL3e3cZmw',
    formData,
      v$
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getdata(this.$route.params.id);
  },
  methods: {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJpZCI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVmVuZG9ySWQiOiIzOTc5MSIsIm5iZiI6MTcyMDUyOTE1NiwiZXhwIjoxNzMyNTI5MTU2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MCJ9.QqcQPVlSMYl6d61GuqxnwGMS1YskKRJaXnzL3e3cZmw';
    getdata(Vendorid) {

        
      axios.get(`http://68.183.69.211:5025/api/Vendor/${Vendorid}`, {
          headers: {
            Authorization: 'Bearer ' + this.token
          }
        })
        .then((response) => {
          console.log(response.data);
          this.formData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },


    submitForm(event) {
        event.preventDefault();
  
        this.v$.$touch(); // Trigger form validation
  
        if (!this.v$.$error) {
            axios.put('http://68.183.69.211:5025/api/Vendor', this.formData, {
    headers: {
    Authorization: 'Bearer ' + this.token
    }
  })
    .then(response => {
    console.log(response.data);
    toast("Vendor Updated Successfully", {
  "theme": "auto",
  "type": "success",
  "dangerouslyHTMLString": true
})
    this.resetForm();

    })
    .catch(error => {
    console.error(error);
    toast("something went wrong", {
  "theme": "auto",
  "type": "error",
  "dangerouslyHTMLString": true
})
    });
    }},
  
      resetForm() {
        this.formData.name = '';
        this.formData.area = '';
      }
    }
  }
  </script>
