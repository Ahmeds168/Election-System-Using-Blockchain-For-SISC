<template>
<html>
<body>

  <div class="posts">
<!--<center><img src="./sisc-logo.jpg"  class="inCenter" style="width:200px;  height:200px;"/></center>-->
    <center><h1>Please Cast your Vote</h1></center>


<table border="1" style="position:relative; left:25%; width:50%;" id="myTable">

<tr v-on:load="updatePanel()">
<td>
    <input type="radio" id="one" value="Republican" v-model="picked" onClick="party='shaheen'; ">
    <img src="./shaheen.png" width="70px" height="70px"></img><label for="one"><b style="font-size:40px;" id="panel1" onClick="alert('ahmed');">Shaheen</b></label>
</td>
</tr>

    <br>

<tr>
<td>
    <input type="radio" id="two" value="Democrat" v-model="picked" onClick="party='Merit'; ">
    <img src="./merit.jpg" width="70px" height="70px"></img><label for="two"><b style="font-size:40px;" id="panel2">Merit</b></label>
</td></tr>

    <br>
<tr>
<td>
    <input type="radio" id="two" value="Green" v-model="picked" onClick="party='Mashaal'; ">
    <img src="./mashaal.jpeg" width="70px" height="70px"></img><label for="two"><b style="font-size:40px;" id="panel3">Mashaaal</b></label>
</td>
</tr>
    <br>
<tr>
<td>
    <input type="radio" id="two" value="Independent" v-model="picked" onClick="party='Flambueue'; ">
    <img src="./flambueue.png" width="70px" height="70px"></img><label for="two"><b style="font-size:40px;" id="panel4">Flambueue</b></label>
</td>
</tr>
    <br>
<tr><td>
    <input type="radio" id="two" value="Libertarian" v-model="picked" onClick="party='United'; ">
    <img src="./united.png" width="70px" height="70px"></img><label for="two"><b style="font-size:40px;" id="panel5">United</b></label>
</td>
</tr>
    <br>
    <br>
</table>



   <!-- <span v-if="picked">
      Picked:
      <b>{{ picked }}</b>
    </span>
-->
    <br>
    <br>
    <!--span><b>{{ response }}</b></span><br /-->

<center>
    <form v-on:submit="castBallot">
	      <!-- <input type="text" value="2sww593dc034wb2twdk91r" v-model="input.electionId"  >
      <br>-->
      <input type="text" v-model="input.voterId" onChange="voterId=this.value;" placeholder="Enter Voter Id">
      <br>
      <input type="submit" value="Cast Vote" id="button">
      <br>


<!--<div style="border:1px solid red;" id="transactionLog">abcd</div>-->
    </form>

  <form v-on:load="updatePanel">

    </form>



    <br>
    <span v-if="response">
      <b>{{ response }}</b>
    </span>
    <br>
</center>
    <vue-instant-loading-spinner id="loader" ref="Spinner"></vue-instant-loading-spinner>
  </div>



</body>
</html>
</template>
<html><head><script>var party="p";
var voterId="v";
import $ from './jquery';




</script></head>
<body>


</body>
</html>
<script>
import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";
import $ from './jquery';




function abc(){

$(document).ready(function(){

var panels="";

   $.ajax({url:"http://meshbook.000webhostapp.com/vote.php?getPanels=1" ,async:false, success:function(result){panels=result;}, error: function(result,exception){alert(exception);} });

var panel = panels.split("+");

var var1 = panel[3];
//alert(var1);
document.getElementById("panel2").innerHTML="ahmed";
return panel[1];

});




}








export default {
  name: "response",
  data() {
    return {
      input: {},
      picked: null,
      response: null
    };
  },
  components: {
    VueInstantLoadingSpinner
  },
  methods: {


async updatePanel(){

//alert("updateeeeeeeeeeee");

var panels="";

   $.ajax({url:"http://meshbook.000webhostapp.com/vote.php?getPanels=1" ,async:false, success:function(result){panels=result;}, error: function(result,exception){alert(exception);} });

var panel = panels.split("+");

var var1 = panel[3];
//alert(var1);
document.getElementById("panel2").innerHTML="ahmed";
//return panel[1];

}
,
    async castBallot() {
      await this.runSpinner();

      const electionRes = await PostsService.queryWithQueryString('election');

      let electionId = electionRes.data[0].Key;



      //console.log("picked: ");
      //console.log(this.picked);
      console.log("voterId: ");
      console.log(this.input.voterId);
      this.response = null;

 

      //error checking for making sure to vote for a valid party
      if (this.picked === null ) {
        console.log('this.picked === null')

        let response = "You have to pick a party to vote for!";
        this.response = response;
        await this.hideSpinner();
      
      } else if (this.input.voterId === undefined) {
        console.log('this.voterId === undefined')

        let response = "You have to enter your voterId to cast a vote!";
        this.response = response;
        await this.hideSpinner();

      } else {

        const apiResponse = await PostsService.castBallot(
          electionId,
          this.input.voterId,
          this.picked
        );

        console.log('apiResponse: &&&&&&&&&&&&&&&&&&&&&&&');
        console.log(apiResponse);

        if (apiResponse.data.error) {
          this.response= apiResponse.data.error;
          await this.hideSpinner();
        } else if (apiResponse.data.message) {
          this.response= `Could not find voter with voterId ${this.input.voterId}
            in the state. Make sure you are entering a valid voterId`;
          await this.hideSpinner();
        } 
        else {
         // let response = `Successfully recorded vote for ${this.picked} party 
           // for voter with voterId ${apiResponse.data.voterId}. Thanks for 
            //doing your part and voting!`;

		let response = "You have successfully cast your vote. Thanks!"
///

$(document).ready(function(){


   $.ajax({url:"http://meshbook.000webhostapp.com/evote.php?castVote="+party+"&voterId="+voterId ,async:false, success:function(result){alert(result);


 

}, error: function(result,exception){alert(exception);} });




});

///



          this.response = response;

document.getElementById('transactionLog').innerHTML="Transaction Log: Transaction castVote has been submitted";
          console.log("cast ballot");
          console.log(this.input);
          await this.hideSpinner();


        }
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
input[type=text] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}	
</style>
