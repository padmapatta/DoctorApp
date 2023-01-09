import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctors } from '../models/doctors';
import { Testimonials } from '../models/testimonials';

@Injectable({
  providedIn: 'root'
})
export class BrandingService {

  constructor(private http:HttpClient) { }

  getDoctors():Observable<Doctors[]> {
    const doctors = [
      { name: 'Dr Rajeev Varma',  exp: '15 year of experience', specilization: 'Orthopedic Surgeon', qualification: 'Senior Consultant, MBBS', avatar: ''},
      { name: 'Dr Rajeev Varma',  exp: '15 year of experience', specilization: 'Orthopedic Surgeon', qualification: 'Senior Consultant, MBBS', avatar: ''},
      { name: 'Dr Rajeev Varma',  exp: '15 year of experience', specilization: 'Orthopedic Surgeon', qualification: 'Senior Consultant, MBBS', avatar: ''}  
    ];
    return of(doctors);
    // return this.http.get<Doctors[]>('');
  }

  getTestimonials(): Observable<Testimonials[]> {
    const testimonials = [
      { title: '', image: 'https://picsum.photos/id/466/900/500'},
      { title: '', image: 'https://picsum.photos/id/982/900/500'},
      { title: '', image: 'https://picsum.photos/id/83/900/500'},
      { title: '', image: 'https://picsum.photos/id/62/900/500'}
    ] ;
    return of(testimonials);
    // return this.http.get<Testimonials[]>('');
  }
}
