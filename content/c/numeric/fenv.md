---
title: "Floating-point environment"
source_path: "c/numeric/fenv"
category: "c"
---

The floating-point environment is the set of floating-point status flags and control modes supported by the implementation. It is thread-local, each thread inherits the initial state of its floating-point environment from the parent thread. Floating-point operations modify the floating-point status flags to indicate abnormal results or auxiliary information. The state of floating-point control modes affects the outcomes of some floating-point operations.

## See also
- [C++ documentation](/cpp/numeric/fenv/)
