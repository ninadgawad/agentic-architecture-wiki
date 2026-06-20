# Architectural Pattern: Agentic Governance in RegTech

## Problem Statement
Standard RAG systems often fail in FinTech due to "hallucinated compliance," where an agent retrieves the wrong regulatory clause for a specific jurisdiction.

## The Solution: Agentic Verification Loops
Instead of a single-pass retrieval, we implement a **Critic-Agent pattern**:
1. **Retriever Agent:** Pulls local KB data via MCP.
2. **Validator Agent:** Cross-references the output against the `regulatory-schema.json`.
3. **Refiner Agent:** Only outputs the answer if the confidence score > 0.95.

## Architectural Trade-offs
| Choice | Benefit | Risk |
| :--- | :--- | :--- |
| **Agentic Loop** | High Accuracy | Higher Token Latency |
| **Local MCP Server** | Data Privacy (On-prem) | Infrastructure Complexity |

## Visual Architecture
```mermaid
graph TD
    A[User Query] --> B[Orchestrator]
    B --> C{MCP Server}
    C --> D[Regulatory KB]
    D --> E[Validator Agent]
    E -->|Pass| F[Response]
    E -->|Fail| B

