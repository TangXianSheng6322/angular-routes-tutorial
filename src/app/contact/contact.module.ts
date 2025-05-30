import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, ContactComponent],
  exports: [ContactComponent, ReactiveFormsModule],
})
export class ContactModule {}
