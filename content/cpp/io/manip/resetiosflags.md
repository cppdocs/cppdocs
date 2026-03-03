---
title: "std::resetiosflags"
source_path: "cpp/io/manip/resetiosflags"
header: "<iomanip>"
category: "io"
---

When used in an expression out << resetiosflags(mask) or in >> resetiosflags(mask), clears all format flags of the stream out or in as specified by the mask.

## Declarations
```cpp
/*unspecified*/ resetiosflags( std::ios_base::fmtflags mask );
```

## Parameters
- `mask`: bitmask of the flags to clear

## Return value
An object of unspecified type such that

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <sstream>
 
int main()
{
    std::istringstream in("10 010 10 010 10 010");
    int n1, n2;
 
    in >> std::oct >> n1 >> n2;
    std::cout << "Parsing \"10 010\" with std::oct gives: " << n1 << ' ' << n2 << '\n';
 
    in >> std::dec >> n1 >> n2;
    std::cout << "Parsing \"10 010\" with std::dec gives: " << n1 << ' ' << n2 << '\n';
 
    in >> std::resetiosflags(std::ios_base::basefield) >> n1 >> n2;
    std::cout << "Parsing \"10 010\" with autodetect gives: " << n1 << ' ' << n2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 183 | C++98 | resetiosflags could only be used withstreams of type std::ostream or std::istream | usable with anycharacter stream |

## See also
- [setf](/cpp/io/ios_base/setf/)
- [setiosflags](/cpp/io/manip/setiosflags/)
