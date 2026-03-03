---
title: "std::common_comparison_category"
source_path: "cpp/utility/compare/common_comparison_category"
header: "<compare>"
category: "utility"
since: "C++20"
---

The class template std::common_comparison_category provides an alias (as the member typedef type) for the strongest comparison category to which all of the template arguments Ts... can be converted.

## Declarations
```cpp
template< class... Ts >
struct common_comparison_category
{
using type = /* see below */ ;
};
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [strong_ordering](/cpp/utility/compare/strong_ordering/)
- [weak_ordering](/cpp/utility/compare/weak_ordering/)
- [partial_ordering](/cpp/utility/compare/partial_ordering/)
