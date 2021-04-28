<template>
  <div class="posts" id="loginpage">



<center><img src="./sisc-logo.jpg"  class="inCenter" style="width:200px;  height:200px;"/></center>
<center>
    <h1>Election System Using Blockchain For SISC</h1>
<h1>Admin Panel</h1>
   <!-- <h3>If you are a registered voter, enter your voterId below</h3>-->
    <!--span><b>{{ response }}</b></span><br /-->
    <form v-on:submit="validateVoter">
	



 <!--<input type="text"  placeholder="Enter cnic/cmsid"><br>-->

      <input type="text" v-model="loginData.id" placeholder="Enter id">
      <br>


      <input type="password" v-model="loginData.password" placeholder="Enter password">
      <br>
	
 <input type="submit" value="Login" id="button">&nbsp; 



      <br>
      <br>
      <span v-if="loginReponse">
        <b>{{ loginReponse.data }}</b>
      </span>
      <br>
    </form>

  
    <br>
    <span v-if="registerReponse">
      <b>{{ registerReponse.data }}</b>
    </span>
    <br>
    <vue-instant-loading-spinner id='loader' ref="Spinner"></vue-instant-loading-spinner>


<router-view id="rtr2"></router-view>
</center>

</div>

</template>

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

      await this.runSpinner();
      const apiResponse = await PostsService.registerVoter(
        this.registerData.voterId,
        this.registerData.registrarId,
        this.registerData.firstName,
        this.registerData.lastName
      );

      console.log(apiResponse);
      this.registerReponse = apiResponse;
      await this.hideSpinner();
    },

    async validateVoter() {
      await this.runSpinner();

   if (!this.loginData.id) {
        console.log("!thislogin");
        let response = 'Please enter  id';
        this.loginReponse.data = response;
        await this.hideSpinner();

      } 
    else  if (!this.loginData.password) {
        console.log("!thislogin");
        let response = 'Please enter  password';
        this.loginReponse.data = response;
        await this.hideSpinner();

      }

  
else {

document.getElementById("castVoteRouterView").style="display:block";
         this.$router.push("adminAccount");


        

        console.log(apiResponse);
        this.loginReponse = apiResponse;
        // this.$router.push('castBallot')
        await this.hideSpinner();
      }
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
#button:active{
background:red;
}
input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=password] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
#rtr2{
display:block;

}	
</style>
