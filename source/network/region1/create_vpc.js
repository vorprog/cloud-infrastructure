const exec = require('../utilities/exec');

exec(`aws ec2 create-vpc  --cidr-block 10.101.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=main}]'`);
