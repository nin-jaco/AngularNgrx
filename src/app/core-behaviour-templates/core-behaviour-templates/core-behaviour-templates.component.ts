import { Component, OnInit } from '@angular/core';
import { TCoreBehaviourTemplate } from '@app/core/model/TCoreBehaviourTemplate';
import { finalize } from 'rxjs/operators';
import { CoreBehaviourTemplateService } from '../core-behaviour-template.service';

@Component({
  selector: 'app-core-behaviour-templates',
  templateUrl: './core-behaviour-templates.component.html',
  styleUrls: ['./core-behaviour-templates.component.scss']
})
export class CoreBehaviourTemplatesComponent implements OnInit {
  selected: TCoreBehaviourTemplate;
  coreBehaviourTemplates: TCoreBehaviourTemplate[];
  loading: boolean;

  constructor(
    private coreBehaviourTemplateService: CoreBehaviourTemplateService
  ) {}

  ngOnInit() {
    this.geTCoreBehaviourTemplates();
  }

  add(coreBehaviourTemplate: TCoreBehaviourTemplate) {
    this.loading = true;
    this.coreBehaviourTemplateService
      .add(coreBehaviourTemplate)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        addedcoreBehaviourTemplate =>
          (this.coreBehaviourTemplates = this.coreBehaviourTemplates.concat(
            addedcoreBehaviourTemplate
          ))
      );
  }

  close() {
    this.selected = null;
  }

  delete(coreBehaviourTemplate: TCoreBehaviourTemplate) {
    this.loading = true;
    this.close();
    this.coreBehaviourTemplateService
      .delete(coreBehaviourTemplate)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.coreBehaviourTemplates = this.coreBehaviourTemplates.filter(
            h => h.id !== coreBehaviourTemplate.id
          ))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  geTCoreBehaviourTemplates() {
    this.loading = true;
    this.coreBehaviourTemplateService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        coreBehaviourTemplates =>
          (this.coreBehaviourTemplates = coreBehaviourTemplates)
      );
    this.close();
  }

  select(coreBehaviourTemplate: TCoreBehaviourTemplate) {
    this.selected = coreBehaviourTemplate;
  }

  update(coreBehaviourTemplate: TCoreBehaviourTemplate) {
    this.loading = true;
    this.coreBehaviourTemplateService
      .update(coreBehaviourTemplate)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.coreBehaviourTemplates = this.coreBehaviourTemplates.map(h =>
            h.id === coreBehaviourTemplate.id ? coreBehaviourTemplate : h
          ))
      );
  }
}
