---
title: "std::literals::complex_literals::operator\"\"i, operator\"\"if, operator\"\"il"
source_path: "cpp/numeric/complex/operatori"
header: "<complex>"
category: "numeric"
since: "C++14"
---

Forms a [std::complex](/cpp/numeric/complex/) literal representing an imaginary number.

## Declarations
```cpp
constexpr complex<double> operator""i( long double arg );
constexpr complex<double> operator""i( unsigned long long arg );
```
_(since C++14)_

```cpp
constexpr complex<float> operator""if( long double arg );
constexpr complex<float> operator""if( unsigned long long arg );
```
_(since C++14)_

```cpp
constexpr complex<long double> operator""il( long double arg );
constexpr complex<long double> operator""il( unsigned long long arg );
```
_(since C++14)_

## Parameters
- `arg`: the value of the imaginary number

## Return value
The [std::complex](/cpp/numeric/complex/) literal with the real part zero and imaginary part arg.

## Notes
These operators are declared in the namespace std::literals::complex_literals, where both literals and complex_literals are inline namespaces. Access to these operators can be gained with either:

Even though if is a [keyword](/cpp/keywords/if/) in C++, it is a ud-suffix of the [literal operator](/cpp/language/user_literal/) of the form operator ""if and in the literal expressions such as 1if or 1.0if because it is not separated by whitespace and is not a standalone token.

## Example
```cpp
#include <complex>
#include <iostream>
 
int main()
{
    using namespace std::complex_literals;
 
    std::complex<double> c = 1.0 + 1i;
    std::cout << "abs" << c << " = " << std::abs(c) << '\n';
 
    std::complex<float> z = 3.0f + 4.0if;
    std::cout << "abs" << z << " = " << std::abs(z) << '\n';
}
```

## See also
- [(constructor)](/cpp/numeric/complex/complex/)
- [operator=](/cpp/numeric/complex/operator/)
- [C documentation](/c/numeric/complex/I/)
