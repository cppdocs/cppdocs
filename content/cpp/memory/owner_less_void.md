---
title: "std::owner_less"
source_path: "cpp/memory/owner_less_void"
header: "<memory>"
category: "memory"
since: "C++17"
---

[std::owner_less](/cpp/memory/owner_less/)<void> is a specialization of [std::owner_less](/cpp/memory/owner_less/) with parameter types deduced.

## Declarations
```cpp
template<>
struct owner_less<void>;
```
_(since C++17)_

## Parameters
- `lhs, rhs`: shared-ownership pointers to compare

## Return value
true if lhs is less than rhs as determined by the owner-based ordering.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_transparent_operators
201510L
(C++17)
Transparent std::owner_less (std::owner_less<void>)

## See also
- [owner_before](/cpp/memory/shared_ptr/owner_before/)
- [owner_before](/cpp/memory/weak_ptr/owner_before/)
