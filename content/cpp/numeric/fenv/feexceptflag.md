---
title: "std::fegetexceptflag, std::fesetexceptflag"
source_path: "cpp/numeric/fenv/feexceptflag"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

1) Attempts to obtain the full contents of the floating-point exception flags that are listed in the bitmask argument excepts, which is a bitwise OR of the [floating point exception macros](/cpp/numeric/fenv/fe_exceptions/).

## Declarations
```cpp
int fegetexceptflag( std::fexcept_t* flagp, int excepts );
```
_(since C++11)_

```cpp
int fesetexceptflag( const std::fexcept_t* flagp, int excepts );
```
_(since C++11)_

## Parameters
- `flagp`: pointer to an std::fexcept_t object where the flags will be stored or read from
- `excepts`: bitmask listing the exception flags to get/set

## Return value
0 on success, non-zero otherwise.

## See also
- [C documentation](/c/numeric/fenv/feexceptflag/)
