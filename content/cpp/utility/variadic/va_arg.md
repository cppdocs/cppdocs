---
title: "va_arg"
source_path: "cpp/utility/variadic/va_arg"
header: "<cstdarg>"
category: "utility"
---

The va_arg macro expands to an expression of type T that corresponds to the next parameter from the [va_list](/cpp/utility/variadic/va_list/) ap.

## Declarations
```cpp
T va_arg( std::va_list ap, T );
```

## Parameters
- `ap`: an instance of the va_list type
- `T`: the type of the next parameter in ap

## Example
```cpp
#include <cstdarg>
#include <cstdio>
#include <iostream>
 
void print_variance(std::size_t count, const char* fmt, ...)
{
    double sum = 0;
    double sum_sq = 0;
    std::va_list args;
    va_start(args, fmt);
    for (std::size_t i = count; i--;)
    {
        double num = va_arg(args, double);
        sum += num;
        sum_sq += num*num;
    }
    va_end(args);
    std::printf(fmt, sum_sq / count - (sum / count) * (sum / count));
}
 
void nano_printf(const char* fmt, ...)
{
    std::va_list args;
    va_start(args, fmt);
 
    for (const char* p = fmt; *p != '\0'; ++p)
    {
        switch (*p)
        {
        case '%':
            switch (*++p) // read format symbol
            {
                case 'i':
                    std::cout << va_arg(args, int);
                    continue;
                case 'f':
                    std::cout << va_arg(args, double);
                    continue;
                case 's':
                    std::cout << va_arg(args, const char*);
                    continue;
                case 'c':
                    std::cout << static_cast<char>(va_arg(args, int));
                    continue;
                case '%':
                    std::cout << '%';
                    continue;
                /* ...more cases... */
            }
            break; // format error...
        case '\n':
            std::cout << '\n';
            continue;
        case '\t':
            std::cout << '\t';
            continue;
        /* ...more cases... */
        }
        std::cout << *p;
    }
 
    va_end(args);
}
 
int main()
{
    print_variance(4, "%f\n", 25.0, 27.3, 26.9, 25.7);
    nano_printf("Args: %i%% %c%f %s\n", 42, '#', 3.14, "C++");
}
```

## See also
- [va_start](/cpp/utility/variadic/va_start/)
- [va_copy](/cpp/utility/variadic/va_copy/)
- [va_end](/cpp/utility/variadic/va_end/)
- [C documentation](/c/variadic/va_arg/)
