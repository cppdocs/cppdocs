---
title: "C attribute: unsequenced, reproducible (since C23)"
source_path: "c/language/attributes/reproducible"
category: "c"
---

Provides the compiler with information about the access of objects by a function such that certain properties of function calls can be deduced.

## Notes
These attributes exist for the purpose of compiler optimization.

If a function is reproducible, multiple subsequent calls can be treated as a single call.

If a function is unsequenced, multiple subsequent calls can be treated as a single call, and the calls can be parallelized and reordered arbitrarily.
