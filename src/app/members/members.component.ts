import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './members.component.html',
})
export class MembersComponent {}
