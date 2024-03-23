import * as express from 'express';

export interface IRequest extends express.Request {
  appId: string;
  userId: string;
  teamId: string;
  workflowInstanceId: string;
}
