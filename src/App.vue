<head>
<script>


</script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>

<template>



  <div id="app" >
<router-link to="/" class="navbar-brand" style="color:white;">Home</router-link>&nbsp; 
<input type="button" value="Home" id="BlockButton"  class="homeButton" style=" width:5%; height:10%; left:0px; top:0px;"  onClick="  document.getElementById('rtr').style='display:none;'; document.getElementById('app2').style='display:block;' ; document.getElementById('castVoteRouterView').style='display:none;'"/>
   <!-- <img alt="Vue logo" src="./assets/logo.png">-->    
      
<!--       
<p >FYP: Ahmed Ali Shah: 053-16-0013</p>
-->
<!--

<nav class="navbar navbar-light bg-light" style="background:black; height:45px;" >

<router-link to="/" class="navbar-brand" style="color:white;">Home</router-link>&nbsp;        
<router-link to="/" class="navbar-brand" style="color:white;"><input type="button" value="Login as Voter" onClick="document.getElementById('rtr').style='display:none;'; document.getElementById('app2').style='display:block;';" id="BlockButton"></router-link>&nbsp;     
<input type="button" value="Login as Voter" onClick="document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;';" id="BlockButton">

   <router-link to="/castBallot" class="navbar-brand" style="color:white;">Cast Vote</router-link>&nbsp; 
       <!-- <router-link to="/QueryAll">QueryAll</router-link></p>
        <router-link to="/queryWithQueryString">Query by Type</router-link>&nbsp;
        <router-link to="/queryByKey">Query by Key</router-link>&nbsp;
        
     
 
 <!--<router-link to="/QueryAll">QueryAll</router-link></p>-->
<!--
<router-link to="/RegisterPanel" class="navbar-brand" style="color:white;">Register Panel</router-link>&nbsp

<router-link to="/RegisterVoter" class="navbar-brand" style="color:white;">Register Voter</router-link>&nbsp
<router-link to="/getCurrentStanding" class="navbar-brand" style="color:white;">Election Results</router-link>&nbsp;
  <router-view></router-view>
</nav>
-->

<div id="app2">



<center><img src="./sisc-logo.jpg"  class="inCenter" style="width:200px;  height:200px;"/></center>


<h1 class="inCenter">Election System Using Blockchain For SISC</h1>
<center>
<h3><i><b>Instructions: </b>In order to cast vote you need to register first with your voterId <br>and fingerprint which you will use to login and vote.</i> </h3>
<router-link to="/" class="navbar-brand" style="color:white;"><input type="button" value="Login as Voter" onClick="document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;' ;" id="BlockButton"></router-link>&nbsp;         



 &nbsp;&nbsp;&nbsp;&nbsp;
<router-link to="/adminPanel"  onClick=" document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;'; document.getElementById('castVoteRouterView').style='display:none;';"  class="navbar-brand" style="color:white;">
<input type="button" value="Login as Admin" id="BlockButton"/></router-link><br><br>


<router-link to="/RegisterVoter"  onClick=" document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;'; document.getElementById('castVoteRouterView').style='display:none;';"  class="navbar-brand" style="color:white;"><input type="button" value="Register as New Voter" id="BlockButton"  /></router-link>

&nbsp;&nbsp;&nbsp;
<router-link to="/CheckYourVote"  onClick=" document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;'; document.getElementById('castVoteRouterView').style='display:none;';"  class="navbar-brand" style="color:white;">


<input type="button"  onClick=" document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;';" value="Check Your Vote" id="BlockButton"/>
</router-link>
<br><br>

<router-link  to="/getCurrentStanding"  onClick="document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;'; document.getElementById('castVoteRouterView').style='display:none;';" class="navbar-brand" style="color:white;" ><input type="button" value="Election Result" class="BlockButton"  id="hide" style="display:none;height:120px;"  /></router-link>
<!--
<router-link to="/QueryAll" onClick="document.getElementById('transactionLog').innerHTML='Transaction Log: Transaction Query All Assets has been submitted'; document.getElementById('app2').style='display:none;'; document.getElementById('rtr').style='display:block;'; document.getElementById('castVoteRouterView').style='display:none;';" class="navbar-brand" style="color:white;" ><input type="button" value="Query All" class="BlockButton"   style="height:100px;" /></router-link>
-->



<!--
 <router-link to="/RegisterVoter"  id="RegisterUserButton" onClick="document.getElementById('loginpage').style='display:none;'; document.getElementById('rtr2').style='display:none;';" class="navbar-brand" style="color:white; display:none;">      <input type="submit" value="Register as a New Voter" id="button" ></router-link>


<p><router-view id="registerUserRtr" style="display:none;" ></router-view></p>
-->



</center>


</div>

<router-view id="rtr" style="display:none"></router-view>
<router-view id="castVoteRouterView"></router-view>

<div style="background:black; width:1800px; color:white; position:fixed; top:940px;" id="transactionLog" >Transaction Log: </div>
  
    </div>


</template>



	


<script>


setTimeout(myFunc,1000);
//	

function myFunc(){

document.getElementById('hide').style="display:block;";

}

setTimeout(abc,1);

function abc(){
document.getElementById('castVoteRouterView').style='display:none;';
}
export default {
  name: 'app' 
  
 
}


</script>
<head><script src="https://code.jquery.com/jquery-3.5.1.min.js"></script></head>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>

<style>
#hide{
height: 120px;
}

#rtr{
position: absolute;
top:80px;
left:500px;
display:none;
width:50%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 40px;
}
.button{
position:absolute;
margin:0px;

}
.inCenter{
text-align: center;
}

#BlockButton{
background:white;
color:black;
width:20%;
height:120px;
font-size:20px;

}
#BlockButton:hover{
background:black;
color:white;
}
.BlockButton{
background:white;
color:black;
width:20%;
height:120px;
font-size:20px;

}
.BlockButton:hover{
background:black;
color:white;
}

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


.chart-wrapper {
  width: 100%;
  height: 700px;
}
.echarts {
  width: 100%;
  height: 100%;
}

#loader {
  position:fixed;
  padding-top: 250px;
}

.chart-wrapper {
  position:fixed;
  padding-left:32%;
}
</style>
