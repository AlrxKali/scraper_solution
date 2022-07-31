import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() search:any;
  SearchId?: string;
  SearchName?: string;
  SearchQuantity?: number;

  ngOnInit(): void {
    this.SearchId=this.search.SearchId;
    this.SearchName=this.search.SearchName;
    this.SearchQuantity=this.search.SearchQuantity;
  }

  searchTerm(){
    var val = {SearchId:this.SearchId,
               SearchName:this.SearchName,
               SearchQuantity:this.SearchQuantity}
    this.service.startSearch(val).subscribe(res=>alert(res.toString()))
  }

}
