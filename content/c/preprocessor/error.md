---
title: "Diagnostic directives"
source_path: "c/preprocessor/error"
category: "c"
---

Shows the given error message and renders the program ill-formed, or given warning message without affect the validity of the program(since C23).

## Notes
Before its standardization in C23, #warning has been provided by many compilers in all modes as a conforming extension.

## Example
```cpp
#if __STDC__ != 1
#  error "Not a standard compliant compiler"
#endif
 
#if __STDC_VERSION__ >= 202311L
#  warning "Using #warning as a standard feature"
#endif
 
#include <stdio.h>
 
int main (void)
{
    printf("The compiler used conforms to the ISO C Standard !!");
}
```

## See also
- [C++ documentation](/cpp/preprocessor/error/)
