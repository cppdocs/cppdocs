---
title: "std::nullopt_t"
source_path: "cpp/utility/optional/nullopt_t"
header: "<optional>"
category: "utility"
since: "C++17"
---

std::nullopt_t is an empty class type used to indicate that an [std::optional](/cpp/utility/optional/) does not contain a value.

## Declarations
```cpp
struct nullopt_t;
```
_(since C++17)_

## Notes
The constraints on nullopt_t's constructors exist to support both op = {}; and op = nullopt; as the syntax for disengaging an optional object.

A possible implementation of this class is

## See also
- [nullopt](/cpp/utility/optional/nullopt/)
