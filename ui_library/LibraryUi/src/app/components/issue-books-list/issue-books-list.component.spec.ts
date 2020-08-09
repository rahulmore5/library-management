import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBooksListComponent } from './issue-books-list.component';

describe('IssueBooksListComponent', () => {
  let component: IssueBooksListComponent;
  let fixture: ComponentFixture<IssueBooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueBooksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
