// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const uptimecheckserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v3.UptimeCheckServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      uptimecheckserviceModule.v3.UptimeCheckServiceClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      uptimecheckserviceModule.v3.UptimeCheckServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = uptimecheckserviceModule.v3.UptimeCheckServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.uptimeCheckServiceStub, undefined);
    await client.initialize();
    assert(client.uptimeCheckServiceStub);
  });
  it('has close method', () => {
    const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('getUptimeCheckConfig', () => {
    it('invokes getUptimeCheckConfig without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IGetUptimeCheckConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getUptimeCheckConfig(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getUptimeCheckConfig with error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IGetUptimeCheckConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getUptimeCheckConfig(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createUptimeCheckConfig', () => {
    it('invokes createUptimeCheckConfig without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.ICreateUptimeCheckConfigRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createUptimeCheckConfig(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createUptimeCheckConfig with error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.ICreateUptimeCheckConfigRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createUptimeCheckConfig(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('updateUptimeCheckConfig', () => {
    it('invokes updateUptimeCheckConfig without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IUpdateUptimeCheckConfigRequest = {};
      request.uptimeCheckConfig = {};
      request.uptimeCheckConfig.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateUptimeCheckConfig(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateUptimeCheckConfig with error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IUpdateUptimeCheckConfigRequest = {};
      request.uptimeCheckConfig = {};
      request.uptimeCheckConfig.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateUptimeCheckConfig(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('deleteUptimeCheckConfig', () => {
    it('invokes deleteUptimeCheckConfig without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IDeleteUptimeCheckConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteUptimeCheckConfig(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteUptimeCheckConfig with error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IDeleteUptimeCheckConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteUptimeCheckConfig(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('listUptimeCheckConfigs', () => {
    it('invokes listUptimeCheckConfigs without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListUptimeCheckConfigsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckConfigs = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listUptimeCheckConfigs(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listUptimeCheckConfigsStream', () => {
    it('invokes listUptimeCheckConfigsStream without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListUptimeCheckConfigsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckConfigs = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listUptimeCheckConfigsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listUptimeCheckIps', () => {
    it('invokes listUptimeCheckIps without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListUptimeCheckIpsRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckIps = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listUptimeCheckIps(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listUptimeCheckIpsStream', () => {
    it('invokes listUptimeCheckIpsStream without error', done => {
      const client = new uptimecheckserviceModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListUptimeCheckIpsRequest = {};
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckIps = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listUptimeCheckIpsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});