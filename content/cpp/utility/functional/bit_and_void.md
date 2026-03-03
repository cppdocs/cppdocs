---
title: "std::bit_and<void>"
source_path: "cpp/utility/functional/bit_and_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::bit_and](/cpp/utility/functional/bit_and/)<void> is a specialization of [std::bit_and](/cpp/utility/functional/bit_and/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class bit_and<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to bitwise AND

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) & [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
This section is incompleteReason: no example
