<template>
<html>
  <div class="posts">
<center><img src="./sisc-logo.jpg"  class="inCenter" style="width:200px;  height:200px;"/></center>	
   <center> <h1>Election Result</h1>

    <button v-on:click="getCurrentStanding()" id="button">Check Election Results</button>

    <br>
    <span v-if="response">
      <b>{{ response }}</b>
    </span>
    <br>
    <vue-instant-loading-spinner id='loader' ref="Spinner"></vue-instant-loading-spinner>
    <!--<div class="chart-wrapper">
      <chart :options="chartOptionsBar"  ></chart>
    </div>-->

<h2 id="res">Results: </h2></center>

  </div>
</html>
</template>

<script>
//



import PostsService from "@/services/apiService";
import VueInstantLoadingSpinner from "vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue";
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "response",
  data() {
    return {
      response: null,
      chartOptionsBar: {}
    };
  },
  components: {
    VueInstantLoadingSpinner
  },
  methods: {
    async getCurrentStanding() {


//


var password = prompt("Enter secret Password");
if(password=="iba123"){

///
///

}

else {

this.exit();
}

//



      this.response = null;
      
      this.runSpinner();

      // console.log(`this.selected ${this.selected}`);
      const apiResponse = await PostsService.getCurrentStanding();
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%");
      console.log(apiResponse);
      console.log(apiResponse.data[0].Record);
      let currentStanding = [];



var results = [
  ["United", 2],
  ["Flambueue", 4],
  ["Mashaal", 6],
  ["Merit", 6]
["Shaheen", 6]	
];
results[0][1]=3;
//alert(results[0][1]);

var a=[];
      for (let i = 0; i < apiResponse.data.length; i++) {
        currentStanding[i] = apiResponse.data[i].Record.count;
//alert(currentStanding[i]);

//results[i][1]=(currentStanding[i]);
a[i]=currentStanding[i];
      }

var txt = "";



txt = "Merit: "+currentStanding[0]+"\n"+"Mashaal: "+currentStanding[1]+"\nFlambueue: "+currentStanding[2]+"\nUnited: "+currentStanding[3]+"\nShaheen: "+currentStanding[4];
document.getElementById('transactionLog').innerHTML="Transaction Log: Transaction getElectionResult has been submitted";

alert(txt);
//document.write(txt);
document.getElementById("res").innerHTML=txt;
      console.log("curStanding: ");
      console.log(currentStanding);

      this.chartOptionsBar = {
        xAxis: {
          data: [
            "United",
            "Flambueue",
            "Mashaal",
            "Merit",
            "Shaheen"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "bar",
            data: currentStanding
          }
        ],
        title: {
          text: "2020 ",
          x: "center",
          textStyle: {
            fontSize: 24
          }
        },
        color: ["#127ac2"]
      };
      // this.response = apiResponse.data;
      // this.renderChart(this.datacollection, this.options)
      this.hideSpinner();
    },
    async runSpinner() {
      this.$refs.Spinner.show();
    },
    async hideSpinner() {
      this.$refs.Spinner.hide();
    }
  }
};


//
function abc(){

var password = prompt("Enter secret Password");
if(password=="iba123"){

///
getCurrentStanding();

///

}

else {
alert("wrong password!")
}

}// abc end

</script>
