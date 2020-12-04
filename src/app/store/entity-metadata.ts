import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  TComment: {},
  TCoreBehaviour: {},
  TCoreBehaviourTemplate: {},
  TFileUpload: {},
  TGoalStatus: {},
  TGoal: {},
  TKpiComment: {},
  TKpi: {},
  TUserWithManager: {},
  TNote: {},
  TRating: {},
  TSetting: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { GoalStatus: 'GoalStatuses' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
