# Agentic Interaction Schema (FinTech/RegTech)

## 1. Intent
This schema defines the operational guardrails for LLM agents interacting with this knowledge base. All reasoning must prioritize **data integrity** and **auditability**.

## 2. Reasoning Patterns
- **Traceability:** Every architectural decision must cite a source in `/raw`.
- **Compliance Bias:** When evaluating agentic workflows, agents must flag patterns that bypass human-in-the-loop (HITL) for high-risk financial transactions.
- **Protocol Adherence:** All tool-calling definitions must strictly follow the **Model Context Protocol (MCP)** standards.

## 3. Metadata Tags
- `[GOVERNANCE]`: Documents related to risk management.
- `[AGENTIC-PATTERN]`: Specific implementations like ReAct or Reflection.
- `[REGTECH]`: Automation patterns for KYC/AML.
