---
title: "std::numeric_limits<T>::max_digits10"
source_path: "cpp/types/numeric_limits/max_digits10"
category: "types"
since: "C++11"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::max_digits10 is the number of base-10 digits that are necessary to uniquely represent all distinct values of the type T, such as necessary for serialization/deserialization to text. This constant is meaningful for all floating-point types.

## Declarations
```cpp
static constexpr int max_digits10
```
_(since C++11)_

## Notes
Unlike most mathematical operations, the conversion of a floating-point value to text and back is exact as long as at least max_digits10 were used (9 for float, 17 for double): it is guaranteed to produce the same floating-point value, even though the intermediate text representation is not exact. It may take over a hundred decimal digits to represent the precise value of a float in decimal notation.

## Example
```cpp
#include <cmath>
#include <iomanip>
#include <iostream>
#include <limits>
#include <sstream>
 
int main()
{
    float value = 10.0000086;
 
    constexpr auto digits10 = std::numeric_limits<decltype(value)>::digits10;
    constexpr auto max_digits10 = std::numeric_limits<decltype(value)>::max_digits10;
    constexpr auto submax_digits10 = max_digits10 - 1;
 
    std::cout << "float:\n"
                 "       digits10 is " << digits10 << " digits\n"
                 "   max_digits10 is " << max_digits10 << " digits\n"
                 "submax_digits10 is " << submax_digits10 << " digits\n\n";
 
    const auto original_precision = std::cout.precision();
    for (auto i = 0; i < 5; ++i)
    {
        std::cout
            << "   max_digits10: " << std::setprecision(max_digits10) << value << "\n"
               "submax_digits10: " << std::setprecision(submax_digits10) << value
            << "\n\n";
 
        value = std::nextafter(value, std::numeric_limits<decltype(value)>::max());
    }
    std::cout.precision(original_precision);
}
```

## See also
- [radix](/cpp/types/numeric_limits/radix/)
- [digits](/cpp/types/numeric_limits/digits/)
- [digits10](/cpp/types/numeric_limits/digits10/)
- [min_exponent](/cpp/types/numeric_limits/min_exponent/)
- [max_exponent](/cpp/types/numeric_limits/max_exponent/)
