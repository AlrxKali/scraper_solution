import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() 
  search:any;
  SearchId?: string;
  search_term?: string;
  quantity?: number;

  ngOnInit(): void {
    // this.SearchId=this.search.SearchId;
    // this.SearchName=this.search.SearchName;
    // this.SearchQuantity=this.search.SearchQuantity;
  }

  searchTerm(){
    var val = {SearchId:this.SearchId,
                search_term:this.search_term,
                quantity:this.quantity};
    this.service.startSearch(val).subscribe(res=>{
    alert(res.toString());
    });
    }
}
