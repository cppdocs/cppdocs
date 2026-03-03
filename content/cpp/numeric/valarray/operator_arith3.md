---
title: "operator+,-,*,/,%,&,|,^,<<,>>,&&,|| (std::valarray)"
source_path: "cpp/numeric/valarray/operator"
header: "<valarray>"
category: "numeric"
---

Apply binary operators to each element of two valarrays, or a valarray and a value.

## Declarations
```cpp
template< class T >
std::valarray<T> operator+ ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator- ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator* ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator/ ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator% ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator& ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator| ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator^ ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator<<( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator>>( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator&&( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator||( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
```

```cpp
template< class T >
std::valarray<T> operator+ ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator- ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator* ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator/ ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator% ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator& ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator| ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator^ ( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator<<( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<T> operator>>( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator&&( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator||( const typename std::valarray<T>::value_type & val,
const std::valarray<T>& rhs );
```

```cpp
template< class T >
std::valarray<T> operator+ ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator- ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator* ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator/ ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator% ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator& ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator| ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator^ ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator<<( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<T> operator>>( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<bool> operator&&( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
template< class T >
std::valarray<bool> operator||( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & val );
```

## Parameters
- `rhs`: a numeric array
- `lhs`: a numeric array
- `val`: a value of type T

## Return value
A valarray with the same size as the parameter.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<double> a(1, 8);
    std::valarray<double> b{1, 2, 3, 4, 5, 6, 7, 8};
    std::valarray<double> c = -b;
    // literals must also be of type T until LWG3074 (double in this case)
    std::valarray<double> d = std::sqrt(b * b - 4.0 * a * c);
    std::valarray<double> x1 = 2.0 * c / (-b + d);
    std::valarray<double> x2 = 2.0 * c / (-b - d);
    std::cout << "quadratic equation:  root 1:    root 2:   b: c:\n";
    for (std::size_t i = 0; i < a.size(); ++i)
        std::cout << a[i] << "\u00B7x\u00B2 + " << b[i] << "\u00B7x + "
                  << c[i] << " = 0  " << std::fixed << x1[i]
                  << "  " << x2[i] << std::defaultfloat
                  << "  " << -x1[i] - x2[i]
                  << "  " << x1[i] * x2[i] << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3074 | C++98 | T is deduced from both the scalar and the valarray for (2,3), disallowing mixed-type calls | only deduce T from the valarray |

## See also
- [operator+operator-operator~operator!](/cpp/numeric/valarray/operator_arith/)
- [operator+=operator-=operator*=operator/=operator%=operator&=operator|=operator^=operator<<=operator>>=](/cpp/numeric/valarray/operator_arith2/)
