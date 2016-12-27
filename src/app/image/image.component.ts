import { Component, OnInit } from '@angular/core';
import {Image} from "./image.structure";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  public imageItems: Image[] = [];

  constructor() {
    setTimeout(() => {
      this.imageItems.push({
        id: 1,
        title: 'imagetitle',
        seo: 'asdfasdf',
        content: 'sadfdsaf',
        image: 'asdfadsf'
      })
    },100);
  }

  ngOnInit() {
  }

}

