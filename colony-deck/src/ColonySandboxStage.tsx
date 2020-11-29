import React from 'react';

import {
  ExecutionDetailsTasks,
  IStageTypeConfig,
} from '@spinnaker/core';

import { ColonySandboxStageExecutionDetails } from './ColonySandboxStageExecutionDetails';
import { ColonySandboxStageConfig,validate } from './ColonySandboxStageConfig';


/*
  Define Spinnaker Stages with IStageTypeConfig.
  Required options: https://github.com/spinnaker/deck/master/app/scripts/modules/core/src/domain/IStageTypeConfig.ts
  - label -> The name of the Stage
  - description -> Long form that describes what the Stage actually does
  - key -> A unique name for the Stage in the UI; ties to Orca backend
  - component -> The rendered React component
  - validateFn -> A validation function for the stage config form.
 */
export const colonySandboxStage: IStageTypeConfig = {
  key: 'colonySandbox',
  label: `Colony Sandbox`,
  description: 'Colony Sandbox Stage',
  component: ColonySandboxStageConfig, // stage config
  executionDetailsSections: [ColonySandboxStageExecutionDetails, ExecutionDetailsTasks],
  validateFn: validate,
};
