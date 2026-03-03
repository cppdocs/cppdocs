---
title: "std::ranges::borrowed_range, std::ranges::enable_borrowed_range"
source_path: "cpp/ranges/borrowed_range"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

1) The concept borrowed_range defines the requirements of a range such that a function can take it by value and return iterators obtained from it without danger of dangling.

## Declarations
```cpp
template< class R >
concept borrowed_range =
ranges::range<R> &&
(std::is_lvalue_reference_v<R> ||
ranges::enable_borrowed_range<std::remove_cvref_t<R>>);
```
_(since C++20)_

```cpp
template< class R >
constexpr bool enable_borrowed_range = false;
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <array>
#include <cstddef>
#include <iostream>
#include <ranges>
#include <span>
#include <type_traits>
 
template<typename T, std::size_t N>
struct MyRange : std::array<T, N> {};
 
template<typename T, std::size_t N>
constexpr bool std::ranges::enable_borrowed_range<MyRange<T, N>> = false;
 
template<typename T, std::size_t N>
struct MyBorrowedRange : std::span<T, N> {};
 
template<typename T, std::size_t N>
constexpr bool std::ranges::enable_borrowed_range<MyBorrowedRange<T, N>> = true;
 
int main()
{
    static_assert(std::ranges::range<MyRange<int, 8>>);
    static_assert(std::ranges::borrowed_range<MyRange<int, 8>> == false);
    static_assert(std::ranges::range<MyBorrowedRange<int, 8>>);
    static_assert(std::ranges::borrowed_range<MyBorrowedRange<int, 8>> == true);
 
    auto getMyRangeByValue = []{ return MyRange<int, 4>{{1, 2, 42, 3}}; };
    auto dangling_iter = std::ranges::max_element(getMyRangeByValue());
    static_assert(std::is_same_v<std::ranges::dangling, decltype(dangling_iter)>);
    // *dangling_iter; // compilation error (i.e. dangling protection works.)
 
    auto my = MyRange<int, 4>{{1, 2, 42, 3}};
    auto valid_iter = std::ranges::max_element(my);
    std::cout << *valid_iter << ' '; // OK: 42
 
    auto getMyBorrowedRangeByValue = []
    {
        static int sa[4]{1, 2, 42, 3};
        return MyBorrowedRange<int, std::size(sa)>{sa};
    };
    auto valid_iter2 = std::ranges::max_element(getMyBorrowedRangeByValue());
    std::cout << *valid_iter2 << '\n'; // OK: 42
}
```

## See also
- [ranges::dangling](/cpp/ranges/dangling/)
