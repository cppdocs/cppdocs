---
title: "std::cmp_equal, cmp_not_equal, cmp_less, cmp_greater, cmp_less_equal, cmp_greater_equal"
source_path: "cpp/utility/intcmp"
header: "<utility>"
category: "utility"
since: "C++20"
---

Compare the values of two integers t and u. Unlike builtin comparison operators, negative signed integers always compare less than (and not equal to) unsigned integers: the comparison is safe against non-value-preserving integer conversion.

## Declarations
```cpp
template< class T, class U >
constexpr bool cmp_equal( T t, U u ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
constexpr bool cmp_not_equal( T t, U u ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
constexpr bool cmp_less( T t, U u ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
constexpr bool cmp_greater( T t, U u ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
constexpr bool cmp_less_equal( T t, U u ) noexcept;
```
_(since C++20)_

```cpp
template< class T, class U >
constexpr bool cmp_greater_equal( T t, U u ) noexcept;
```
_(since C++20)_

## Parameters
- `t`: left-hand argument
- `u`: right-hand argument

## Notes
These functions cannot be used to compare [enums](/cpp/language/enum/) (including [std::byte](/cpp/types/byte/)), char, char8_t, char16_t, char32_t, wchar_t and bool.

## Example
```cpp
#include <utility>
 
// Uncommenting the next line will disable "signed/unsigned comparison" warnings:
// #pragma GCC diagnostic ignored "-Wsign-compare"
 
int main()
{
    static_assert(sizeof(int) == 4); // precondition
 
    // Quite surprisingly
    static_assert(-1 > 1U); //< warning: sign-unsign comparison
    // because after implicit conversion of -1 to the RHS type (`unsigned int`)
    // the expression is equivalent to:
    static_assert(0xFFFFFFFFU > 1U);
    static_assert(0xFFFFFFFFU == static_cast<unsigned>(-1));
 
    // In contrast, the cmp_* family compares integers as most expected -
    // negative signed integers always compare less than unsigned integers:
    static_assert(std::cmp_less(-1, 1U));
    static_assert(std::cmp_less_equal(-1, 1U));
    static_assert(!std::cmp_greater(-1, 1U));
    static_assert(!std::cmp_greater_equal(-1, 1U));
 
    static_assert(-1 == 0xFFFFFFFFU); //< warning: sign-unsign comparison
    static_assert(std::cmp_not_equal(-1, 0xFFFFFFFFU));
}
```

## See also
- [equal_to](/cpp/utility/functional/equal_to/)
- [not_equal_to](/cpp/utility/functional/not_equal_to/)
- [less](/cpp/utility/functional/less/)
- [greater](/cpp/utility/functional/greater/)
- [less_equal](/cpp/utility/functional/less_equal/)
- [greater_equal](/cpp/utility/functional/greater_equal/)
- [ranges::equal_to](/cpp/utility/functional/ranges/equal_to/)
- [ranges::not_equal_to](/cpp/utility/functional/ranges/not_equal_to/)
- [ranges::less](/cpp/utility/functional/ranges/less/)
- [ranges::greater](/cpp/utility/functional/ranges/greater/)
- [ranges::less_equal](/cpp/utility/functional/ranges/less_equal/)
- [ranges::greater_equal](/cpp/utility/functional/ranges/greater_equal/)
- [compare_three_way](/cpp/utility/compare/compare_three_way/)
- [in_range](/cpp/utility/in_range/)
- [numeric_limits](/cpp/types/numeric_limits/)
