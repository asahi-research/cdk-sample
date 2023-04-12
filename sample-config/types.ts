import { InstanceClass, InstanceSize } from "aws-cdk-lib/aws-ec2";

export type Config = {
  sample: SampleConfig,
};

type SampleConfig = {
  envName: string,
  instanceSize: InstanceSize,
  instanceClass: InstanceClass,
}