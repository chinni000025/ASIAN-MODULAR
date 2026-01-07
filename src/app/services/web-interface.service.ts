// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";
// @Injectable({
//     providedIn: 'root'
// })
// export class webInterfaceService {
//     private baseUrl = "http://localhost:7155/asian-modular";
//     constructor(private httpClient: HttpClient) { }

//     post<T>(endpoint: any, payload: any): Observable<T> {
//         return this.httpClient.post<T>(`${this.baseUrl}/${endpoint}`, payload, { headers: this.getHeaders() })
//     }
//     getHeaders() {
//         var token = localStorage.getItem('accessToken');
//         let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//         if (token)
//             headers = headers.set('Authorization', `Bearer ${token}`);
//         return headers
//     }
// }