import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CoreBehaviourType } from '../../core';
import { CoreBehaviourTypeService } from '../core-behaviour-type.service';

@Component({
  selector: 'app-core-behaviour-types',
  templateUrl: './core-behaviour-types.component.html',
  styleUrls: ['./core-behaviour-types.component.scss']
})
export class CoreBehaviourTypesComponent implements OnInit {
  selected: CoreBehaviourType;
  coreBehaviourTypes: CoreBehaviourType[];
  loading: boolean;

  constructor(private coreBehaviourTypeService: CoreBehaviourTypeService) {}

  ngOnInit() {
    this.getCoreBehaviourTypes();
  }

  add(coreBehaviourType: CoreBehaviourType) {
    this.loading = true;
    this.coreBehaviourTypeService
      .add(coreBehaviourType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedCoreBehaviourType => (this.coreBehaviourTypes = this.coreBehaviourTypes.concat(addedCoreBehaviourType)));
  }

  close() {
    this.selected = null;
  }

  delete(coreBehaviourType: CoreBehaviourType) {
    this.loading = true;
    this.close();
    this.coreBehaviourTypeService
      .delete(coreBehaviourType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.coreBehaviourTypes = this.coreBehaviourTypes.filter(h => h.id !== coreBehaviourType.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCoreBehaviourTypes() {
    this.loading = true;
    this.coreBehaviourTypeService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(coreBehaviourTypes => (this.coreBehaviourTypes = coreBehaviourTypes));
    this.close();
  }

  select(coreBehaviourType: CoreBehaviourType) {
    this.selected = coreBehaviourType;
  }

  update(coreBehaviourType: CoreBehaviourType) {
    this.loading = true;
    this.coreBehaviourTypeService
      .update(coreBehaviourType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.coreBehaviourTypes = this.coreBehaviourTypes.map(h => (h.id === coreBehaviourType.id ? coreBehaviourType : h)))
      );
  }
}
