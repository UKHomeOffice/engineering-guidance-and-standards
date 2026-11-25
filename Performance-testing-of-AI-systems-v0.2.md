# Performance Testing of AI Systems

**Last updated:** 1 October 2026

**Relates to:** Quality Engineering, AI, Performance

## Problem

Conventional performance testing assumes that workload demand, system behaviour and resource consumption are predictable. Teams apply load, measure response times, throughput and error rates, and use these metrics to determine whether a system can meet its operational and service level objectives.

AI systems challenge these assumptions. The computational effort, latency, cost and output characteristics of a request can vary significantly depending on factors such as prompt complexity, context size, retrieval activity, reasoning requirements and generated output length.

As a result, conventional measures such as requests per second, average response time or system utilisation may not accurately represent the real-world performance of AI-based systems.

Like many modern distributed systems, AI-enabled services are often composed of multiple interacting components including:

- Application services
- Databases
- Retrieval mechanisms
- Orchestration layers
- Foundation models
- Safety controls
- External dependencies

Performance is therefore determined by the behaviour of the end-to-end service pipeline rather than any single component.

AI systems can also degrade in ways that are not visible through traditional performance metrics. Under load, a system may remain available while experiencing:

- Increased latency
- Increased operational cost
- Output truncation
- Retrieval failures
- Higher hallucination rates
- Reduced effectiveness of safety controls

Traditional performance testing approaches can therefore provide a false sense of confidence in an AI system's readiness for production.

## Solution

Performance testing approaches, workloads, metrics and acceptance criteria should be selected according to the architecture of the AI system under test.

Different AI architectures such as predictive AI, Retrieval-Augmented Generation (RAG), agentic workflows and multi-stage generative AI services exhibit different bottlenecks, scaling characteristics and failure modes.

### 1. Define Service-Level Performance Objectives

- Define measurable performance objectives before testing begins.
- Include objectives for:
  - Inference latency
  - Retrieval performance
  - Response quality
  - Safety control effectiveness
  - Model-serving capacity
  - Operational cost
- Establish acceptable, degraded and unacceptable operating conditions.
- Define fallback, fail-safe, degraded-mode or human escalation behaviour.
- Define objectives at the end-to-end service level rather than solely at component level.

### 2. Measure Distributions Rather Than Individual Results

- Execute scenarios sufficient times to understand variability.
- Measure P50, P95 and P99 latency.
- Assess consistency, variability and outliers.
- Establish repeatable workload baselines.
- Where appropriate, control model parameters such as temperature during testing.

### 3. Model Realistic AI Workloads

- Do not rely solely on requests per second.
- Consider:
  - Tokens processed
  - Tokens generated
  - Prompt complexity
  - Context size
  - Retrieval activity
  - Reasoning requirements
  - Multimodal inputs
  - Output length
- Measure workload using:
  - Requests
  - Sessions
  - Concurrent users
  - Concurrent inferences
  - Token consumption
- Test realistic conversational journeys with accumulating context.

### 4. Test the Complete AI Service Pipeline

Assess end-to-end behaviour across:

- Retrieval services
- Orchestration layers
- Model inference services
- Guardrails
- Vector databases
- APIs
- MCP servers
- User interfaces
- Downstream systems

Measure each stage's contribution to:

- Latency
- Throughput
- Quality
- Operational cost

### 5. Measure Quality Alongside Performance

Monitor architecture-appropriate quality measures such as:

- Retrieval effectiveness
- Response relevance
- Hallucination rates
- Response completeness
- Safety-control effectiveness

Define thresholds beyond which the service is no longer considered effective, safe or fit for purpose.

Treat unacceptable quality degradation as a performance failure even if the system remains available.

### 6. Select Metrics Appropriate to the Architecture and Risk Profile

Select metrics that reflect:

- Architecture
- Intended outcomes
- Principal risks

Examples include:

- Inference latency
- Model-serving throughput
- Retrieval latency
- Time To First Token (TTFT)
- Token generation rate
- Queue depth
- Scaling efficiency
- Resource utilisation
- Operational cost

Continue collecting traditional metrics including latency, throughput, utilisation and error rates.

### 7. Test Degraded Provider Conditions

Assess behaviour under:

- Rate limiting
- Provider latency
- Reduced capacity
- Dependency failures
- Service unavailability

Also:

- Test fallback mechanisms
- Evaluate alternative models
- Test degraded operating modes
- Evaluate cached-response strategies
- Record model versions and provider configurations

### 8. Establish Baselines and Performance Breakpoints

- Establish representative workload baselines.
- Ensure end-to-end observability.
- Identify bottlenecks and failure modes.
- Document workload conditions where latency, cost, quality or safety become unacceptable.
- Determine architecture-specific limits such as:
  - Inference capacity
  - Retrieval saturation
  - Provider limits
  - Token throughput limits
  - Scaling constraints

## Considerations

- Replayed production traffic may provide more representative workloads than synthetic data where governance controls permit.
- AI services often depend on externally managed models and platforms whose characteristics may change independently of the delivery team.
- Large-scale AI performance testing can consume significant compute, energy and token resources.
- Performance, quality, safety and cost are often interdependent and should be assessed together.
- Different AI architectures have different bottlenecks, constraints and performance objectives.

## Example AI Performance Metrics by Test Type

| Test Type | Example AI-Focused Metrics |
|------------|---------------------------|
| Load Testing | TTFT, token generation rate, concurrent inference throughput, retrieval latency |
| Stress Testing | Concurrent inference saturation, hallucination rate under load, guardrail effectiveness under load |
| Spike Testing | TTFT degradation, token throughput degradation, inference saturation, hallucination rate, guardrail effectiveness |
| Endurance Testing | Token consumption trends, context growth impact, retrieval performance drift, model-serving stability |
| Scalability Testing | Concurrent inference capacity, token throughput, scaling efficiency, GPU utilisation |
| Breakpoint Testing | Maximum token throughput, maximum concurrent inferences, quality degradation threshold, retrieval degradation threshold, GPU saturation point |

## Additional Metrics

Traditional performance measures remain relevant and should continue to be collected alongside AI-specific metrics, including:

- Response time
- Throughput
- Error rates
- CPU utilisation
- GPU utilisation
- Memory utilisation
- Network utilisation
- Operational cost
