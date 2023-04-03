import { Component, ElementRef, OnInit, Optional, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  @ViewChild('verseNode')
  verseChoice!: ElementRef;
  status: string = "";
  context: string = "";

  private routeSub: any;
  chapter: any;

  versesTable: any[] = [];
  shuffledVerses: any[] = [];
  verseAnswers: any[] = [];

  constructor(@Optional() private dialogRef: NbDialogRef<any>,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private _backendService: BackendService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this._backendService.getChapterByID(params['id']).subscribe(data => {
        this.chapter = data.chapter;
      });
      this._backendService.getVersesByChapter(params['id']).subscribe(data => {
        data.verses.forEach((element: any) => {
          element.words.forEach((item: any) => {
            this.versesTable.push(item.text);
            this.shuffledVerses.push(item.text);
          });
        });
        this.shuffledVerses = this.shuffleFn(this.shuffledVerses);
      })
    });
  }

  //hide Basmala from Surat Al-Fatiha and Tawbah 
  isStartingWithBasmala(id: number): boolean {
    if (id == 1 || id == 9) return false;
    return true;
  }

  // randomizing verses and returning the array 
  shuffleFn(array: any[]) {
    return array.sort(() => 0.5 - Math.random());
  }

  //on verse click => must build the chapter from right to left and diactivate the button !
  verseClick(verse: any) {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = verse;
    p.style.margin = "5px";
    p.style.marginBottom = "6rem"
    p.style.fontSize = "2rem";
    p.style.fontFamily = "Amiri"
    this.renderer.appendChild(this.verseChoice.nativeElement, p);

    this.shuffledVerses.splice(this.shuffledVerses.indexOf(verse), 1);
    this.verseAnswers.push(verse);
  }

  //redo an answer 
  redoClick() {
    let lastChild;

    Array.from(this.verseChoice.nativeElement.children).forEach(child => {
      lastChild = child;
    });

    this.renderer.removeChild(this.verseChoice.nativeElement, lastChild);
    this.shuffledVerses.push(this.verseAnswers.pop());

  }

  //check if the chapter is correct 
  checkChapter(dialog: TemplateRef<any>) {
    if (JSON.stringify(this.versesTable) === JSON.stringify(this.verseAnswers)) {
      this.onSuccess();
    } else {
      this.onFailure();
    }

    this.dialogService.open(dialog, { context: this.context });
  }

  onSuccess() {
    this.status = "success";
    this.context = "أكملت السورة بنجاح";
  }

  onFailure() {
    this.status = "warning"
    this.context = "حاول من جديد"
  }

  reloadPage() {
    window.location.reload();
  }
}
