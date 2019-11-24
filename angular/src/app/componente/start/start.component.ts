import { Component, OnInit } from '@angular/core';
import { GameStartService } from 'src/app/shared/game-start.service';

import {F} from '../../shared/batlle.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  vsSearch = false;
  myGameDaten;

  constructor(private gameStartService: GameStartService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {

  }

  gameStart(){
    this.vsSearch=true;
    console.log('llllllllll')
    this.gameStartService.getPlay().subscribe((res) =>{

      this.myGameDaten = res  ;
      console.log(this.myGameDaten.player1.id)
      // console.log(this.myGameDaten._id)
      if (this.myGameDaten.player1.id !== '' && this.myGameDaten.player2.id !== ''){
        // let myId:string;

        localStorage.setItem('myId',this.myGameDaten.player2.id)
        this.router.navigate([`/${this.myGameDaten.player2.id}`])

      }
      else {

        setInterval(()=>{
          this.gameStartService.getWaiting(this.myGameDaten).subscribe((res)=>{
            this.myGameDaten = res  ;
            console.log(this.myGameDaten)
              if (this.myGameDaten.player1.id !== '' && this.myGameDaten.player2.id !== ''){
                // let myId:string;
                localStorage.setItem('myId',this.myGameDaten.player1.id)
                this.router.navigate([`/${this.myGameDaten.player1.id}`])

              }
          })
        },1000)
      }
    })
  }
}
