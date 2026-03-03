---
title: "std::setiosflags"
source_path: "cpp/io/manip/setiosflags"
header: "<iomanip>"
category: "io"
---

When used in an expression out << setiosflags(mask) or in >> setiosflags(mask), sets all format flags of the stream out or in as specified by the mask.

## Declarations
```cpp
/*unspecified*/ setiosflags( std::ios_base::fmtflags mask );
```

## Parameters
- `mask`: bitmask of the flags to set

## Return value
An object of unspecified type such that

## Example
```cpp
#include <iomanip>
#include <iostream>
 
int main()
{
    std::cout << std::resetiosflags(std::ios_base::dec) 
              << std::setiosflags(  std::ios_base::hex
                                  | std::ios_base::uppercase
                                  | std::ios_base::showbase) << 42 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 183 | C++98 | setiosflags could only be used with streamsof type std::ostream or std::istream | usable with anycharacter stream |

## See also
- [setf](/cpp/io/ios_base/setf/)
- [resetiosflags](/cpp/io/manip/resetiosflags/)
