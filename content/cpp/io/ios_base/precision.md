---
title: "std::ios_base::precision"
source_path: "cpp/io/ios_base/precision"
category: "io"
---

Manages the precision (i.e. how many digits are generated) of floating point output performed by [std::num_put::do_put](/cpp/locale/num_put/put/).

## Declarations
```cpp
streamsize precision() const;
```

```cpp
streamsize precision( streamsize new_precision );
```

## Parameters
- `new_precision`: new precision setting

## Return value
The precision before the call to the function

## Example
```cpp
#include <iostream>
 
int main()
{
    const double d = 12.345678901234;
    std::cout << "The  default precision is " << std::cout.precision() << "\n\n";
    std::cout << "With default precision d is " << d << '\n';
    std::cout.precision(8);
    std::cout << "With high    precision d is " << d << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 189 | C++98 | 'precision' was defined as 'the number of digits afterthe decimal point', but it is not correct in some cases | corrected |

## See also
- [width](/cpp/io/ios_base/width/)
- [setprecision](/cpp/io/manip/setprecision/)
