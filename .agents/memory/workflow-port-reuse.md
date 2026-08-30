---
name: Static server restart binding
description: Preview workflow behavior for the project’s simple Python static server.
---

The static preview server should allow address reuse before binding its listening socket.

**Why:** A workflow restart can leave the previous port in a rebinding state even after the process is gone, causing the next server start to fail with an address-in-use error.

**How to apply:** Preserve address reuse when maintaining or replacing the project’s lightweight preview server.