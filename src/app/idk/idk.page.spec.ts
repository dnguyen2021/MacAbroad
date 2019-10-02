import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDKPage } from './idk.page';

describe('IDKPage', () => {
  let component: IDKPage;
  let fixture: ComponentFixture<IDKPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDKPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDKPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
