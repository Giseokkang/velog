import { mainVpc } from '../vpc'
import { prefix } from '../../lib/prefix'
import * as aws from '@pulumi/aws'

const publicSubnetName = `${prefix}-public-server-subnet`
const publicSubnet = new aws.ec2.Subnet(publicSubnetName, {
  vpcId: mainVpc.id,
  cidrBlock: '10.0.1.0/24',
  mapPublicIpOnLaunch: true, // subnet should be assigned a public IP address
  tags: {
    name: 'main server public subnet',
  },
})

// const privateSubnetName = `${prefix}-private-subnet`;
// const privateSubnet = ...

export const subnets = [publicSubnet.arn]
