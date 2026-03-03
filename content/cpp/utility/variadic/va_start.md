---
title: "va_start"
source_path: "cpp/utility/variadic/va_start"
header: "<cstdarg>"
category: "utility"
---

The va_start macro enables access to the variable arguments following the named argument parm_n.

## Declarations
```cpp
void va_start( std::va_list ap, parm_n );
```

## Parameters
- `ap`: an object of the va_list type
- `parm_n`: the named parameter preceding the first variable parameter

## Notes
va_start is required to support parm_n with overloaded operator&.

## Example
```cpp
#include <cstdarg>
#include <iostream>
 
int add_nums(int count...)
{
    int result = 0;
    std::va_list args;
    va_start(args, count);
    for (int i = 0; i < count; ++i)
        result += va_arg(args, int);
    va_end(args);
    return result;
}
 
int main()
{
    std::cout << add_nums(4, 25, 25, 50, 50) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 273 | C++98 | it was unclear whether va_start is required tosupport parm_ns with overloaded operator& | required |
| LWG 2099 | C++98 | the behavior was undefined if parm_n isdeclared with a function, array, or reference type | the behavior is undefined ifparm_n is of reference type |

## See also
- [va_arg](/cpp/utility/variadic/va_arg/)
- [va_end](/cpp/utility/variadic/va_end/)
- [C documentation](/c/variadic/va_start/)
