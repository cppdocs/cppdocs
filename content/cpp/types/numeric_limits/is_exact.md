---
title: "std::numeric_limits<T>::is_exact"
source_path: "cpp/types/numeric_limits/is_exact"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_exact is true for all arithmetic types T that use exact representation.

## Declarations
```cpp
static const bool is_exact;
```
_(until C++11)_

```cpp
static constexpr bool is_exact;
```
_(since C++11)_

## Notes
While all fundamental types T for which [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_exact == true are integer types, a library may define exact types that are not integers, e.g. a rational arithmetic type representing fractions.

## See also
- [is_integer](/cpp/types/numeric_limits/is_integer/)
- [is_signed](/cpp/types/numeric_limits/is_signed/)
- [is_bounded](/cpp/types/numeric_limits/is_bounded/)
