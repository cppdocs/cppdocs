---
title: "Floating-point environment (since C++11)"
source_path: "cpp/numeric/fenv"
category: "numeric"
since: "C++11"
---

The floating-point environment is the set of floating-point status flags and control modes supported by the implementation. It is thread-local. Each thread inherits the initial state of its floating-point environment from the parent thread. Floating-point operations modify the floating-point status flags to indicate abnormal results or auxiliary information. The state of floating-point control modes affects the outcomes of some floating-point operations.

## Notes
The floating-point exceptions are not related to the C++ exceptions. When a floating-point operation raises a floating-point exception, the status of the floating-point environment changes, which can be tested with [std::fetestexcept](/cpp/numeric/fenv/fetestexcept/), but the execution of a C++ program on most implementations continues uninterrupted.

There are compiler extensions that may be used to generate C++ exceptions automatically whenever a floating-point exception is raised:

## See also
- [C documentation](/c/numeric/fenv/)
