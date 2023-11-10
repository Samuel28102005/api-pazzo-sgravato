import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Daum, Root } from '../yu-gi-oh_module';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mazzo',
  templateUrl: './mazzo.component.html',
  styleUrls: ['./mazzo.component.css']
})
export class MazzoComponent {
  yuu !: string
  obsyuu !: Observable <Root>
  ris!:Root
  b: Daum[]=[];
  
  constructor(public http:HttpClient, private route:ActivatedRoute){
    this.route.paramMap.subscribe(this.funzione)
  
  }
  funzione=(params:ParamMap)=>{
    this.yuu = params.get('id')
    this.obsyuu=this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${{this.yuu}}')
    this.obsyuu.subscribe((data:Root))=>{this.ris=data})
  }
}
