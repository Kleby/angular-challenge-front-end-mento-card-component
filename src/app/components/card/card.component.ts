import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  title: string = "";

  @Input()
  description: string = "";

  @Input()
  cardIcon: string = "";

  @Input()
  colorCard: string = "";  

  @Input()
  isFirst: boolean  = false;

  @Input()
  isLast: boolean = false;

  constructor(){}
  ngOnInit(): void {

  }
}
