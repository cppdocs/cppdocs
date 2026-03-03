---
title: "std::numeric_limits<T>::is_iec559"
source_path: "cpp/types/numeric_limits/is_iec559"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_iec559 is true for all floating-point types T which fulfill the requirements of IEC 559 ([IEEE 754](https://en.wikipedia.org/wiki/IEEE_754-2008)) standard. If [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_iec559 is true, then [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_infinity, [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_quiet_NaN, and [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_signaling_NaN are also true.

## Declarations
```cpp
static const bool is_iec559;
```
_(until C++11)_

```cpp
static constexpr bool is_iec559;
```
_(since C++11)_

## See also
- [has_infinity](/cpp/types/numeric_limits/has_infinity/)
- [has_quiet_NaN](/cpp/types/numeric_limits/has_quiet_nan/)
- [has_signaling_NaN](/cpp/types/numeric_limits/has_signaling_nan/)
