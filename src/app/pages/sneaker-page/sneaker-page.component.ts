import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/class/sneaker';
import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';
import { RouterService } from 'src/app/services/router.service';
// import puppeteer from 'puppeteer';

@Component({
  selector: 'app-sneaker-page',
  templateUrl: './sneaker-page.component.html',
  styleUrls: ['./sneaker-page.component.scss']
})
export class SneakerPageComponent implements OnInit {

  sneaker: Sneaker;
  resellPrice: string;

  constructor(
    private readonly APISneakerDatabase: APISneakerDatabaseService,
    private readonly route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.sneaker = await this.APISneakerDatabase.getSneaker(id);

    // Appelle la fonction getData() et affichage les données retournées
    // this.getData().then(value => {
    //   console.log(value)
    // })
  }

  // async getData() {
  //   // 1 - Créer une instance de navigateur
  //   const browser = await puppeteer.launch({ headless: false })
  //   const page = await browser.newPage()

  //   // 2 - Naviguer jusqu'à l'URL cible
  //   await page.goto('http://books.toscrape.com/')
  //   await page.click(
  //     '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img',
  //   )
  //   await page.waitFor(1000) // fait une pause d'une seconde

  //   // 3 - Récupérer les données
  //   const result = await page.evaluate(() => {
  //     let title = document.querySelector('h1').innerText
  //     let price = document.querySelector('.price_color')
  //     return { title, price }
  //   })

  //   // 4 - Retourner les données (et fermer le navigateur)
  //   browser.close()
  //   return result
  // }

}
