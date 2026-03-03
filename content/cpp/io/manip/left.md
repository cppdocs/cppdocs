---
title: "std::left, std::right, std::internal"
source_path: "cpp/io/manip/left"
header: "<ios>"
category: "io"
---

Modifies the positioning of the fill characters in an output stream. left and right apply to any type being output, internal applies to integer, floating-point, and monetary output. Has no effect on input.

## Declarations
```cpp
std::ios_base& left( std::ios_base& str );
```

```cpp
std::ios_base& right( std::ios_base& str );
```

```cpp
std::ios_base& internal( std::ios_base& str );
```

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
 
int main()
{
    std::cout.imbue(std::locale("en_US.utf8"));
 
    std::cout << "Default positioning:\n" << std::setfill('*')
              << std::setw(12) << -1.23  << '\n'
              << std::setw(12) << std::hex << std::showbase << 42 << '\n'
              << std::setw(12) << std::put_money(123, true) << "\n\n";
 
    std::cout << "Left positioning:\n" << std::left
              << std::setw(12) << -1.23  << '\n'
              << std::setw(12) << 42 << '\n'
              << std::setw(12) << std::put_money(123, true) << "\n\n";
 
    std::cout << "Internal positioning:\n" << std::internal
              << std::setw(12) << -1.23  << '\n'
              << std::setw(12) << 42 << '\n'
              << std::setw(12) << std::put_money(123, true) << "\n\n";
 
    std::cout << "Right positioning:\n" << std::right
              << std::setw(12) << -1.23  << '\n'
              << std::setw(12) << 42 << '\n'
              << std::setw(12) << std::put_money(123, true) << '\n';
}
```

## See also
- [setw](/cpp/io/manip/setw/)
- [setfill](/cpp/io/manip/setfill/)
- [showbasenoshowbase](/cpp/io/manip/showbase/)
