---
title: "std::abs(std::valarray)"
source_path: "cpp/numeric/valarray/abs"
header: "<valarray>"
category: "numeric"
---

Computes absolute value of each element in the value array.

## Declarations
```cpp
template< class T >
valarray<T> abs( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing absolute values of the values in va.

## Notes
Unqualified function (abs) is used to perform the computation. If such function is not available, std::abs is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<int> v{1, -2, 3, -4, 5, -6, 7, -8};
    std::valarray<int> v2 = std::abs(v);
    for (auto n : v2)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## See also
- [abs(int)labsllabs](/cpp/numeric/math/abs/)
- [abs(float)fabsfabsffabsl](/cpp/numeric/math/fabs/)
- [abs(std::complex)](/cpp/numeric/complex/abs/)
