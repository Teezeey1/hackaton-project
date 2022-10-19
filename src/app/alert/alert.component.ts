import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.component.service';
import { Model } from './alert.component.repsonsemode';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private alertService:AlertService) { }

  _searchTextCounty="";

  get serachTextCounty():string{
    return this._searchTextCounty;
  }

  set searchTextCounty(str:string){
    this._searchTextCounty=str;
    // console.log("In setter: "+str);
  }

  //get an array to store it
  info:Model[] = [];
  lastEntry="";

  handleClick(){
    this.alertService.getCovidInfoCounty(this._searchTextCounty).subscribe(
      info=>{this.info = info;
      //get last entry on info, aka with the newest date
      this.lastEntry=this.info[this.info.length-1].covid_19_community_level;
      if(this.lastEntry=="High"){alert("Covid Community Level High, Please stay safe")} 
      else if (this.lastEntry=="Medium"){alert("Covid Community Level Medium, Please execuse caution")}
      else{alert("Covid Community Level Low, have fun shopping")}
      }
    );
  }

  ngOnInit(): void {

  }

}
