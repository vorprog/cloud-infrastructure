const aws = require('@pulumi/aws');
const options = require('../../../options');

module.exports.nat_gateway_a = new aws.ec2.Eip(`nat_gateway_a`, {}, options.us_east_1);
module.exports.nat_gateway_b = new aws.ec2.Eip(`nat_gateway_b`, {}, options.us_east_1);
module.exports.nat_gateway_c = new aws.ec2.Eip(`nat_gateway_c`, {}, options.us_east_1);
