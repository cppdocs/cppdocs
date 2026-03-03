---
title: "FLT_EVAL_METHOD"
source_path: "c/types/limits/FLT_EVAL_METHOD"
header: "<float.h>"
category: "c"
---

Specifies range and precision of floating-point values obtained from floating-point constants and from all operations (operators, implicit conversions of operands) except assignment, cast, and library function call.

## Declarations
```cpp
#define FLT_EVAL_METHOD /* implementation-defined */
```
_(since C99)_

## Notes
Regardless of the value of FLT_EVAL_METHOD, any floating-point expression may be contracted, that is, calculated as if all intermediate results have infinite range and precision (unless [#pragma](/c/preprocessor/impl/) STDC FP_CONTRACT is off).

Cast and assignment strip away any extraneous range and precision: this models the action of storing a value from an extended-precision FPU register into a standard-sized memory location.

## See also
- [float_t](/c/numeric/math/float_t/)
- [double_t](/c/numeric/math/float_t/)
- [C++ documentation](/cpp/types/climits/flt_eval_method/)
