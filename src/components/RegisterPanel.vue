<template>
<html>
  <div class="posts">

    <h1>Register New Panel</h1>

    <form v-on:submit="registerVoter">
      <input type="text" v-model="registerData.voterId" placeholder="Enter PanelId">
      <br>
      <input type="text" value="abc" v-model="registerData.registrarId" placeholder="Enter Panel Name">
      <br>
    
      <input type="submit" value="Register" id="button">
    </form>
    <br>
    <span v-if="registerReponse">
      <b>{{ registerReponse.data }}</b>
    </span>
    <br>
    <vue-instant-loading-spinner id='loader' ref="Spinner"></vue-instant-loading-spinner>
  </div>
</html>
</template>
<html><head><script></script></head></html>
<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";

export default {
  name: "response",
  data() {
    return {
      loginData: {},
      registerData: {},
      registerReponse: {
        data: ""
      },
      loginReponse: {
        data: ""
      }
    };
  },
  components: {
    VueInstantLoadingSpinner
  },
  methods: {
    async registerVoter() {
   },

    async validateVoter() {
    },
    async runSpinner() {
      this.$refs.Spinner.show();
    },
    async hideSpinner() {
      this.$refs.Spinner.hide();
    }
  }
};
</script>

<style>


#button{
background:white;
color:black;
width:50%;
height:50px;
text-size:40px;
}
#button:hover{
background:black;
color:white;
}
input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}	
</style>
