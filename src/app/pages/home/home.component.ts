import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit{

  dataCards: any;

  constructor(){}

  async ngOnInit(){  

    fetch('assets/front-end-mentor-files/data/card_data.json')
    .then(res => res.json())
    .then(data =>  this.dataCards =  data.map((el:any) => {
      return el;
    })) 
    .catch((err) => console.error(`Error ao pega os dados: ${err} `)); 
  }

}
