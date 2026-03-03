---
title: "std::bit_or<void>"
source_path: "cpp/utility/functional/bit_or_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::bit_or](/cpp/utility/functional/bit_or/)<void> is a specialization of [std::bit_or](/cpp/utility/functional/bit_or/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class bit_or<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to bitwise OR

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) | [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
This section is incompleteReason: no example
