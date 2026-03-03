---
title: "std::common_reference"
source_path: "cpp/types/common_reference"
header: "<type_traits>"
category: "types"
since: "C++20"
---

Determines the common reference type of the types T..., that is, the type to which all the types in T... can be converted or bound. If such a type exists (as determined according to the rules below), the member type names that type. Otherwise, there is no member type. The behavior is undefined if any of the types in T... is an incomplete type other than (possibly cv-qualified) void.

## Declarations
```cpp
template< class... T >
struct common_reference;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_common_reference
202302L
(C++23)
Make std::common_reference_t of std::reference_wrapper a reference type

## See also
- [common_type](/cpp/types/common_type/)
- [common_reference_with](/cpp/concepts/common_reference_with/)
