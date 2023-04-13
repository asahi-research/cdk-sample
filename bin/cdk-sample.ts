#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleStack } from '../lib/cdk-sample-stack';
import { config as devConfig } from '../sample-config/dev'
import { config as prodConfig } from '../sample-config/prod'

const app = new cdk.App();

new SampleStack(
  app,
  'SampleStackDev',
  {
    config: devConfig,
    env: {
      region: 'ap-northeast-1'
    }
  }
),
new SampleStack(
  app,
  'SampleStackProd',
  {
    config: prodConfig,
    env: {
      region: 'ap-northeast-1'
    }
  }
);