---
title: "va_copy"
source_path: "cpp/utility/variadic/va_copy"
header: "<cstdarg>"
category: "utility"
since: "C++11"
---

The va_copy macro copies src to dest.

## Declarations
```cpp
void va_copy( std::va_list dest, std::va_list src );
```
_(since C++11)_

## Parameters
- `dest`: an instance of the va_list type to initialize
- `src`: the source va_list that will be used to initialize dest

## Example
```cpp
#include <cmath>
#include <cstdarg>
#include <iostream>
 
double sample_stddev(int count, ...) 
{
    double sum = 0;
    std::va_list args1;
    va_start(args1, count);
    std::va_list args2;
    va_copy(args2, args1);
    for (int i = 0; i < count; ++i)
    {
        double num = va_arg(args1, double);
        sum += num;
    }
    va_end(args1);
    double mean = sum / count;
 
    double sum_sq_diff = 0;
    for (int i = 0; i < count; ++i)
    {
        double num = va_arg(args2, double);
        sum_sq_diff += (num - mean) * (num - mean);
    }
    va_end(args2);
    return std::sqrt(sum_sq_diff / count);
}
 
int main() 
{
    std::cout << sample_stddev(4, 25.0, 27.3, 26.9, 25.7) << '\n';
}
```

## See also
- [va_start](/cpp/utility/variadic/va_start/)
- [va_arg](/cpp/utility/variadic/va_arg/)
- [va_end](/cpp/utility/variadic/va_end/)
- [C documentation](/c/variadic/va_copy/)
