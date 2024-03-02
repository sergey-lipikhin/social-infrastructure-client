import { httpClient } from '@client/httpClient';
import {
  MakeExperimentInputPayload,
  MakeExperimentOutputPayload,
  GetExperimentOutputPayload,
} from '@cutomTypes/api/experiment';

async function makeExperiment(
  payload: MakeExperimentInputPayload,
): Promise<MakeExperimentOutputPayload> {
  return httpClient.post('/experiment', payload);
}

async function getAll(): Promise<GetExperimentOutputPayload> {
  return httpClient.get('/experiment');
}

async function deleteExperiment(id: number): Promise<void> {
  return httpClient.delete(`/experiment/${id}`);
}

export const experimentService = {
  makeExperiment,
  getAll,
  deleteExperiment,
};
