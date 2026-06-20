# ADR 001: Transition from RAG to Agentic Wikis

**Date:** 2026-06-20
**Status:** Accepted
**Context:** Our traditional vector-database RAG approach struggled with "stale knowledge" and high bookkeeping taxes for engineers [Previous Conversation].

**Decision:** Adopt the **Karpathy LLM Wiki pattern** to consolidate research from `llms`, `nlp-ml`, and `PromptEngineering`.

**Consequences:**
- **Positive:** Agents can now reason over the *structure* of our knowledge, not just the text.
- **Negative:** Requires more upfront "schema engineering" to ensure LLMs navigate the folders correctly.
