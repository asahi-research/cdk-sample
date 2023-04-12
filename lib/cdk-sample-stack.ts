import { Construct } from "constructs";
import {
  Stack,
  StackProps,
  aws_ec2 as ec2,
} from "aws-cdk-lib";
import { Config } from "../sample-config/types";

interface SampleStackProps extends StackProps {
  config: Config;
}

export class SampleStack extends Stack {
  constructor(scope: Construct, id: string, props: SampleStackProps) {
    super(scope, id, props);
    const sampleConfig = props.config.sample;

    const my_vpc = new ec2.Vpc(this, `${sampleConfig.envName}-vpc}`, {
      ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/24"),
      enableDnsHostnames: true,
      enableDnsSupport: true,
      natGateways: 1,
      maxAzs: 1,
      subnetConfiguration: [
        { name: "Private", subnetType: ec2.SubnetType.PUBLIC, cidrMask: 28 },
      ],
    });

    const my_ec2 = new ec2.Instance(this, `${sampleConfig.envName}-ec2`, {
      vpc: my_vpc,
      instanceName: `${sampleConfig.envName}-ec2`,
      machineImage: ec2.MachineImage.latestAmazonLinux(),
      instanceType: ec2.InstanceType.of(
          sampleConfig.instanceClass,
          sampleConfig.instanceSize,
      )
    })
  }
}