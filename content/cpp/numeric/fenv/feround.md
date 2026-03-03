---
title: "std::fegetround, std::fesetround"
source_path: "cpp/numeric/fenv/feround"
header: "<cfenv>"
category: "numeric"
since: "C++11"
---

Manages the floating-point rounding direction.

## Declarations
```cpp
int fesetround( int round )
```
_(since C++11)_

```cpp
int fegetround()
```
_(since C++11)_

## Parameters
- `round`: rounding direction, one of floating point rounding macros

## Return value
1) 0 on success, non-zero otherwise.

## Notes
The current rounding mode, reflecting the effects of the most recent fesetround, can also be queried with [FLT_ROUNDS](/cpp/types/climits/flt_rounds/).

See [floating-point rounding macros](/cpp/numeric/fenv/fe_round/) for the effects of rounding.

## Example
```cpp
#include <cfenv>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <utility>
// #pragma STDC FENV_ACCESS ON
 
int main()
{
    static constexpr std::pair<const char*, const double> samples[]
    {
        {" 12.0", 12.0},  {" 12.1", 12.1}, {"-12.1", -12.1}, {" 12.5", 12.5},
        {"-12.5", -12.5}, {" 12.9", 12.9}, {"-12.9", -12.9}, {" 13.0", 13.0}
    };
 
    std::cout <<
        "│ sample │  FE_DOWNWARD  │   FE_UPWARD   │ FE_TONEAREST  │ FE_TOWARDZERO │\n";
 
    for (const auto& [str, fp] : samples)
    {
        std::cout << "│ " << std::setw(6) << str << " │  ";
        for (const int dir : {FE_DOWNWARD, FE_UPWARD, FE_TONEAREST, FE_TOWARDZERO})
        {
            std::fesetround(dir);
            std::cout << std::setw(10) << std::fixed << std::nearbyint(fp) << "   │  ";
        }
        std::cout << '\n';
    }
}
```

## See also
- [nearbyintnearbyintfnearbyintl](/cpp/numeric/math/nearbyint/)
- [rintrintfrintllrintlrintflrintlllrintllrintfllrintl](/cpp/numeric/math/rint/)
- [C documentation](/c/numeric/fenv/feround/)
