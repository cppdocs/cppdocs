---
title: "operator==(std::expected)"
source_path: "cpp/utility/expected/operator_cmp"
category: "utility"
since: "C++23"
---

Performs comparison operations on std::expected objects.

## Declarations
```cpp
Primary template
```

```cpp
template< class T2, class E2 >
requires (!std::is_void_v<T2>)
friend constexpr bool operator==( const expected& lhs,
const std::expected<T2, E2>& rhs );
```
_(since C++23)_

```cpp
template< class E2 >
friend constexpr bool operator==( const expected& lhs,
const std::unexpected<E2>& unex );
```
_(since C++23)_

```cpp
template< class T2 >
friend constexpr bool operator==( const expected& lhs, const T2& val );
```
_(since C++23)_

```cpp
void partial specialization
```

```cpp
template< class T2, class E2 >
requires std::is_void_v<T2>
friend constexpr bool operator==( const expected& lhs,
const std::expected<T2, E2>& rhs );
```
_(since C++23)_

```cpp
template< class E2 >
friend constexpr bool operator==( const expected& lhs,
const std::unexpected<E2>& unex );
```
_(since C++23)_

## Parameters
- `lhs, rhs`: std::expected object(s) to compare
- `unex`: std::unexpected value to compare to lhs
- `val`: value to compare to the expected value contained in lhs

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constrained_equality
202411L
(C++26)
constrained comparison operators for std::expected

## Example
```cpp
#include <expected>
#include <iostream>
#include <string_view>
 
using namespace std::string_view_literals;
 
int main()
{
    auto x1{"\N{GREEN HEART}"sv};
    auto x2{"\N{CROSS MARK}"sv};
    std::expected<std::string_view, int> e1{x1}, e2{x1}, e3{x2};
    std::unexpected u1{13};
 
    std::cout << "Overload (1):\n"
              << e1.value() << (e1 == e2 ? " == " : " != ") << *e2 << '\n'
              << e1.value() << (e1 != e3 ? " != " : " == ") << *e3 << "\n\n";
 
    std::cout << "Overload (2):\n"
              << e1.value() << (e1 == u1 ? " == " : " != ") << u1.error() << '\n';
    e1 = std::unexpected{13};
    std::cout << e1.error() << (e1 == u1 ? " == " : " != ") << u1.error() << '\n';
    e1 = std::unexpected{31};
    std::cout << e1.error() << (e1 != u1 ? " != " : " == ") << u1.error() << '\n';
 
    std::cout << "Overload (3):\n"
              << *e1 << (e1 == x1 ? " == " : " != ") << x1 << '\n'
              << *e1 << (e1 != x2 ? " != " : " == ") << x2 << "\n\n";
}
```

## See also
- [unexpected](/cpp/utility/expected/unexpected/)
