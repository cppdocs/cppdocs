---
title: "Variadic functions"
source_path: "cpp/utility/variadic"
---

Variadic functions are functions (e.g. [std::printf](/cpp/io/c/printf/)) which take a [variable number of arguments](/cpp/language/variadic_arguments/).

## Example
```cpp
#include <cstdarg>
#include <iostream>
 
void simple_printf(const char* fmt...) // C-style "const char* fmt, ..." is also valid
{
    va_list args;
    va_start(args, fmt);
 
    while (*fmt != '\0')
    {
        if (*fmt == 'd')
        {
            int i = va_arg(args, int);
            std::cout << i << '\n';
        }
        else if (*fmt == 'c')
        {
            // note automatic conversion to integral type
            int c = va_arg(args, int);
            std::cout << static_cast<char>(c) << '\n';
        }
        else if (*fmt == 'f')
        {
            double d = va_arg(args, double);
            std::cout << d << '\n';
        }
        ++fmt;
    }
 
    va_end(args);
}
 
int main()
{
    simple_printf("dcff", 3, 'a', 1.999, 42.5); 
}
```

## See also
- [C documentation](/c/variadic/)
