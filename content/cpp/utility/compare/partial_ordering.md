---
title: "std::partial_ordering"
source_path: "cpp/utility/compare/partial_ordering"
header: "<compare>"
category: "utility"
since: "C++20"
---

The class type std::partial_ordering is the result type of a [three-way comparison](/cpp/language/operator_comparison/#Three-way_comparison) that:

## Declarations
```cpp
class partial_ordering;
```
_(since C++20)_

## Parameters
- `v, w`: std::partial_ordering values to check
- `u`: an unused parameter of any type that accepts literal zero argument

## Notes
The [built-in operator<=>](/cpp/language/operator_comparison/#Three-way_comparison) between floating-point values uses this ordering: the positive zero and the negative zero compare equivalent, but can be distinguished, and NaN values compare unordered with any other value.

## Example
This section is incompleteReason: no example

## See also
- [strong_ordering](/cpp/utility/compare/strong_ordering/)
- [weak_ordering](/cpp/utility/compare/weak_ordering/)
