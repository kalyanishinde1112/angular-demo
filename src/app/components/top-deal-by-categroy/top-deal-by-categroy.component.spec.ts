import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealByCategroyComponent } from './top-deal-by-categroy.component';

describe('TopDealByCategroyComponent', () => {
  let component: TopDealByCategroyComponent;
  let fixture: ComponentFixture<TopDealByCategroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealByCategroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealByCategroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
