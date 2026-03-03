---
title: "std::dec, std::hex, std::oct"
source_path: "cpp/io/manip/hex"
header: "<ios>"
category: "io"
---

Modifies the default numeric base for integer I/O.

## Declarations
```cpp
std::ios_base& dec( std::ios_base& str );
```

```cpp
std::ios_base& hex( std::ios_base& str );
```

```cpp
std::ios_base& oct( std::ios_base& str );
```

## Parameters
- `str`: reference to I/O stream

## Return value
str (reference to the stream after manipulation).

## Example
```cpp
#include <bitset>
#include <iostream>
#include <sstream>
 
int main()
{
    std::cout << "The number 42 in octal:   " << std::oct << 42 << '\n'
              << "The number 42 in decimal: " << std::dec << 42 << '\n'
              << "The number 42 in hex:     " << std::hex << 42 << '\n';
    int n;
    std::istringstream("2A") >> std::hex >> n;
    std::cout << std::dec << "Parsing \"2A\" as hex gives " << n << '\n';
    // the output base is sticky until changed
    std::cout << std::hex << "42 as hex gives " << 42
        << " and 21 as hex gives " << 21 << '\n';
 
    // Note: there is no I/O manipulator that sets up a stream to print out
    // numbers in binary format (e.g. bin). If binary output is necessary
    // the std::bitset trick can be used:
    std::cout << "The number 42 in binary:  " << std::bitset<8>{42} << '\n';
}
```

## See also
- [setbase](/cpp/io/manip/setbase/)
- [showbasenoshowbase](/cpp/io/manip/showbase/)
