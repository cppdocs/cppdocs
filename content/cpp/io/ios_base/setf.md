---
title: "std::ios_base::setf"
source_path: "cpp/io/ios_base/setf"
category: "io"
---

Sets the formatting flags to specified settings.

## Declarations
```cpp
fmtflags setf( fmtflags flags );
```

```cpp
fmtflags setf( fmtflags flags, fmtflags mask );
```

## Parameters
- `flags, mask`: new formatting setting. mask defines which flags can be altered, flags defines which flags of those to be altered should be set (others will be cleared). Both parameters can be a combination of the formatting flags constants

## Return value
The formatting flags before the call to the function.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <numbers>
 
int main()
{
    const double PI = std::numbers::pi;
    const int WIDTH = 15;
 
    std::cout.setf(std::ios::right); // equivalent: cout << right;
    std::cout << std::setw(WIDTH / 2) << "radius"
              << std::setw(WIDTH) << "circumference" << '\n';
 
    std::cout.setf(std::ios::fixed); // equivalent: cout << fixed;
    for (double radius = 1; radius <= 6; radius += 0.5)
        std::cout << std::setprecision(1) << std::setw(WIDTH / 2)
                  << radius
                  << std::setprecision(2) << std::setw(WIDTH)
                  << (2 * PI * radius) << '\n';
}
```

## See also
- [flags](/cpp/io/ios_base/flags/)
- [unsetf](/cpp/io/ios_base/unsetf/)
