import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  contentBanner!: string
  contentTitle!: string
  contentDesc!: string ;
  private id!: string | null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((v) => (this.id = v.get('id')));
    this.setValues(this.id)
  }

  setValues(id: string | null) {
    const res = fakeData.filter(a => a.id == id)[0]
    if(res){
      this.contentBanner = res.img
      this.contentTitle = res.title
      this.contentDesc = res.desc
    }
  }
}
