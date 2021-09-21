import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


  
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

  
export class Page2Component implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
  },
  tooltips: {
    enabled: false,
  },

  scales: {
    xAxes: [{

      gridLines: {
        display: false
      },
      ticks: {
        //beginAtZero: true
      }
    }],
    yAxes: [{
      
      display: false,
      gridLines: {
        display: false
      },

      ticks: {
        min: 0,
        max: 2000,
        display: false,
      }
    }],
 }

  };


  public barChartLabels: Label[] = ['Y16', 'Y17', 'Y18', 'Y19', 'Y20'];

  public barChartType: ChartType = 'bar';

  public barChartLegend = true;




    
  public barChartData: ChartDataSets[] = [

    { barThickness: 24, barPercentage: 1, data: [84,297,634,993,1400], label: 'Y16',
    backgroundColor: "#00a5fe",hoverBackgroundColor:"#0094E4" },
    

  ];

  









  public barChartOptions2: ChartOptions = {
    responsive: true,

    legend: {
      display: false,
  },
  tooltips:{
    enabled:false
  },

  scales: {
    xAxes: [{

      gridLines: {
        display: false
      },
      ticks: {
        //beginAtZero: true
      }
    }],
    yAxes: [{
      
      display: false,
      gridLines: {
        display: false
      },

      ticks: {
        min: 0,
        max: 2000,
        display: false,
      }
    }],
 }

  };

    

  public barChartLabels2: Label[] = ['Y16', 'Y17', 'Y18', 'Y19', 'Y20'];

  public barChartType2: ChartType = 'bar';

  public barChartLegend2 = true;

    
  public barChartData2: ChartDataSets[] = [

    { barThickness: 24, barPercentage: 1, data: [84,297,634,993,1400], label: 'Y16' ,
    backgroundColor: "#ffbb33",
    hoverBackgroundColor:"#e5a82d"
  },
    

  ];











  public barChartOptions3: ChartOptions = {
    responsive: true,
    hover:{
      animationDuration:0
    },
    legend: {
      display: false,
  },
  tooltips: {
    enabled: false,
  },

  scales: {
    xAxes: [{

      gridLines: {
        display: false
      },
      ticks: {
        //beginAtZero: true
      }
    }],
    yAxes: [{
      
      display: false,
      gridLines: {
        display: false
      },

      ticks: {
        min: -2000,
        max: 2000,
        display: false,
      }
    }],
 }

  };

    

  public barChartLabels3: Label[] = ['Y16', 'Y17', 'Y18', 'Y19', 'Y20'];

  public barChartType3: ChartType = 'bar';

  public barChartLegend3 = true;

    
  public barChartData3: ChartDataSets[] = [

    { barThickness: 24, barPercentage: 1, data: [-500,297,634,-993,1400], label: 'Y16', backgroundColor: ["#ed1d24", "#2ecc71", "#2ecc71", "#ed1d24", "#2ecc71"],
    hoverBackgroundColor: ["#D51A20", "#29B765", "#29B765", "#D51A20", "#29B765"]},
    

  ];

    
  public doughnutChartLabels: Label[] = [
    'Students in EG 68% ($780K)',
    'SMEs in EG 32% ($1.8M)',
    'Sponsors in EG <1% ($30K)',
    'Sponsors in UAE <1% ($60K)',
  ];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    hover:{
      animationDuration:0
    },
  


  };

  public doughnutChartData: MultiDataSet = [
    [780, 297, 400, 350],
 
  ];
  public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

    

  ngOnInit() {

  }

  

}