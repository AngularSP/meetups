import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toJpeg, toPng } from 'html-to-image';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MeetupService } from '../meetup.service';
import { slugfy } from './../../utils/slugify';

type ImageSize = 'Instagram' | 'Facebook' | 'Linkedin';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public data$: Observable<any>;
  public talkIdx = 0;
  imageSize: ImageSize = 'Linkedin';
  bannerName: string;

  @ViewChild('banner') banner!: ElementRef;

  constructor(
    private meetupService: MeetupService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const meetupId = this.router.snapshot.params.id;
    this.talkIdx = this.router.snapshot.params.talk - 1;

    this.data$ = this.meetupService.getEvents().pipe(
      map((data) => data.find(item => item.id === +meetupId)),
      tap(item => {
        this.bannerName = slugfy(item?.talks[this.talkIdx]?.title);
      })
    );
  }

  getBackGroundColor(data): string {
    return `linear-gradient(145deg,${data.primaryColor},${data.secondaryColor})`;
  }

  downloadImage(type: 'png' | 'jpeg'): void {
    switch (type) {
      case 'png':
        return this.savePng();
      case 'jpeg':
        return this.saveJpeg();
    }
  }

  selectImageSize(size: ImageSize): void {
    this.imageSize = size;
  }

  private savePng(): void {
    toPng(this.banner.nativeElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${this.bannerName}-${this.imageSize}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private saveJpeg(): void {
    toJpeg(this.banner.nativeElement, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${this.bannerName}-${this.imageSize}.jpeg`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
