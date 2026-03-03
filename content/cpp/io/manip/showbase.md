---
title: "std::showbase, std::noshowbase"
source_path: "cpp/io/manip/showbase"
header: "<ios>"
category: "io"
---

1) Enables the showbase flag in the stream str as if by calling str.setf([std::ios_base::showbase](/cpp/io/ios_base/fmtflags/)).

## Declarations
```cpp
std::ios_base& showbase( std::ios_base& str );
```

```cpp
std::ios_base& noshowbase( std::ios_base& str );
```

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Notes
As specifed in [std::num_put::put](/cpp/locale/num_put/put/), the showbase flag in integer output acts like the # format specifier in [std::printf](/cpp/io/c/printf/), which means the numeric base prefix is not added when outputting the value zero.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
#include <sstream>
 
int main()
{
    // showbase affects the output of octals and hexadecimals
    std::cout << std::hex
              << "showbase: " << std::showbase << 42 << '\n'
              << "noshowbase: " << std::noshowbase << 42 << '\n';
 
    // and both input and output of monetary values
    std::locale::global(std::locale("en_US.UTF8"));
    long double val = 0;
    std::istringstream("3.14") >> std::showbase >> std::get_money(val);
    std::cout << "With showbase, parsing 3.14 as money gives " << val << '\n';
    std::istringstream("3.14") >> std::noshowbase >> std::get_money(val);
    std::cout << "Without showbase, parsing 3.14 as money gives " << val << '\n';
}
```

## See also
- [resetiosflags](/cpp/io/manip/resetiosflags/)
- [setiosflags](/cpp/io/manip/setiosflags/)
