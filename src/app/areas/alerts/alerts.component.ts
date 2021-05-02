import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alert } from './alerts.model';


@Component({
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alertResponse: any;
  alertValues: Alert[] = [];
  sensorID: string | undefined;
  sensorList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.sensorID = String(this.route.snapshot.paramMap.get('id'));
    this.getList();
    this.getAlerts(this.sensorID);
  }

  getAlerts(id: string) {
    this.http.get("http://localhost:8080/api/v1/alerts/" + id).subscribe(result => {
      this.alertValues = [];
      this.alertResponse = result;
      for (var s in this.alertResponse) {
        this.alertValues.push({
          id: this.alertResponse[s].id,
          sensorID: this.alertResponse[s].sensorID,
          dataValue: this.alertResponse[s].dataValue,
          date: this.alertResponse[s].date
        });
      }
    });
  }

  getList() {
    this.http.get("http://localhost:8080/api/v1/sensors").subscribe(result => {
      this.alertResponse = result;
      for (var s in this.alertResponse) {
        if (!this.sensorList.find(x => x == this.alertResponse[s].sensorID)) {
          this.sensorList.push(this.alertResponse[s].sensorID);
        }
      }
    });
  }

  onChange(sensorID: string) {
    this.sensorID = sensorID;
    this.getAlerts(sensorID);
  }
}


