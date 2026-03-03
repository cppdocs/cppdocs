---
title: "std::setprecision"
source_path: "cpp/io/manip/setprecision"
header: "<iomanip>"
category: "io"
---

When used in an expression out << setprecision(n) or in >> setprecision(n), sets the precision parameter of the stream out or in to exactly n.

## Declarations
```cpp
/*unspecified*/ setprecision( int n );
```

## Parameters
- `n`: new value for precision

## Return value
An object of unspecified type such that

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <limits>
#include <numbers>
 
int main()
{
    constexpr long double pi{std::numbers::pi_v<long double>};
 
    const auto default_precision{std::cout.precision()};
    constexpr auto max_precision{std::numeric_limits<long double>::digits10 + 1}; 
 
    std::cout << "default precision: " << default_precision << '\n'
              << "maximum precision: " << max_precision << "\n\n"
                 "precision: pi:\n";
 
    for (int p{0}; p <= max_precision; ++p)
        std::cout << std::setw(2) << p << "  " << std::setprecision(p) << pi << '\n';
 
    std::cout << std::setprecision(default_precision); // restore defaults
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 183 | C++98 | setprecision could only be used with streamsof type std::ostream or std::istream | usable with anycharacter stream |

## See also
- [fixedscientifichexfloatdefaultfloat](/cpp/io/manip/fixed/)
- [precision](/cpp/io/ios_base/precision/)
