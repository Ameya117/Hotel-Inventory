import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms:RoomList[]=[]  //props

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void { 
   
   
  }


  constructor() { }
}
