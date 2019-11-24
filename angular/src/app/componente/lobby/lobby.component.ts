import { Component, OnInit } from '@angular/core';
import { GameStartService } from 'src/app/shared/game-start.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LobbyService } from 'src/app/shared/lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  localStorage = localStorage.getItem('myId')

  daten$=1

  constructor(private lobbyStartService: LobbyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.daten$=this.lobbyStartService.getLobby().subscribe((res)=>{

    // })
  }

}
