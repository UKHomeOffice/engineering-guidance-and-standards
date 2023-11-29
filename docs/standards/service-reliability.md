---
layout: standard
order: 1
title: Service reliability
date: 2023-11-23
id: SEGAS-00013
tags:
  - Reliability
  - Infrastructure
  - SRE
---

Home office systems should be able to withstand failures during various circumstances, both expected and unexpected over a specified period in specified environments. 

---

## Requirement(s)

- [Requirement(s)](#requirements)
  - [Service reliability MUST be observable relative to defined service level expectations](#service-reliability-must-be-observable-relative-to-defined-service-level-expectations)
  - [Service MUST be tolerant to expected and unexpected failure of a data centre](#service-must-be-tolerant-to-expected-and-unexpected-failure-of-a-data-centre)
  - [Service MUST be tolerant to expected and unexpected failure of physical or virtualised hardware, including networks](#service-must-be-tolerant-to-expected-and-unexpected-failure-of-physical-or-virtualised-hardware-including-networks)
  - [Service MUST be tolerant to expected and unexpected failure of upstream services such as databases](#service-must-be-tolerant-to-expected-and-unexpected-failure-of-upstream-services-such-as-databases)
  - [Service MUST be sized appropriately for normal operations](#service-must-be-sized-appropriately-for-normal-operations)
  - [Service MUST be able to scale as appropriate automatically based on metrics](#service-must-be-able-to-scale-as-appropriate-automatically-based-on-metrics)
  - [Service MUST be able to reject and/or queue requests to protect the overall service](#service-must-be-able-to-reject-andor-queue-requests-to-protect-the-overall-service)
  - [Service MUST be able to set appropriate caching directives in HTTP responses so as to reduce load on the service](#service-must-be-able-to-set-appropriate-caching-directives-in-http-responses-so-as-to-reduce-load-on-the-service)
  - [Service MUST be able to toletate expected load](#service-must-be-able-to-toletate-expected-load)
  - [Service MUST be able to toletate expected stress](#service-must-be-able-to-toletate-expected-stress)
  - [Service MUST be soak tested.](#service-must-be-soak-tested)

### Service reliability MUST be observable relative to defined service level expectations
Reliability expectations should be clear and baselined so that Service Level Objectives (SLOs) can be defined for measures that can keep Home Office services reliable.

### Service MUST be tolerant to expected and unexpected failure of a data centre

In the event of an unexpected catastrophic event (flooding, fire, etc.) or an expected event (data centre maintenance), an entire data centre may be lost causing outages of services that are hosted in the affected data centre.

Although rare, services should consider the possibility and guard against such scenarios by operating from multiple data centres by spreading applications / services across multiple data centres (e.g. AWS Availability Zones) either in Active/Active or Active/Passive configuration.

Check that services are spread across multiple nodes and/or multiple availability zones; this can be checked by checking;
- Kubernetes pod anti-affinity rules,
- AWS multi-az settings for AWS services
- AWS Auto Scaling Group configurations

Evidence could be a screenshot, link to repository or code snippet of where it is configured. 
**Example:** [Kubernetes Docs on pod anti-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#an-example-of-a-pod-that-uses-pod-affinity:~:text=Pod%20affinity%20example)

### Service MUST be tolerant to expected and unexpected failure of physical or virtualised hardware, including networks

In the event of an unexpected event (hardware fault, withdrawal of virtualised hardware e.g. SPOT instances) or an expected event (maintenance activities) your service may suffer an outage.
Such scenario is more common and your service should guard against such scenarios by operating;
- from multiple data centres
- from multiple physical / virtualised nodes

Check that services are spread across multiple nodes and/or multiple availability zones; this can be checked by checking;
- Kubernetes pod anti-affinity rules
- AWS multi-az settings for AWS services
- AWS Auto Scaling Group configurations

Evidence could be a screenshot, link to repository or code snippet of where it is configured.
**Example:** [Kubernetes Docs on pod anti-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#an-example-of-a-pod-that-uses-pod-affinity:~:text=Pod%20affinity%20example)


### Service MUST be tolerant to expected and unexpected failure of upstream services such as databases

In the event of an unexpected event (failure of an upstream application, database, etc.) or an expected event (upgrade, maintenance activities, etc.) your service may suffer an outage.
Such scenarios are common and your service should guard against such scenarios by;
- handling the failure gracefully, or
- attempt to reconnect, and/or
- attempt to retry within reasonable limits of your service

When retrying transactions, particularly when an upstream service was down, avoid flooding the upstream service(s) with requests thus potentially creating a DDoS style attack on the upstream service, potentially causing further upstream service outages. 
Furthermore, implement a backoff strategy if your transactions allow it.

- Go through upstream services your service relies on, and  how it reacts to an expected or unexpected failure of that service.
- Tests results for service proving behaviour.

### Service MUST be sized appropriately for normal operations

The application / service must be sized appropriately in terms of system resources (CPU, memory, storage, et al) for normal operating conditions preventing unnecessary resource wastage. 
Considering the acceptable time it takes for your application to recover (Mean Time To Recover / MTTR), additional headroom is allowed in the event of failures - for example, it is permissible if you are running a two node cluster that normal operations yield 50% resource utilisation, so that if a single node is lost your service may continue to function on a single node at 100% utilisation until the second node is/can be recovered.

- Check that Kubernetes services have configured CPU and Memory requests and limits are configured
- Check that AWS services are sized appropriately
- Refer to appropriate dashboards to ensure CPU and Memory utilisation. 

**Services should be continuously reviewed.**

### Service MUST be able to scale as appropriate automatically based on metrics

All components of a service can be scaled up or out (or down or in) based on some metric (such as CPU, memory, thread utilisation or some appropriate metric) so as to ensure continued successful operation of the service during expected and unexpected peak or off-peak operating periods.
Ideally, scaling should be based on some metric that is indicative of an application's performance (such as number of busy threads, queue depth) rather than system resources such as CPU and memory as (in the case of scaling up for instance);
- your application may exhaust threads and cannot service any more requests, while CPU and memory utilisation is low 
- a messaging queue is filling up, but there are not enough consumers to process messages
Basing scaling policies based on system resources should be the fallback option, rather than the main criteria by which you scale.
Allowing for automatic scaling of a service not only enables a service to respond accordingly during peak or off-peak times, but is also a valuable cost saver.

- Check that Kubernetes service have HPA configured
- Check that AWS services are in Auto-Scaling Groups

### Service MUST be able to reject and/or queue requests to protect the overall service

The service must be able to apply rate limiting rules to protect itself from being overwhelmed by external and internal clients, preventing such scenarios as DDoS style attacks either intentional or accidental.

- Check that services respond accordingly during load and stress testing; usually services should respond with HTTP 503
- Tests results for service proving behaviour.

### Service MUST be able to set appropriate caching directives in HTTP responses so as to reduce load on the service

Where possible, the service should set caching headers to HTTP requests to reduce duplicate computation and thereby reducing load, conversely, client services should cache responses as defined by HTTP responses.

- Check that services respond with appropriate cache directives in HTTP response headers

### Service MUST be able to tolerate expected load

Where required based off business requirements, the service can be load, soak or stressed tested to expected normal conditions as defined by the service volumetrics to; 

- ensure the application can manage expected load
- identify and remediate performance bottlenecks
- understand trigger points for scaling policies

Validate with test teams that the service has been tested to expected peak load.
Provide evidence / links to test reports.

### Service MUST be able to toletate expected stress
The service must be stressed tested beyond normal load conditions (at least 200% of expected peak load), so as to;

- Understand how the application behaves beyond normal conditions, and document any findings
- Ensure scaling policies behave as expected, and that normal service can be expected from unexpected load conditions
- Identify and remediate performance bottlenecks in the service and upstream / downstream systems and services.
  - This is particularly important as there will be hidden limits that affect scaling capacity, such as limits on upstream systems, Kubernetes, our AWS accounts, or network throughput on appliances connecting to 3rd parties/POISE.

Validate with test teams that the service has been stress tested to expected peak load.
Provide evidence / links to load test reports.

### Service MUST be soak tested.

The service must be soak tested to ensure normal operating conditions over time, from low, normal to high load situations, so as to:

- Understand how the service behaves over a period of time, and that garbage collection effectively prevents memory and CPU leaks over time
- Understand how the service recovers from high load situations and ensure it relinquishes unused resource back to the underlying infrastructure

Validate with test teams that the service has been soak tested to expected peak load.
Provide evidence / links to load test reports.

---