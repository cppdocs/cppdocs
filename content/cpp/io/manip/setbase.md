---
title: "std::setbase"
source_path: "cpp/io/manip/setbase"
header: "<iomanip>"
category: "io"
---

Sets the numeric base of the stream. When used in an expression out << setbase(base) or in >> setbase(base), changes the basefield flag of the stream out or in, depending on the value of base:

## Declarations
```cpp
/*unspecified*/ setbase( int base );
```

## Parameters
- `base`: new value for basefield

## Return value
An object of unspecified type such that

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
int main()
{
    std::cout << "Parsing string \"10 0x10 010\"\n";
 
    int n1, n2, n3;
    std::istringstream s("10 0x10 010");
 
    s >> std::setbase(16) >> n1 >> n2 >> n3;
    std::cout << "hexadecimal parse: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
 
    s.clear();
    s.seekg(0);
 
    s >> std::setbase(0) >> n1 >> n2 >> n3;
    std::cout << "prefix-dependent parse: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
 
    std::cout << "hex output: " << std::setbase(16)
              << std::showbase << n1 << ' ' << n2 << ' ' << n3 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 183 | C++98 | setbase could only be used with streamsof type std::ostream or std::istream | usable with anycharacter stream |

## See also
- [dechexoct](/cpp/io/manip/hex/)
- [showbasenoshowbase](/cpp/io/manip/showbase/)
