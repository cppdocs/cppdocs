---
title: "std::experimental::nullopt_t"
source_path: "cpp/experimental/optional/nullopt_t"
header: "<experimental/optional>"
category: "experimental"
---

std::experimental::nullopt_t is an empty class type used to indicate optional type with uninitialized state. In particular, [std::experimental::optional](/cpp/experimental/optional/) has a constructor with nullopt_t as a single argument, which creates an optional that does not contain a value.

## Declarations
```cpp
struct nullopt_t;
```
_(library fundamentals TS)_

## Notes
nullopt_t is not [DefaultConstructible](/cpp/named_req/defaultconstructible/) to support both op = {}; and op = nullopt; as the syntax for disengaging an optional object.

A possible implementation of this class is

## See also
- [nullopt](/cpp/utility/optional/nullopt/)
