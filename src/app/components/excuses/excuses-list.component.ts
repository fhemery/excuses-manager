import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excuses-list',
  templateUrl: './excuses-list.component.html',
  styleUrls: ['./excuses-list.component.scss'],
})
export class ExcusesListComponent implements OnInit {
  excuses: string[] = [];
  selectedExcuse: string = '';

  ngOnInit(): void {
    this.excuses.push("Je ne pouvais pas j'avais poney");
    this.excuses.push(`Le réveil n'a pas sonné`);
    this.excuses.push(`J'aurais pu, mais j'avais pas une envie`);
  }

  setSelected(excuse: any) {
    this.selectedExcuse = excuse;
  }
}
