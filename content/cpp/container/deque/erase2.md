---
title: "std::erase, std::erase_if(std::deque)"
source_path: "cpp/container/deque/erase2"
header: "<deque>"
category: "container"
since: "C++26"
---

1) Erases all elements that compare equal to value from the container. Equivalent to
auto it = std::remove(c.begin(), c.end(), value);
auto r = c.end() - it;
c.erase(it, c.end());
return r;

## Declarations
```cpp
template< class T, class Alloc, class U >
std::deque<T, Alloc>::size_type
erase( std::deque<T, Alloc>& c, const U& value );
```
_(since C++20) (until C++26)_

```cpp
template< class T, class Alloc, class U = T >
std::deque<T, Alloc>::size_type
erase( std::deque<T, Alloc>& c, const U& value );
```
_(since C++26)_

```cpp
template< class T, class Alloc, class Pred >
std::deque<T, Alloc>::size_type
erase_if( std::deque<T, Alloc>& c, Pred pred );
```
_(since C++20)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed
- `pred`: unary predicate which returns true if the element should be erased. The expression pred(v) must be convertible to bool for every argument v of type (possibly const) T, regardless of value category, and must not modify v. Thus, a parameter type of T&is not allowed, nor is T unless for T a move is equivalent to a copy(since C++11).

## Return value
The number of erased elements.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithm (1)

## Example
```cpp
#include <complex>
#include <iostream>
#include <numeric>
#include <string_view>
#include <deque>
 
void println(std::string_view comment, const auto& c)
{
    std::cout << comment << '[';
    bool first{true};
    for (const auto& x : c)
        std::cout << (first ? first = false, "" : ", ") << x;
    std::cout << "]\n";
}
 
int main()
{
    std::deque<char> cnt(10);
    std::iota(cnt.begin(), cnt.end(), '0');
    println("Initially, cnt = ", cnt);
 
    std::erase(cnt, '3');
    println("After erase '3', cnt = ", cnt);
 
    auto erased = std::erase_if(cnt, [](char x) { return (x - '0') % 2 == 0; });
    println("After erase all even numbers, cnt = ", cnt);
    std::cout << "Erased even numbers: " << erased << '\n';
 
    std::deque<std::complex<double>> nums{{2, 2}, {4, 2}, {4, 8}, {4, 2}};
    #ifdef __cpp_lib_algorithm_default_value_type
        std::erase(nums, {4, 2});
    #else
        std::erase(nums, std::complex<double>{4, 2});
    #endif
    println("After erase {4, 2}, nums = ", nums);
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
