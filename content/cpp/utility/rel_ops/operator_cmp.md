---
title: "std::rel_ops::operator!=,>,<=,>="
source_path: "cpp/utility/rel_ops/operator_cmp"
header: "<utility>"
category: "utility"
deprecated: "C++20"
---

Given a user-defined operator== and operator< for objects of type T, implements the usual semantics of other comparison operators.

## Declarations
```cpp
template< class T >
bool operator!=( const T& lhs, const T& rhs );
```
_(deprecated in C++20)_

```cpp
template< class T >
bool operator>( const T& lhs, const T& rhs );
```
_(deprecated in C++20)_

```cpp
template< class T >
bool operator<=( const T& lhs, const T& rhs );
```
_(deprecated in C++20)_

```cpp
template< class T >
bool operator>=( const T& lhs, const T& rhs );
```
_(deprecated in C++20)_

## Parameters
- `lhs`: left-hand argument
- `rhs`: right-hand argument

## Notes
[Boost.operators](https://www.boost.org/doc/libs/release/libs/utility/operators.htm) provides a more versatile alternative to std::rel_ops.

As of C++20, std::rel_ops are deprecated in favor of [operator<=>](/cpp/language/default_comparisons/).

## Example
```cpp
#include <iostream>
#include <utility>
 
struct Foo
{
    int n;
};
 
bool operator==(const Foo& lhs, const Foo& rhs)
{
    return lhs.n == rhs.n;
}
 
bool operator<(const Foo& lhs, const Foo& rhs)
{
    return lhs.n < rhs.n;
}
 
int main()
{
    Foo f1 = {1};
    Foo f2 = {2};
    using namespace std::rel_ops;
 
    std::cout << std::boolalpha
              << "{1} != {2} : " << (f1 != f2) << '\n'
              << "{1} >  {2} : " << (f1 >  f2) << '\n'
              << "{1} <= {2} : " << (f1 <= f2) << '\n'
              << "{1} >= {2} : " << (f1 >= f2) << '\n';
}
```
