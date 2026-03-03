---
title: "std::setfill"
source_path: "cpp/io/manip/setfill"
header: "<iomanip>"
category: "io"
---

When used in an expression out << setfill(c) sets the fill character of the stream out to c.

## Declarations
```cpp
template< class CharT >
/*unspecified*/ setfill( CharT c );
```

## Parameters
- `c`: new value for the fill character

## Return value
An object of unspecified type such that

## Notes
The current fill character may be obtained with [std::ostream::fill](/cpp/io/basic_ios/fill/).

## Example
```cpp
#include <iomanip>
#include <iostream>
 
int main()
{
    std::cout << "default fill: [" << std::setw(10) << 42 << "]\n"
              << "setfill('*'): [" << std::setfill('*')
                                   << std::setw(10) << 42 << "]\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 183 | C++98 | setbase could only be used withstreams of type std::ostream | usable with any outputcharacter stream |

## See also
- [fill](/cpp/io/basic_ios/fill/)
- [internalleftright](/cpp/io/manip/left/)
- [setw](/cpp/io/manip/setw/)
