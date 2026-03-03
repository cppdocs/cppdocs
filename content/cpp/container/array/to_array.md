---
title: "std::to_array"
source_path: "cpp/container/array/to_array"
header: "<array>"
category: "container"
since: "C++20"
---

Creates a [std::array](/cpp/container/array/) from the one dimensional built-in array a. Copying or moving multidimensional built-in array is not supported.

## Declarations
```cpp
template< class T, std::size_t N >
constexpr std::array<std::remove_cv_t<T>, N> to_array( T (&a)[N] );
```
_(since C++20)_

```cpp
template< class T, std::size_t N >
constexpr std::array<std::remove_cv_t<T>, N> to_array( T (&&a)[N] );
```
_(since C++20)_

## Parameters
- `a`: the built-in array to be converted the std::array

## Notes
There are some occasions where [class template argument deduction](/cpp/language/ctad/) of [std::array](/cpp/container/array/) cannot be used while to_array is available:

## Example
```cpp
#include <array>
#include <memory>
#include <string_view>
#include <type_traits>
#include <utility>
 
// creates a constexpr array of string_view's    
constexpr auto w1n = std::to_array<std::string_view>({
    "Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer"
});
static_assert(std::is_same_v<decltype(w1n), const std::array<std::string_view, 6>>);
static_assert(w1n.size() == 6 and w1n[5] == "Jennifer");
 
int main()
{
    // copies a string literal
    auto a1 = std::to_array("foo");
    static_assert(a1.size() == 4);
 
    // deduces both element type and length
    auto a2 = std::to_array({0, 2, 1, 3});
    static_assert(std::is_same_v<decltype(a2), std::array<int, 4>>);
 
    // deduces length with element type specified
    // implicit conversion happens
    auto a3 = std::to_array<long>({0, 1, 3});
    static_assert(std::is_same_v<decltype(a3), std::array<long, 3>>);
 
    auto a4 = std::to_array<std::pair<int, float>>(
        {{3, 0.0f}, {4, 0.1f}, {4, 0.1e23f}});
    static_assert(a4.size() == 3);
 
    // creates a non-copyable std::array
    auto a5 = std::to_array({std::make_unique<int>(3)});
    static_assert(a5.size() == 1);
 
    // error: copying multidimensional arrays is not supported
    // char s[2][6] = {"nice", "thing"};
    // auto a6 = std::to_array(s);
}
```

## See also
- [make_array](/cpp/experimental/make_array/)
- [std::array](/cpp/container/array/)
