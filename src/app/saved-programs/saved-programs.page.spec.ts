import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedProgramsPage } from './saved-programs.page';

describe('SavedProgramsPage', () => {
  let component: SavedProgramsPage;
  let fixture: ComponentFixture<SavedProgramsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedProgramsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
