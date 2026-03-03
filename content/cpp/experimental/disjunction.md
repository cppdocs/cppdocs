---
title: "std::experimental::disjunction"
source_path: "cpp/experimental/disjunction"
header: "<experimental/type_traits>"
category: "experimental"
---

Forms the [logical disjunction](https://en.wikipedia.org/wiki/Logical_disjunction) of the type traits B..., effectively performing a logical or on the sequence of traits.

## Declarations
```cpp
template< class... B >
struct disjunction;
```
_(library fundamentals TS v2)_

## Notes
A specialization of disjunction does not necessarily inherit from of either [std::true_type](/cpp/types/integral_constant/) or [std::false_type](/cpp/types/integral_constant/): it simply inherits from the first B whose ::value, explicitly converted to bool, is true, or from the very last B when all of them convert to false. For example, disjunction<[std::integral_constant](/cpp/types/integral_constant/)<int, 2>, [std::integral_constant](/cpp/types/integral_constant/)<int, 4>>::value is 2.

## Example
This section is incompleteReason: no example

## See also
- [disjunction](/cpp/types/disjunction/)
