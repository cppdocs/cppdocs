---
title: "std::bind1st, std::bind2nd"
source_path: "cpp/utility/functional/bind12"
header: "<functional>"
category: "utility"
---

Binds a given argument x to a first or second parameter of the given binary function object f. That is, stores x within the resulting wrapper, which, if called, passes x as the first or the second parameter of f.

## Declarations
```cpp
template< class F, class T >
std::binder1st<F> bind1st( const F& f, const T& x );
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class F, class T >
std::binder2nd<F> bind2nd( const F& f, const T& x );
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `f`: pointer to a function to bind an argument to
- `x`: argument to bind to f

## Return value
A function object wrapping f and x.

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <cstddef>
#include <functional>
#include <iomanip>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<double> a = {0, 30, 45, 60, 90, 180};
    std::vector<double> r(a.size());
    const double pi = std::acos(-1); // since C++20 use std::numbers::pi
 
    std::transform(a.begin(), a.end(), r.begin(),
        std::bind1st(std::multiplies<double>(), pi / 180.0));
//  an equivalent lambda is: [pi](double a) { return a * pi / 180.0; });
 
    for (std::size_t n = 0; n < a.size(); ++n)
        std::cout << std::setw(3) << a[n] << "° = " << std::fixed << r[n]
                  << " rad\n" << std::defaultfloat;
}
```

## See also
- [binder1stbinder2nd](/cpp/utility/functional/binder12/)
- [bind_frontbind_back](/cpp/utility/functional/bind_front/)
