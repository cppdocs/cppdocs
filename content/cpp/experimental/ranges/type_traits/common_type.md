---
title: "std::experimental::ranges::common_type"
source_path: "cpp/experimental/ranges/type_traits/common_type"
header: "<experimental/ranges/type_traits>"
category: "experimental"
---

Determines the common type among all types T..., that is the type all T... can be implicitly converted to. If such a type exists (as determined according to the rules below), the member type names that type. Otherwise, there is no member type. The behavior is undefined if any of the types in T... is an incomplete type other than (possibly cv-qualified) void.

## Declarations
```cpp
template< class... T >
struct common_type;
```
_(ranges TS)_

## Notes
For arithmetic types not subject to promotion, the common type may be viewed as the type of the (possibly mixed-mode) arithmetic expression such as T0() + T1() + ... + Tn().

## Example
This section is incompleteReason: no example

## See also
- [common_type](/cpp/types/common_type/)
- [common_reference](/cpp/experimental/ranges/type_traits/common_reference/)
