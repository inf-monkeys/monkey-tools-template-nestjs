import { BlockDefProperties } from '@inf-monkeys/vines';
import { Method } from 'axios';

export enum AuthType {
  none = 'none',
  service_http = 'service_http',
}

export enum ApiType {
  openapi = 'openapi',
}

export enum SchemaVersion {
  v1 = 'v1',
}

export enum CredentialAuthType {
  AKSK = 'AKSK',
  OAUTH2 = 'OAUTH2',
  QRCODE = 'QRCODE',
}

export interface CredentialDefinition {
  trigger?: boolean;
  name: string;
  displayName: string;
  properties: BlockDefProperties[];
  logo: string;
  type: CredentialAuthType;
}

export interface TriggerDefinition {
  description: string;
  displayName: string;
  properties: BlockDefProperties[];
  icon: string;
  type: string;
  workflowInputs: BlockDefProperties[];
}

export interface AuthConfig {
  type: AuthType;
  authorization_type?: 'bearer';
  verification_tokens?: { [x: string]: string };
}

export enum TriggerEndpointType {
  create = 'create',
  update = 'update',
  delete = 'delete',
}

export interface TriggerEndpointConfig {
  type: TriggerEndpointType;
  url: string;
  method: Method;
}

export interface ManifestJson {
  schema_version: SchemaVersion;
  display_name: string;
  namespace: string;
  auth: AuthConfig;
  api: {
    type: ApiType;
    url: string;
  };
  contact_email: string;
  triggerEndpoints?: TriggerEndpointConfig[];
  triggers?: TriggerDefinition[];
  credentials?: CredentialDefinition[];
  credentialEncryptKey?: string;
}
