---
title: "std::numeric_limits<T>::round_error"
source_path: "cpp/types/numeric_limits/round_error"
category: "types"
since: "C++11"
---

Returns the largest possible rounding error in ULPs (units in the last place) as defined by ISO 10967, which can vary from 0.5 (rounding to the nearest digit) to 1.0 (rounding to zero or to infinity). It is only meaningful if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_integer == false.

## Declarations
```cpp
static T round_error() throw();
```
_(until C++11)_

```cpp
static constexpr T round_error() noexcept;
```
_(since C++11)_

## See also
- [round_style](/cpp/types/numeric_limits/round_style/)
