import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataBase } from '../../data/database'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit{
  contentTitle: string = '';
  contentDesciption: string = '';
  photoCover: string = '';
  private id: string | null = '0'

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))
    this.setValuesToComponet(this.id)
  }

  setValuesToComponet(id: string | null) {
    const result = dataBase.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.contentDesciption = result.description
    this.photoCover = result.photo
  }
}
