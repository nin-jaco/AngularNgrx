import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CoreBehaviour } from '../../core';
import { CoreBehaviourService } from '../core-behaviour.service';

@Component({
  selector: 'app-core-behaviours',
  templateUrl: './core-behaviours.component.html',
  styleUrls: ['./core-behaviours.component.scss']
})
export class CoreBehavioursComponent implements OnInit {
  selected: CoreBehaviour;
  coreBehaviours: CoreBehaviour[];
  loading: boolean;

  constructor(private coreBehaviourService: CoreBehaviourService) {}

  ngOnInit() {
    this.getCoreBehaviours();
  }

  add(coreBehaviour: CoreBehaviour) {
    this.loading = true;
    this.coreBehaviourService
      .add(coreBehaviour)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedCoreBehaviour => (this.coreBehaviours = this.coreBehaviours.concat(addedCoreBehaviour)));
  }

  close() {
    this.selected = null;
  }

  delete(coreBehaviour: CoreBehaviour) {
    this.loading = true;
    this.close();
    this.coreBehaviourService
      .delete(coreBehaviour)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.coreBehaviours = this.coreBehaviours.filter(h => h.id !== coreBehaviour.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCoreBehaviours() {
    this.loading = true;
    this.coreBehaviourService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(coreBehaviours => (this.coreBehaviours = coreBehaviours));
    this.close();
  }

  select(coreBehaviour: CoreBehaviour) {
    this.selected = coreBehaviour;
  }

  update(coreBehaviour: CoreBehaviour) {
    this.loading = true;
    this.coreBehaviourService
      .update(coreBehaviour)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.coreBehaviours = this.coreBehaviours.map(h => (h.id === coreBehaviour.id ? coreBehaviour : h)))
      );
  }
}
