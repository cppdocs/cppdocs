---
title: "std::feholdexcept"
source_path: "cpp/numeric/fenv/feholdexcept"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

First, saves the current floating-point environment to the object pointed to by envp (similar to [std::fegetenv](/cpp/numeric/fenv/feenv/)), then clears all floating-point status flags, and then installs the non-stop mode: future floating-point exceptions will not interrupt execution (will not trap), until the floating-point environment is restored by [std::feupdateenv](/cpp/numeric/fenv/feupdateenv/) or [std::fesetenv](/cpp/numeric/fenv/feenv/).

## Declarations
```cpp
int feholdexcept( std::fenv_t* envp )
```
_(since C++11)_

## Parameters
- `envp`: pointer to the object of type std::fenv_t where the floating-point environment will be stored

## Return value
0 on success, non-zero otherwise.

## See also
- [feupdateenv](/cpp/numeric/fenv/feupdateenv/)
- [fegetenvfesetenv](/cpp/numeric/fenv/feenv/)
- [FE_DFL_ENV](/cpp/numeric/fenv/fe_dfl_env/)
- [C documentation](/c/numeric/fenv/feholdexcept/)
