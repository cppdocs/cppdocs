---
title: "Diagnostic directives"
source_path: "cpp/preprocessor/error"
category: "preprocessor"
---

Shows the given error message and renders the program ill-formed, or shows the given warning message without affecting the validity of the program(since C++23).

## Notes
Before its standardization in C++23, #warning has been provided by many compilers in all modes as a conforming extension.

## Example
```cpp
#if __STDC_HOSTED__ != 1
#   error "Not a hosted implementation"
#endif
 
#if __cplusplus >= 202302L
#   warning "Using #warning as a standard feature"
#endif
 
#include <iostream>
 
int main()
{
    std::cout << "The implementation used is hosted\n";
}
```

## See also
- [C documentation](/c/preprocessor/error/)
