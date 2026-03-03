---
title: "std::projected_value_t"
source_path: "cpp/iterator/projected_value_t"
header: "<iterator>"
category: "iterator"
since: "C++26"
---

The alias template projected_value_t obtains the value type by stripping any reference and its topmost cv-qualifiers of the result type of applying Proj to [std::iter_value_t](/cpp/iterator/iter_t/)<I>&.

## Declarations
```cpp
template< std::indirectly_readable I,
std::indirectly_regular_unary_invocable<I> Proj >
using projected_value_t =
std::remove_cvref_t<std::invoke_result_t<Proj&, std::iter_value_t<I>&>>;
```
_(since C++26)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403L
(C++26)
default template type for algorithm values using std::projected_value_t

## Example
This section is incompleteReason: no example

## See also
- [indirect_result_t](/cpp/iterator/indirect_result_t/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [projected](/cpp/iterator/projected/)
