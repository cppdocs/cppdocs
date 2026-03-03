---
title: "Variadic arguments"
source_path: "c/language/variadic"
category: "c"
---

Variadic functions are functions that may be called with different number of arguments.

## Notes
Although old-style (prototype-less) [function declarations](/c/language/function_declaration/) allow the subsequent function calls to use any number of arguments, they are not allowed to be variadic (as of C89). The definition of such function must specify a fixed number of parameters and cannot use the stdarg.h macros.

## Example
```cpp
#include <stdio.h>
#include <time.h>
#include <stdarg.h>
 
void tlog(const char* fmt,...)
{
    char msg[50];
    strftime(msg, sizeof msg, "%T", localtime(&(time_t){time(NULL)}));
    printf("[%s] ", msg);
    va_list args;
    va_start(args, fmt);
    vprintf(fmt, args);
    va_end(args);
}
 
int main(void)
{
   tlog("logging %d %d %d...\n", 1, 2, 3);
}
```

## See also
- [C++ documentation](/cpp/language/variadic_arguments/)
