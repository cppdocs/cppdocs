---
title: "std::bit_not<void>"
source_path: "cpp/utility/functional/bit_not_void"
header: "<functional>"
category: "utility"
since: "C++14"
---

[std::bit_not](/cpp/utility/functional/bit_not/)<void> is a specialization of [std::bit_not](/cpp/utility/functional/bit_not/) with parameter and return type deduced.

## Declarations
```cpp
template<>
class bit_not<void>;
```
_(since C++14)_

## Parameters
- `arg`: value to bitwise NOT

## Return value
~[std::forward](/cpp/utility/forward/)<T>(arg).

## Example
This section is incompleteReason: no example
