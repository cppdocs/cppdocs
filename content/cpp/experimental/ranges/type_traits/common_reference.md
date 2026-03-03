---
title: "std::experimental::ranges::common_reference"
source_path: "cpp/experimental/ranges/type_traits/common_reference"
header: "<experimental/ranges/type_traits>"
category: "experimental"
---

Determines the common reference type of the types T..., that is, the type to which all the types in T... can be converted or bound. If such a type exists (as determined according to the rules below), the member type names that type. Otherwise, there is no member type. The behavior is undefined if any of the types in T... is an incomplete type other than (possibly cv-qualified) void.

## Declarations
```cpp
template< class... T >
struct common_reference;
```
_(ranges TS)_

## Notes
This section is incomplete

## Example
This section is incompleteReason: no example

## See also
- [common_type](/cpp/types/common_type/)
- [common_type](/cpp/experimental/ranges/type_traits/common_type/)
- [CommonReference](/cpp/experimental/ranges/concepts/commonreference/)
