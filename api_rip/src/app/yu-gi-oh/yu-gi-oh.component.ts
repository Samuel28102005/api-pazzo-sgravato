import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Daum, Root } from '../yu-gi-oh_module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-yu-gi-oh',
  templateUrl: './yu-gi-oh.component.html',
  styleUrls: ['./yu-gi-oh.component.css']
})
export class YuGiOhComponent {
yuu !: string
obsyuu !: Observable <Root>
ris!:Root
b: Daum[]=[];

constructor(public http:HttpClient){

}
yu1(yuu:HTMLInputElement){
  this.yuu = yuu.value
  this.obsyuu = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/${this.yuu}')
  this.obsyuu.subscribe((data:Root)=>{this.b=data.data})
}

}
