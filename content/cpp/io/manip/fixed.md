---
title: "std::fixed, std::scientific, std::hexfloat, std::defaultfloat"
source_path: "cpp/io/manip/fixed"
header: "<ios>"
category: "io"
since: "C++11"
---

Modifies the default formatting for floating-point output.

## Declarations
```cpp
std::ios_base& fixed( std::ios_base& str );
```

```cpp
std::ios_base& scientific( std::ios_base& str );
```

```cpp
std::ios_base& hexfloat( std::ios_base& str );
```
_(since C++11)_

```cpp
std::ios_base& defaultfloat( std::ios_base& str );
```
_(since C++11)_

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Notes
Hexadecimal floating-point formatting ignores the stream precision specification, as required by the specification of [std::num_put::do_put](/cpp/locale/num_put/put/).

These manipulators do not affect floating-point parsing.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
enum class cap { title, middle, end };
 
void print(const char* text, double num, cap c)
{
    if (c == cap::title)
        std::cout <<
            "┌──────────┬────────────┬──────────────────────────┐\n"
            "│  number  │   iomanip  │      representation      │\n"
            "├──────────┼────────────┼──────────────────────────┤\n";
    std::cout << std::left
         << "│ " << std::setw(8) << text <<      " │ fixed      │ "
         << std::setw(24) << std::fixed  << num <<            " │\n"
         << "│ " << std::setw(8) << text <<      " │ scientific │ "
         << std::setw(24) << std::scientific << num <<        " │\n"
         << "│ " << std::setw(8) << text <<      " │ hexfloat   │ "
         << std::setw(24) << std::hexfloat << num <<          " │\n"
         << "│ " << std::setw(8) << text <<      " │ default    │ "
         << std::setw(24) << std::defaultfloat << num <<      " │\n";
    std::cout << (c != cap::end ?
            "├──────────┼────────────┼──────────────────────────┤\n" :
            "└──────────┴────────────┴──────────────────────────┘\n");
}
 
int main()
{
    print("0.0", 0.0, cap::title);
    print("0.01", 0.01, cap::middle);
    print("0.00001", 0.00001, cap::end);
 
    // Note; choose clang for correct output
    double f;
    std::istringstream("0x1.8p+0") >> f;
    std::cout << "Parsing 0x1.8p+0 gives " << f << '\n';
 
    std::istringstream("0x1P-1022") >> f;
    std::cout << "Parsing 0x1P-1022 gives " << f << '\n';
}
```

## See also
- [setprecision](/cpp/io/manip/setprecision/)
