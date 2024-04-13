import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import {  format } from "date-fns";
import { RoomsListComponent } from './rooms-list/rooms-list.component';

format(new Date(2014, 1, 11), "yyyy-MM-dd");

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule,RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  numberOfRooms = 80;
  hideRooms = false;
  
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];
  ngOnInit(): void { 
   
    this.roomList = [
      {
        roomNumber:1,
        roomType: 'Single Bed',
        amenities: 'Air conditioner, Wifi,  Bathroom',
        price: 5000,
        photos: "random.jpg",
        checkInTime: new Date(2021,1,10),
        checkOutTime: new Date(2021,1,18),
  
      },
      {
        roomNumber:2,
        roomType: 'Double Bed',
        amenities: 'Air conditioner, Wifi,  Bathroom, Kitchen',
        price: 10000,
        photos: "random.jpg",
        checkInTime: new Date(2021,1,10),
        checkOutTime: new Date(2021,1,18),
      }, {
        roomNumber:3,
        roomType: 'Deluxe Room',
        amenities: 'Air conditioner, Wifi, 2 Bathroom, Kitchen',
        price: 15000,
        photos: "random.jpg",
        checkInTime: new Date(2021,5,5),
        checkOutTime: new Date(2021,6,5),
  
      }
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
