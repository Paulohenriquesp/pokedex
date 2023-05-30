import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private setAllPokemons: any;
  public getAllpokemons: any;  

  constructor(private pokeApiService: PokeApiService ) {}
  
  ngOnInit(): void {
    this.allPokemons();
  }


  public allPokemons(){
    this.pokeApiService.apiListAllPokemons().subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllpokemons = this.setAllPokemons;

      console.log(this.getAllpokemons, this.setAllPokemons)
    })
  }
  

}
