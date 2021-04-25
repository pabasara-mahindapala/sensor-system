import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const CanvasJS: any;

@Component({
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    var chart = new CanvasJS.Chart("chartContainer",
      {
        title: {
          text: "Outdoor temperature"
        },

        axisX: {
          title: "Time",
          gridThickness: 2,
          interval: 2,
          intervalType: "hour",
          valueFormatString: "YY.MM.DD hh:MM",
          labelAngle: -20
        },
        axisY: {
          title: "Reading"
        },
        data: [
          {
            type: "line",
            dataPoints: [//array
              { x: new Date(Date.UTC(2012, 1, 1, 1, 0)), y: 26 },
              { x: new Date(Date.UTC(2012, 1, 1, 2, 0)), y: 38 },
              { x: new Date(Date.UTC(2012, 1, 1, 3, 0)), y: 43 },
              { x: new Date(Date.UTC(2012, 1, 1, 4, 0)), y: 29 },
              { x: new Date(Date.UTC(2012, 1, 1, 5, 0)), y: 41 },
              { x: new Date(Date.UTC(2012, 1, 1, 6, 0)), y: 54 },
              { x: new Date(Date.UTC(2012, 1, 1, 7, 0)), y: 66 },
              { x: new Date(Date.UTC(2012, 1, 1, 8, 0)), y: 60 },
              { x: new Date(Date.UTC(2012, 1, 1, 9, 0)), y: 53 },
              { x: new Date(Date.UTC(2012, 1, 1, 10, 0)), y: 60 }
            ]
          }
        ]
      });

    chart.render();
  }
}


