---
title: "std::numeric_limits<T>::has_denorm_loss"
source_path: "cpp/types/numeric_limits/has_denorm_loss"
category: "types"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_denorm_loss is true for all floating-point types T that detect loss of precision when creating a subnormal number as denormalization loss rather than as inexact result (see below).

## Declarations
```cpp
static const bool has_denorm_loss;
```
_(until C++11)_

```cpp
static constexpr bool has_denorm_loss;
```
_(since C++11) (deprecated in C++23)_

## Notes
Standard-compliant IEEE 754 floating-point implementations of subnormal numbers are required to detect the loss of accuracy associated with the creation of such number, if it occurs, and may do so in one of the two distinct ways:

No implementation of denormalization loss mechanism exists (accuracy loss is detected after rounding, as inexact result), and this option was removed in the 2008 revision of IEEE Std 754.

libstdc++, libc++, libCstd, and stlport4 define this constant as false for all floating-point types. Microsoft Visual Studio defines it as true for all floating-point types.

As with any floating-point computations, accuracy loss may raise [FE_INEXACT](/cpp/numeric/fenv/fe_exceptions/).

## Example
This section is incompleteReason: no example

## See also
- [tinyness_before](/cpp/types/numeric_limits/tinyness_before/)
- [has_denorm](/cpp/types/numeric_limits/has_denorm/)
