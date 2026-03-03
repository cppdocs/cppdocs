---
title: "operator==,!=,<,<=,>,>=(std::valarray)"
source_path: "cpp/numeric/valarray/operator_cmp"
header: "<valarray>"
category: "numeric"
---

Compares each value within the numeric array with another value.

## Declarations
```cpp
template< class T >
std::valarray<bool> operator==( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator!=( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator< ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator<=( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator> ( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator>=( const std::valarray<T>& lhs, const std::valarray<T>& rhs );
```

```cpp
template< class T >
std::valarray<bool> operator==( const typename std::valarray<T>::value_type & lhsv,
const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator!=( const typename std::valarray<T>::value_type & lhsv,
const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator< ( const typename std::valarray<T>::value_type & lhsv,
const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator<=( const typename std::valarray<T>::value_type & lhsv,
const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator> ( const typename std::valarray<T>::value_type & lhsv,
const std::valarray<T>& rhs );
template< class T >
std::valarray<bool> operator>=( const typename std::valarray<T>::value_type & lhsv,
const std::valarray<T>& rhs );
```

```cpp
template< class T >
std::valarray<bool> operator==( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & rhsv );
template< class T >
std::valarray<bool> operator!=( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & rhsv );
template< class T >
std::valarray<bool> operator< ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & rhsv );
template< class T >
std::valarray<bool> operator<=( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & rhsv );
template< class T >
std::valarray<bool> operator> ( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & rhsv );
template< class T >
std::valarray<bool> operator>=( const std::valarray<T>& lhs,
const typename std::valarray<T>::value_type & rhsv );
```

## Parameters
- `lhs, rhs`: numeric arrays to compare
- `lhsv, rhsv`: values to compare to each element within a numeric array

## Return value
A numeric array of bool containing comparison results of corresponding elements.

## Notes
Each of the operators can only be instantiated if the following requirements are met:

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    // zero all negatives in a valarray
    std::valarray<int> v = {1, -1, 0, -3, 10, -1, -2};
    std::cout << "Before: ";
    for (auto n : v)
        std::cout << n << ' ';
    std::cout << '\n';
    v[v < 0] = 0;
    std::cout << "After: ";
    for (auto n : v)
        std::cout << n << ' ';
    std::cout << '\n';
 
    // convert the valarray<bool> result of == to a single bool
    std::valarray<int> a = {1, 2, 3};
    std::valarray<int> b = {2, 4, 6};
 
    std::cout << "2*a == b is " << std::boolalpha
              << (2 * a == b).min() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3074 | C++98 | T is deduced from both the scalar and the valarray for (2,3),disallowing mixed-type calls | only deduce T from the valarray |
