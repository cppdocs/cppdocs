---
title: "std::experimental::scope_exit<EF>::release"
source_path: "cpp/experimental/scope_exit/release"
category: "experimental"
---

Makes the scope_exit inactive.

## Declarations
```cpp
void release() noexcept;
```
_(library fundamentals TS v3)_

## Return value
(none)

## Notes
release may be either manually called or automatically called by scope_exit's move constructor.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/experimental/scope_exit/scope_exit/)
- [(destructor)](/cpp/experimental/scope_exit/~scope_exit/)
