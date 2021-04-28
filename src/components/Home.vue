<template>
<html>
  <div class="posts" id="loginpage">



<center><img src="./sisc-logo.jpg"  class="inCenter" style="width:200px;  height:200px;"/></center>
<center>
    <h1>Election System Using Blockchain For SISC</h1>
<h1>Login</h1>
   <!-- <h3>If you are a registered voter, enter your voterId below</h3>-->
    <!--span><b>{{ response }}</b></span><br /-->
    <form v-on:submit="validateVoter">
	

<h3><i><b>Instructions: </b>Enter Your Voter Id and fingerprint</i> </h3>

 <!--<input type="text"  placeholder="Enter cnic/cmsid"><br>-->

      <input type="text" v-model="loginData.voterId" placeholder="Enter Voter Id" required>
      <br>

<input type="button" value="Input Finger Print" id="fingerPrintButton" v-on:click="abc()">&nbsp;<b id="result"></b> <br>
or<br>

      <input type="password" v-model="loginData.fingerPrint" placeholder="Enter password" id= "fingerPrintTextBox">
      <br>
	
 <input type="submit" value="Login" id="button">&nbsp; 
<br>
<img src="#" id="fingerPrintImage" style="width:100px; height:100px;"/>

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
<!-- <div style="background:black; color:white;" id="transactionLog">abcd</div> -->
</html>
</template>

<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";
import $ from "./jquery"


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
async abc(){

//alert("1111111111")


////// init

var success=true;
			  document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Result: </p>'; 
				 $.ajax({ 
					 type: "GET",
					 dataType: "json",
					 url: "https://localhost:9999/ASW/initialize",
					 async: false,
					 headers: {
						 'Cache-Control': 'no-cache, no-store, must-revalidate', 
						 'Pragma': 'no-cache', 
						 'Expires': '0'
					   },
					 error: function (jqXHR, textStatus, errorThrown) {
						success=false;
					   alert("secugen wrapper service not running");
					 },
					 success: function(data){      
						if(data.code === '00'){
							document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Result: <spand class="text-success" style="font-weight:normal">Device successfully initialized</span></p>'; 
						}else{
						document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Result: <spand class="text-danger" style="font-weight:normal"> '+data.value +'</span></p>'; 
						}
						
					 }
				 });

///////////////

if(success){

			  document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Result: </p>'; 
				 $.ajax({ 
					 type: "GET",
					 dataType: "json",
					 url: "https://localhost:9999/ASW/serialNumber",
					 async: false,
					 headers: {
						 'Cache-Control': 'no-cache, no-store, must-revalidate', 
						 'Pragma': 'no-cache', 
						 'Expires': '0'
					   },
					 error: function (jqXHR, textStatus, errorThrown) {
						success=false;
					   alert("secugen wrapper service not running");
					 },
					 success: function(data){        
						if(data.code === '00'){
							document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Result: <spand class="text-success" style="font-weight:normal">Device searial number is '+data.value+'</span></p>'; 
						}else{
						document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Result: <spand class="text-danger" style="font-weight:normal"> '+data.value+'</span></p>'; 

						}
					 }
				 });



}
///////////
if(success){
			 // document.getElementById("ItemPreview").src = "";
			  document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Template: </p>'; 
			  //var template_ = $('#setTemplate').find(":selected").val();
			  //var finger_ = $('#setFinger').find(":selected").val();
			  //console.log(template_);
			  //console.log(finger_);
				 $.ajax({ 
					 type: "GET",
					 dataType: "json",
					 url: "https://localhost:9999/ASW/captureFinger",
					 async: false,
					 headers: {
						 'Cache-Control': 'no-cache, no-store, must-revalidate', 
						 'Pragma': 'no-cache', 
						 'Expires': '0'
					   },
					   data: { 
						"template": template_,
						"finger": finger_
					  },
					 error: function (jqXHR, textStatus, errorThrown) {
					   alert("secugen wrapper service not running");
					 },
					 success: function(data){        
							if(data.code === '00'){
							document.getElementById("fingerPrintImage").src = "data:image/png;base64," + data.image;
							document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Template: <pre class="text-success" style="font-weight:normal">'+data.value+'</pre></p>'; 
document.getElementById("fingerPrintTextBox").innerHTML = data.value; 
						}else{
							document.getElementById("fingerPrintTextBox").innerHTML = data.value; 
						}
					 }
				 });

}


},
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

     if (!this.loginData.voterId) {
        console.log("!thislogin");
        let response = 'Please enter a VoterId';
        this.loginReponse.data = response;
        await this.hideSpinner();

      } 
    else  if (!this.loginData.fingerPrint) {
        console.log("!thislogin");
        let response = 'Please enter a fingerPrint';
        this.loginReponse.data = response;
        await this.hideSpinner();

      }


else {
        const apiResponse = await PostsService.validateVoter(
          this.loginData.voterId
        );
        console.log("apiResponse");
        console.log(apiResponse.data);

        if (apiResponse.data.error) {
          // console.log(apiResponse);
          console.log(apiResponse.data.error);
          this.loginReponse = apiResponse.data.error;
        } else {
var voterId = this.loginData.voterId;
var fingerPrint = this.loginData.fingerPrint;
//alert("Transaction loginAsVoter with args{voterId: "+voterId+" , fingerPrint: "+fingerPrint+" } has been submitted");
document.getElementById('transactionLog').innerHTML="Transaction Log: Transaction loginAsVoter with args{voterId: "+voterId+" , fingerPrint: "+fingerPrint+" } has been submitted";
//setTimeout(myFunc,2000);
//function myFunc(){
document.getElementById("castVoteRouterView").style="display:block;";

         this.$router.push("castBallot");


//}

        }

  //      console.log(apiResponse);
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
function abc(){alert("hello");}
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
background:blue;
}
input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
#rtr2{
display:block;

}	
</style>
