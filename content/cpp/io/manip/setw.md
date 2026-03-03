---
title: "std::setw"
source_path: "cpp/io/manip/setw"
header: "<iomanip>"
category: "io"
---

When used in an expression out << std::setw(n) or in >> std::setw(n), sets the width parameter of the stream out or in to exactly n.

## Declarations
```cpp
/* unspecified */ setw( int n );
```

## Parameters
- `n`: new value for width

## Return value
An object of unspecified type such that

## Notes
The width property of the stream will be reset to zero (meaning "unspecified") if any of the following functions are called:

The exact effects this modifier has on the input and output vary between the individual I/O functions and are described at each operator<< and operator>> overload page individually.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
int main()
{
    std::cout << "no setw: [" << 42 << "]\n"
              << "setw(6): [" << std::setw(6) << 42 << "]\n"
              << "no setw, several elements: [" << 89 << 12 << 34 << "]\n"
              << "setw(6), several elements: [" << 89 << std::setw(6) << 12 << 34 << "]\n";
 
    std::istringstream is("hello, world");
    char arr[10];
 
    is >> std::setw(6) >> arr;
    std::cout << "Input from \"" << is.str() << "\" with setw(6) gave \""
              << arr << "\"\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 183 | C++98 | setw could only be used with streams oftype std::ostream or std::istream | usable with anycharacter stream |

## See also
- [width](/cpp/io/ios_base/width/)
- [setfill](/cpp/io/manip/setfill/)
- [internalleftright](/cpp/io/manip/left/)
- [showbasenoshowbase](/cpp/io/manip/showbase/)
