import { Component } from '@angular/core';
import { Doctors } from 'src/app/models/doctors';
import { Testimonials } from 'src/app/models/testimonials';
import { BrandingService } from 'src/app/services/branding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  testimonials: Testimonials[] = [] ;
  doctors: Doctors[] = [] ;

  constructor(private brandingService: BrandingService) {
    this.brandingService.getDoctors().subscribe( res => {
      this.doctors = res ;
    });
    this.brandingService.getTestimonials().subscribe( res => {
      this.testimonials = res ;
    });
  }
}
