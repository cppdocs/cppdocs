---
title: "std::numeric_limits<T>::has_quiet_NaN"
source_path: "cpp/types/numeric_limits/has_quiet_NaN"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_quiet_NaN is true for all types T capable of representing the special value "Quiet [Not-A-Number](https://en.wikipedia.org/wiki/NaN)". This constant is meaningful for all floating-point types and is guaranteed to be true if [std::numeric_limits](/cpp/types/numeric_limits/)<T>::is_iec559 == true.

## Declarations
```cpp
static const bool has_quiet_NaN;
```
_(until C++11)_

```cpp
static constexpr bool has_quiet_NaN;
```
_(since C++11)_

## See also
- [quiet_NaN](/cpp/types/numeric_limits/quiet_nan/)
- [has_infinity](/cpp/types/numeric_limits/has_infinity/)
- [has_signaling_NaN](/cpp/types/numeric_limits/has_signaling_nan/)
