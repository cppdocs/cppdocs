---
title: "std::logical_or<void>"
source_path: "cpp/utility/functional/logical_or_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::logical_or](/cpp/utility/functional/logical_or/)<void> is a specialization of [std::logical_or](/cpp/utility/functional/logical_or/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class logical_or<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to logical OR

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) || [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
This section is incompleteReason: no example
