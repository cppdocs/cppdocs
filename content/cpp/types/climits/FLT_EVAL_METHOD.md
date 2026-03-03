---
title: "FLT_EVAL_METHOD"
source_path: "cpp/types/climits/FLT_EVAL_METHOD"
header: "<cfloat>"
category: "types"
since: "C++11"
---

Specifies the precision in which all floating-point arithmetic operations other than assignment and cast are done.

## Declarations
```cpp
#define FLT_EVAL_METHOD /* implementation-defined */
```
_(since C++11)_

## Notes
Regardless of the value of FLT_EVAL_METHOD, any floating-point expression may be contracted, that is, calculated as if all intermediate results have infinite range and precision (unless [#pragma](/cpp/preprocessor/impl/) STDC FP_CONTRACT is off).

Cast and assignment strip away any extraneous range and precision: this models the action of storing a value from an extended-precision FPU register into a standard-sized memory location.

## See also
- [C documentation](/c/types/limits/FLT_EVAL_METHOD/)
