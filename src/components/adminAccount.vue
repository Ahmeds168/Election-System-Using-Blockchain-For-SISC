<head><script>
var values=new Array(5);
values[0]= new Array(3);
values[1]= new Array(3);
values[2]= new Array(3);
values[3]= new Array(3);
values[4]= new Array(3);
</script>
</head>
<template>
<html>
  <div class="posts" id="loginpage" >



<center><img src="./sisc-logo.jpg"  class="inCenter" style="width:200px;  height:200px;"/></center>
<center>
    <h1>Election System Using Blockchain For SISC</h1>
<h1>Welcome Admin</h1>
   <!-- <h3>If you are a registered voter, enter your voterId below</h3>-->
    <!--span><b>{{ response }}</b></span><br /-->
    <form v-on:submit="validateVoter">
	



 <!--<input type="text"  placeholder="Enter cnic/cmsid"><br>-->
<!--
      <input type="text" v-model="loginData.id" placeholder="Enter id">
      <br>


      <input type="password" v-model="loginData.password" placeholder="Enter password">
      <br>
-->
</body onload="var values=new Array(5);
values[0]= new Array(3);
values[1]= new Array(3);
values[2]= new Array(3);
values[3]= new Array(3);
values[4]= new Array(3);">


<table border="1" id="panelTable" >
<tr>
<th>panel Id</th>
<th>panel Name</th>
<th>panel Slogan</th></tr>


<tr>
<td><input type="text"  onchange="var1=this.value;"   style="width:200px;"></td>
<td><input type="text" onchange="var2=this.value;"  style="width:300px;"></td>
<td><input type="text" onchange="var3=this.value;"  style="width:500px;"></td>

</tr>

<tr>
<td><input type="text" onchange="var4=this.value;"  style="width:200px;"></td>
<td><input type="text" onchange="var5=this.value;"  style="width:300px;"></td>
<td><input type="text" onchange="var6=this.value;"  style="width:500px;"></td>

</tr>
<tr>
<td><input type="text" onchange="var7=this.value;"   style="width:200px;"></td>
<td><input type="text" onchange="var8=this.value;"  style="width:300px;"></td>
<td><input type="text" onchange="var9=this.value;"  style="width:500px;"></td>

</tr>
<tr>
<td><input type="text" onchange="var10=this.value;"   style="width:200px;"></td>
<td><input type="text" onchange="var11=this.value;"  style="width:300px;"></td>
<td><input type="text" onchange="var12=this.value;"  style="width:500px;"></td>

</tr>
<tr>
<td><input type="text" onchange="var13=this.value;"   style="width:200px;"></td>
<td><input type="text" onchange="var14=this.value;"  style="width:300px;"></td>
<td><input type="text" onchange="var15=this.value;"  style="width:500px;"></td>

</tr>
</table>
<br>	
</body>

<!--
<input type="text" placeholder="panel2 Id" id ="panel2Id" style="width:200px;"><input type="text" placeholder="panel2 name" id="panel2Name" style="width:300px;"><input type="text" placeholder="panel2 manifesto" id="panel2Manifesto"><br>	
<input type="text" placeholder="panel3 Id" id ="panel3Id" style="width:200px;"><input type="text" placeholder="panel3 name" id="panel3Name" style="width:300px;"><input type="text" placeholder="panel3 manifesto" id="panel3Manifesto"><br>	
<input type="text" placeholder="panel4 Id" id ="panel4Id" style="width:200px;"><input type="text" placeholder="panel4 name" id="panel4Name" style="width:300px;"><input type="text" placeholder="panel4 manifesto" id="panel4Manifesto"><br>	
<input type="text" placeholder="panel5 Id" id ="panel5Id" style="width:200px;"><input type="text" placeholder="panel5 name" id="panel5Name" style="width:300px;"><input type="text" placeholder="panel5 manifesto" id="panel5Manifesto"><br><br><br>	

-->
 <input type="submit" value="registerPanels" id="button"/>&nbsp; 



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
</html>
</template>
<html><head><script>
var var1="";
var var2="";
var var3="";

var var4="";
var var5="";
var var6="";

var var7="";
var var8="";
var var9="";

var var10="";
var var11="";
var var12="";

var var13="";
var var14="";
var var15="";


</script></head></html>

<script>
function abc(){}
var values=new Array(5);
values[0]= new Array(3);
values[1]= new Array(3);
values[2]= new Array(3);
values[3]= new Array(3);
values[4]= new Array(3);
</script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="myScript.js"></script>
<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";
import $ from "./jquery";
//import abc "./myScript.js";
var values=new Array(5);
values[0]= new Array(3);
values[1]= new Array(3);
values[2]= new Array(3);
values[3]= new Array(3);
values[4]= new Array(3);
//

//


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

      //console.log(apiResponse);
      //this.registerReponse = apiResponse;
      await this.hideSpinner();
    },

    async validateVoter() {
      await this.runSpinner();
/*
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

      }*/
  
//else {
await this.hideSpinner();



//document.getElementById("castVoteRouterView").style="display:block";
        /// this.$router.push("adminAccount");
//alert("success");
//alert(var8);
//alert(document.getElementById("abc").value);
$(document).ready(function(){

var values=new Array(5);
values[0]= new Array(3);
values[0][0]=var1;
values[0][1]=var2;
values[0][2]=var3;
values[1]= new Array(3);
values[1][0]=var4;
values[1][1]=var5;
values[1][2]=var6;
values[2]= new Array(3);
values[2][0]=var7;
values[2][1]=var8;
values[2][2]=var9;
values[3]= new Array(3);
values[3][0]=var10;
values[3][1]=var11;
values[3][2]=var12;
values[4]= new Array(3);
values[4][0]=var13;
values[4][1]=var14;
values[4][2]=var15;

document.getElementById('transactionLog').innerHTML="Transaction Log: Transaction registerPanels has been submitted";


   $.ajax({url:"http://meshbook.000webhostapp.com/vote.php?savePanel="+values ,async:false, success:function(result){alert(result);}, error: function(result,exception){alert(exception);} });

//alert("ok");




});
         //console.log(apiResponse);
        //this.loginReponse = apiResponse;
        // this.$router.push('castBallot')
        await this.hideSpinner();
      //}
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
background:blue;
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
input[type=button] {
  
color:black;

height:50px;
text-size:40px;

}
input[type=button]:hover{
background:black;
color:white;
}
#rtr2{
display:block;

}	
</style>
