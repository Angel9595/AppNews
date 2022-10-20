import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

constructor(private http :HttpClient) { }


apiKey ='827406d6c47b4cb696921e43387aa80e';


getNews(parametros: any):Observable<any>{
  const URL ='https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=827406d6c47b4cb696921e43387aa80e';
   return this.http.get(URL);
}

}
