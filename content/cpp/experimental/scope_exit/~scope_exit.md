---
title: "std::experimental::scope_exit<EF>::~scope_exit"
source_path: "cpp/experimental/scope_exit/~scope_exit"
category: "experimental"
---

Calls the exit function if the scope_exit is active, then destroys the stored EF (if it is a function object) and any other non-static data members.

## Declarations
```cpp
~scope_exit() noexcept;
```
_(library fundamentals TS v3)_

## See also
- [release](/cpp/experimental/scope_exit/release/)
