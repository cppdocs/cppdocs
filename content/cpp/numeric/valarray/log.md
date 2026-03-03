---
title: "std::log(std::valarray)"
source_path: "cpp/numeric/valarray/log"
header: "<valarray>"
category: "numeric"
---

For each element in va computes natural logarithm of the value of the element.

## Declarations
```cpp
template< class T >
valarray<T> log( const valarray<T>& va );
```

## Parameters
- `va`: value array to apply the operation to

## Return value
Value array containing natural logarithms of the values in va.

## Notes
Unqualified function (log) is used to perform the computation. If such function is not available, [std::log](/cpp/numeric/math/log/) is used due to [argument-dependent lookup](/cpp/language/adl/).

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <valarray>
 
void show(char const* title, const std::valarray<double>& va)
{
    std::cout << title << " :" << std::right << std::fixed;
    for (double x : va)
        std::cout << std::setw(10) << x;
    std::cout << '\n';
}
 
int main()
{
    const std::valarray<double> n{0.0, 1.0, 2.0, 3.0};
    const std::valarray<double> exp_n{std::exp(n)};
    const std::valarray<double> log_exp_n{std::log(exp_n)};
 
    show("n      ", n);
    show("eⁿ     ", exp_n);
    show("log(eⁿ)", log_exp_n);
}
```

## See also
- [log10(std::valarray)](/cpp/numeric/valarray/log10/)
- [std::log10](/cpp/numeric/math/log10/)
- [exp(std::valarray)](/cpp/numeric/valarray/exp/)
- [std::exp](/cpp/numeric/math/exp/)
- [loglogflogl](/cpp/numeric/math/log/)
- [log(std::complex)](/cpp/numeric/complex/log/)
