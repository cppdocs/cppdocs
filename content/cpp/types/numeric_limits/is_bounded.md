---
title: "std::numeric_limits<T>::is_bounded"
source_path: "cpp/types/numeric_limits/is_bounded"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_bounded is true for all arithmetic types T that represent a finite set of values. While all fundamental types are bounded, this constant would be false in a specialization of [std::numeric_limits](/cpp/types/numeric_limits/) for a library-provided arbitrary precision arithmetic type.

## Declarations
```cpp
static const bool is_bounded;
```
_(until C++11)_

```cpp
static constexpr bool is_bounded;
```
_(since C++11)_

## See also
- [is_integer](/cpp/types/numeric_limits/is_integer/)
- [is_signed](/cpp/types/numeric_limits/is_signed/)
- [is_exact](/cpp/types/numeric_limits/is_exact/)
