import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalNiveauDebloqueComponent } from './modal-niveau-debloque.component';

describe('ModalNiveauDebloqueComponent', () => {
  let component: ModalNiveauDebloqueComponent;
  let fixture: ComponentFixture<ModalNiveauDebloqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNiveauDebloqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNiveauDebloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
