import { EntityMetadataMap } from 'ngrx-data';
import { CoreBehaviourComment, KpiComment } from '../core';

const entityMetadata: EntityMetadataMap = {
  CoreBehaviourComment: {},
  CoreBehaviourType:{},
  CoreBehaviour:{},
  FileUpload:{},
  GoalStatus:{},
  Goal:{},
  KpiComment:{},
  Kpi:{},
  Manager:{},
  Note:{},
  Period:{},
  QuarterType:{},
  Rating:{},
  StatusType:{}
};

// because the plural of "hero" is not "heros"
const pluralNames = { GoalStatus: 'GoalStatuses' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};