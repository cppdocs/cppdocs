---
title: "std::bit_xor<void>"
source_path: "cpp/utility/functional/bit_xor_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::bit_xor](/cpp/utility/functional/bit_xor/)<void> is a specialization of std::bit_xor with parameter and return type deduced.

## Declarations
```cpp
template<>
class bit_xor<void>;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: values to bitwise XOR

## Return value
[std::forward](/cpp/utility/forward/)<T>(lhs) ^ [std::forward](/cpp/utility/forward/)<U>(rhs).

## Example
This section is incompleteReason: no example
