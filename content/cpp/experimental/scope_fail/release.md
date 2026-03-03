---
title: "std::experimental::scope_fail<EF>::release"
source_path: "cpp/experimental/scope_fail/release"
category: "experimental"
---

Makes the scope_fail inactive.

## Declarations
```cpp
void release() noexcept;
```
_(library fundamentals TS v3)_

## Return value
(none)

## Notes
release may be either manually called or automatically called by scope_fail's move constructor.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/experimental/scope_fail/scope_fail/)
- [(destructor)](/cpp/experimental/scope_fail/~scope_fail/)
