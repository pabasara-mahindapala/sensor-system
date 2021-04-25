import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const CanvasJS: any;


interface SensorValue {
  x: Date;
  y: number;
}

@Component({
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  sensorResponse: any;
  sensorValues: SensorValue[] = [];
  sensorID: string | undefined;
  sensorList: string[] = [];
  chart: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.sensorID = String(this.route.snapshot.paramMap.get('id'));
    this.getList();
    this.fillChart(this.sensorID);
  }

  fillChart(id: string) {
    this.http.get("http://localhost:8080/api/v1/sensors/" + id).subscribe(result => {
      this.sensorValues = [];
      this.sensorResponse = result;
      for (var s in this.sensorResponse) {
        this.sensorValues.push({
          x: new Date(this.sensorResponse[s].date),
          y: this.sensorResponse[s].dataValue
        });
      }
      this.renderChart();
    });
  }

  getList() {
    this.http.get("http://localhost:8080/api/v1/sensors").subscribe(result => {
      this.sensorResponse = result;
      for (var s in this.sensorResponse) {
        if (!this.sensorList.find(x => x == this.sensorResponse[s].sensorID)) {
          this.sensorList.push(this.sensorResponse[s].sensorID);
        }
      }
    });
  }

  onChange(sensorID: string) {
    this.sensorID = sensorID;
    this.fillChart(sensorID);
    this.chart.title.set("text", sensorID);
  }

  renderChart() {
    this.chart = new CanvasJS.Chart("chartContainer",
      {
        title: {
          text: this.sensorID
        },

        axisX: {
          title: "Time",
          gridThickness: 1,
          interval: 10,
          intervalType: "minute",
          valueFormatString: "hh:MM",
          labelAngle: -90
        },
        axisY: {
          title: "Reading"
        },
        data: [
          {
            type: "line",
            dataPoints: this.sensorValues
          }
        ]
      });


    this.chart.render();
  }
}


