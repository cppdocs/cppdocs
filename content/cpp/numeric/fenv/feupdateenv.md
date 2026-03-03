---
title: "std::feupdateenv"
source_path: "cpp/numeric/fenv/feupdateenv"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

First, remembers the currently raised floating-point exceptions, then restores the floating-point environment from the object pointed to by envp (similar to [std::fesetenv](/cpp/numeric/fenv/feenv/)), then raises the floating-point exceptions that were saved.

## Declarations
```cpp
int feupdateenv( const std::fenv_t* envp )
```
_(since C++11)_

## Parameters
- `envp`: pointer to the object of type std::fenv_t set by an earlier call to std::feholdexcept or std::fegetenv or equal to FE_DFL_ENV

## Return value
0 on success, non-zero otherwise.

## See also
- [feholdexcept](/cpp/numeric/fenv/feholdexcept/)
- [fegetenvfesetenv](/cpp/numeric/fenv/feenv/)
- [FE_DFL_ENV](/cpp/numeric/fenv/fe_dfl_env/)
- [C documentation](/c/numeric/fenv/feupdateenv/)
