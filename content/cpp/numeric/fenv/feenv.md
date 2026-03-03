---
title: "std::fegetenv, std::fesetenv"
source_path: "cpp/numeric/fenv/feenv"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

Manages the status of the floating-point environment.

## Declarations
```cpp
int fegetenv( std::fenv_t* envp )
```
_(since C++11)_

```cpp
int fesetenv( const std::fenv_t* envp );
```
_(since C++11)_

## Parameters
- `envp`: pointer to the object of type std::fenv_t which holds the status of the floating-point environment

## Return value
0 on success, non-zero otherwise.

## See also
- [feholdexcept](/cpp/numeric/fenv/feholdexcept/)
- [feupdateenv](/cpp/numeric/fenv/feupdateenv/)
- [FE_DFL_ENV](/cpp/numeric/fenv/fe_dfl_env/)
- [C documentation](/c/numeric/fenv/feenv/)
