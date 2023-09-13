import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallecard',
  templateUrl: './detallecard.page.html',
  styleUrls: ['./detallecard.page.scss'],
})
export class DetallecardPage implements OnInit {

  digimon: any;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute // CAPTURA DATA DE LA URL
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get(`id`);
    this.httpClient.get(`https://www.digi-api.com/api/v1/digimon/${id}`)
    .subscribe((data:any) => {
      this.digimon = data;
      console.log(this.digimon)
    });
  }

}
