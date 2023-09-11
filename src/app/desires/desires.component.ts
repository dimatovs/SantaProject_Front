import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { DesireDTO } from 'src/dto/desire.dto';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-desires',
  templateUrl: './desires.component.html',
  styleUrls: ['./desires.component.scss']
})
export class DesiresComponent implements OnInit{

  currentEditDesire: DesireDTO = {
    id: 0,
    title: '',
    description: ''
  };

  desires: DesireDTO[] = []; 
  newDesires: DesireDTO[] = [];

  constructor(private httpClient: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.httpClient.get<DesireDTO[]>('http://localhost:8080/desires/getDesires').subscribe((result) => (this.desires = result));
  }

  addNewDesire(title: string) {
      
      const newDesire = {
        title
      } as DesireDTO
      this.newDesires.push(newDesire);
  }

  saveNewDesires() {
    if(this.newDesires.length > 0) {
      this.httpClient.post<void>('http://localhost:8080/desires/addDesires', this.newDesires).subscribe(() => {this.updateData(); this.newDesires = [];});
    }
  }

  updateData(): void {
      this.httpClient.get<DesireDTO[]>('http://localhost:8080/desires/getDesires').subscribe((result) => (this.desires = result));
  }

  deleteDesire(desire: DesireDTO): void {
    this.httpClient.delete<void>(`http://localhost:8080/desires/deleteDesire/${desire.id}`).subscribe(() => this.updateData());
  }

  openEdit(editDesireModal: TemplateRef<any>, desire: DesireDTO): void {
		this.modalService.open(editDesireModal, { size: 'sm' });
    this.currentEditDesire = desire;
	}

  saveEditDesire(title: string, editDesireModal: NgbModalRef): void {
    this.currentEditDesire.title = title;
    this.httpClient.post<void>('http://localhost:8080/desires/updateDesire', this.currentEditDesire).subscribe(() => this.updateData());
    editDesireModal.close();
  }
}
