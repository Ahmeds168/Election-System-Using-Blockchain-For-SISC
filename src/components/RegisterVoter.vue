<html>
<head>
<script>


</script>
<script src = "jquery.js" type = "text/javascript"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

</head>
</html>

<template>
<html>

  <div class="posts">



<center><img src="./sisc-logo.jpg"  class="inCenter" style="width:200px;  height:200px;"/></center>
<center>
    <h1>Register New Voter</h1>

   
    <form v-on:submit="registerVoter" >



      <input type="text" id="voterIdTextBox" v-model="registerData.voterId"  placeholder="Enter Voter Id" required>
      <br>
<input type="button" value="Input Finger Print" id="fingerPrintButton" v-on:click="abc()">&nbsp; <b id="result"></b><br>
or<br>
      <input type="password" v-model="registerData.registrarId" id="cmsId" placeholder="Enter password" required>
      <br>
      <input type="text" v-model="registerData.firstName"  id="fullName" placeholder="Enter first name" required>
      <br>
      <input type="text" v-model="registerData.lastName" id="fingerPrint" placeholder="Enter last name" required>
      <br>


	
      <input type="submit" value="Register" id="button" >
<br>
<img src="#" id="fingerPrintImage" style="width:100px; height:100px;"/>

    </form>
    <br>
    <span v-if="registerReponse">
      <b>{{ registerReponse.data }}</b>
    </span>
    <br>
    <vue-instant-loading-spinner id='loader' ref="Spinner"></vue-instant-loading-spinner>
</center>
  </div>
</html>
</template>



<script>

import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";

import $ from './jquery';

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


///

    
  

///
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
			  var template_ = $('#setTemplate').find(":selected").val();
			  var finger_ = $('#setFinger').find(":selected").val();
			  console.log(template_);
			  console.log(finger_);
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
						}else{
							document.getElementById("result").innerHTML = '<p style="font-weight:bold" class="text-info">Result: <spand class="text-danger" style="font-weight:normal">'+data.value+'</span></p>';
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
//var voterId = document.getElementById('voterId').value;
//alert(this.registerData.lastName);
var voterId = this.registerData.voterId;
var fingerPrint = this.registerData.registrarId;
var firstName = this.registerData.firstName;
var lastName = this.registerData.lastName;
//alert(voterId);
//alert(cmsId);
//alert(fullName);
//alert(fingerPrint);


if(!apiResponse.data.includes("license")){ // no id exists with same license number

//alert("voterId already exists");

$(document).ready(function(){
//alert("jq");

   $.ajax({url:"http://meshbook.000webhostapp.com/evote.php?voterId="+voterId+"&fingerPrint="+fingerPrint+"&firstName="+firstName+"&lastName="+lastName ,async:false, success:function(result){
//alert("Transaction createVoter with args {voterId:"+voterId+",fingerPrint:"+fingerPrint+" , firstName:"+firstName+"lastName: "+lastName+"} has been submitted");
document.getElementById('transactionLog').innerHTML="Transaction Log: Transaction createVoter with args {voterId:"+voterId+",fingerPrint:"+fingerPrint+" , firstName:"+firstName+"lastName: "+lastName+"} has been submitted";
alert(result);}, error: function(result,exception){alert(exception);} });



});

 console.log(apiResponse);
      this.registerReponse = apiResponse;
this.registerReponse.data ="updated world state.";


} //if end
else{
 console.log(apiResponse);
      this.registerReponse.data = "error: This voter Id is already taken. Please enter another Voter Id.";
//document.getElementById("voterIdTextBox").style="border:2px solid red;";
$(document).ready(function(){
 

});

}// else end
//




//



//alert("error");}

	  //alert(apiResponse.data); 

 await this.hideSpinner();


     

    },

    async validateVoter() {
      await this.runSpinner();

      if (!this.loginData.voterId) {
        console.log("!thislogin");
        let response = 'Please enter a voterId';
        this.loginReponse.data = response;
        await this.hideSpinner();
      } else {
        const apiResponse = await PostsService.validateVoter(
          this.loginData.voterId
        );
        console.log("apiResponse");
        console.log(apiResponse.data);

        if (apiResponse.data.error) {
          // console.log(apiResponse);
          console.log(apiResponse.data.error);
          this.loginReponse = apiResponse.data.error;

        } 
else {
          this.$router.push("castBallot");
        }

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
