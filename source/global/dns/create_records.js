const util = require('../../utilities/util');

const hostedZonesData = util.exec(`aws route53 list-hosted-zones-by-name`);
const targetZone = util.first(hostedZonesData.HostedZones, { Name: util.state.domain });

const recordSetData = {
  Changes: [
    {
      Action: `CREATE`,
      ResourceRecordSet: {
        Name: `a.${util.state.domain}`,
        Type: `A`,
        TTL: 300,
        ResourceRecords: [
          {
            Value: `10.2.2.2`
          }
        ]
      }
    }
  ]
};

util.file.writeJson(recordSetData, `record_set.json`);

// https://docs.aws.amazon.com/cli/latest/reference/route53/change-resource-record-sets.html#examples
exec(`aws route53 change-resource-record-sets --hosted-zone-id ${targetZone.Id} --change-batch file://record_set.json`);
