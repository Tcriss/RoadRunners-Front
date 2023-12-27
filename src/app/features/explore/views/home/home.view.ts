import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss']
})
export class HomeView {
  articlesCount = -8;
 
  readonly items = [
    { name: 'Carro1', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-vB74hrPmTPg%2FUSg61t6EEHI%2FAAAAAAAA3-Y%2FVuIWLF-GYHk%2Fs1600%2FChevrolet-Camaro-ZL1-Blanco_Fondos-de-Pantalla-de-Carros-Deportivos.jpg&f=1&nofb=1&ipt=3917ac3dd97040a41b4d9edd9328469a82a66399fe78c912a4ede783e7be2c36&ipo=images'},
    { name: 'carro2', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-FIwny7N4ecc%2FU6zuB5hZ68I%2FAAAAAAAAGWg%2F5kUmkmFEujY%2Fs1600%2FAutoWallpaper_part_160059.jpg&f=1&nofb=1&ipt=897c8bb91082e05b1d07aeeaaa9f29b357e0e6becc52ddfe261e621df7e1020d&ipo=images' },
    { name: 'Carro2', img: 'https://cdn.autopapo.com.br/box/uploads/2019/04/04132929/volkswagen_gol_power_25-1103x827.jpg' },
    { name: 'Carro4', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-wj4c26_IqWs%2FT107sfkD_8I%2FAAAAAAAAWNo%2Fix60UzOcS4E%2Fs1600%2FImagenes-de-Carros-Deportivos_01.jpg&f=1&nofb=1&ipt=4ac949eaa0d53cb788773943db0d9f2530b4236362b0234012c78930fe0fc379&ipo=images'}
  ];
}
