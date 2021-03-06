# CLOUD INFRASTRUCTURE

A set of node scripts that utilize the [AWS CLI](https://aws.amazon.com/cli/) with other tools to help build standard cloud resources, kubernetes infrastructure, and deploy specified applications to clusters.

## Pre-requisites

- AWS account
- Registered domain name
- AWS Route53 hosted zone for the domain
- AWS ACM validated public certificate for the domain
- Name Server (NS) and Start of Authority (SOA) records for the domain in AWS Route53 
- `docker` installed
- Local `aws-credentials.ini` file with `[cloud-infrastructure]` profile credentials with appropriate permissions
- Local `application-repositories.json` file with desired kubernetes applications to be deployed to the cluster

## Commands

Cloud resources can be managed through the `run.sh` script. This script also builds the docker image.

Command format: ```./run.sh <domain name> <source node script>```

Run AWS connectivity test script: ```./run.sh example.com test```

Run all create/destroy scripts in order: 
```./run.sh example.com create```
```./run.sh example.com destroy```

Run specific create/destroy scripts:
```./run.sh example.com iam/create_groups```
```./run.sh example.com iam/destroy_groups```

## Goals

1. Create a more explicit alternative to terraform and AWS cloudformation
2. Design a standard minimal infrastructure for basic kubernetes applications to serve from
3. Put the concept of infrastructure as code (IAC) to full use by designing a way to destroy and re-create resources on a schedule
4. Save money by having ephemeral cloud resources

## Notes

- An analysis of (Global Ping Statistics)[https://wondernetwork.com/pings] found that AWS's US West 2 (Oregon) combined with US East 1 (Virginia) are essentially the best pair of regions to have low latency across the globe. They are also the most affordable. Mumbai was an affordable alternative region but actually had worse latency to much of Asia and Eastern Europe than select US regions did.