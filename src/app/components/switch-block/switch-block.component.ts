import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-switch-block',
  templateUrl: './switch-block.component.html',
  styleUrls: ['./switch-block.component.css']
})
export class SwitchBlockComponent implements OnInit {
  isRed = false;

  toggleRed() {
    this.isRed = !this.isRed;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
