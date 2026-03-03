---
title: "std::weak_ordering"
source_path: "cpp/utility/compare/weak_ordering"
header: "<compare>"
category: "utility"
since: "C++20"
---

The class type std::weak_ordering is the result type of a [three-way comparison](/cpp/language/operator_comparison/#Three-way_comparison) that:

## Declarations
```cpp
class weak_ordering;
```
_(since C++20)_

## Parameters
- `v, w`: std::weak_ordering values to check
- `u`: an unused parameter of any type that accepts literal zero argument

## Return value
std::partial_ordering::less if v is less, std::partial_ordering::greater if v is greater,
std::partial_ordering::equivalent if v is equivalent.

## Example
This section is incompleteReason: no example

## See also
- [strong_ordering](/cpp/utility/compare/strong_ordering/)
- [partial_ordering](/cpp/utility/compare/partial_ordering/)
