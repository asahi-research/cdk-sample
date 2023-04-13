import { InstanceClass, InstanceSize } from "aws-cdk-lib/aws-ec2";
import { Config} from "./types";

export const sampleConfig:Config["sample"] = {
    envName: 'dev',
    instanceSize: InstanceSize.SMALL,
    instanceClass: InstanceClass.BURSTABLE3
}

export const config: Config = {
    sample: sampleConfig
}