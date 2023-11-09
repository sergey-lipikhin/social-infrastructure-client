import { httpClient } from '@client/httpClient';
import {
  ExperimentInputPayload,
  ExperimentOutputPayload,
} from '@cutomTypes/api/experiment';

async function makeExperiment(
  payload: ExperimentInputPayload,
): Promise<ExperimentOutputPayload> {
  return httpClient.post('/experiment', payload);
}

export const experimentService = {
  makeExperiment,
};
