import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  term = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onFormSubmit(e): void {
    e.preventDefault();
    this.submitted.emit(this.term);
  }
}
