---
title: "std::binder1st, std::binder2nd"
source_path: "cpp/utility/functional/binder12"
header: "<functional>"
category: "utility"
---

A function object that binds an argument to a binary function.

## Declarations
```cpp
template< class Fn >
class binder1st
: public std::unary_function<typename Fn::second_argument_type,
typename Fn::result_type> {
protected:
Fn op;
typename Fn::first_argument_type value;
public:
binder1st( const Fn& fn,
const typename Fn::first_argument_type& value );
typename Fn::result_type
operator()(const typename Fn::second_argument_type& x) const;
typename Fn::result_type
operator()(typename Fn::second_argument_type& x) const;
};
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Fn >
class binder2nd
: public std::unary_function<typename Fn::first_argument_type,
typename Fn::result_type> {
protected:
Fn op;
typename Fn::second_argument_type value;
public:
binder2nd( const Fn& fn,
const typename Fn::second_argument_type& value );
typename Fn::result_type
operator()(const typename Fn::first_argument_type& x) const;
typename Fn::result_type
operator()(typename Fn::first_argument_type& x) const;
};
```
_(deprecated in C++11) (removed in C++17)_

## Example
```cpp
#include <cmath>
#include <functional>
#include <iostream>
#include <vector>
 
const double pi = std::acos(-1); // use std::numbers::pi in C++20
 
int main()
{
    // deprecated in C++11, removed in C++17
    auto f1 = std::bind1st(std::multiplies<double>(), pi / 180.0);
 
    // C++11 replacement
    auto f2 = [](double a) { return a * pi / 180.0; };
 
    for (double n : {0, 30, 45, 60, 90, 180})
        std::cout << n << "°\t" << std::fixed << "= "
                  << f1(n) << " rad (using binder)\t= "
                  << f2(n) << " rad (using lambda)\n"
                  << std::defaultfloat;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 109 | C++98 | operator() could not modify to argument passed to it | added overloads to handle this |

## See also
- [bind1stbind2nd](/cpp/utility/functional/bind12/)
