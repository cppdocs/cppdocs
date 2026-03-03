---
title: "std::erase, std::erase_if(std::forward_list)"
source_path: "cpp/container/forward_list/erase2"
header: "<forward_list>"
category: "container"
since: "C++26"
---

1) Erases all elements that compare equal to value from the container. Equivalent to return c.remove_if([&](const auto& elem) -> bool { return elem == value; });.

## Declarations
```cpp
template< class T, class Alloc, class U >
std::forward_list<T, Alloc>::size_type
erase( std::forward_list<T, Alloc>& c, const U& value );
```
_(since C++20) (until C++26)_

```cpp
template< class T, class Alloc, class U = T >
std::forward_list<T, Alloc>::size_type
erase( std::forward_list<T, Alloc>& c, const U& value );
```
_(since C++26)_

```cpp
template< class T, class Alloc, class Pred >
std::forward_list<T, Alloc>::size_type
erase_if( std::forward_list<T, Alloc>& c, Pred pred );
```
_(since C++20)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed
- `pred`: unary predicate which returns true if the element should be erased. The expression pred(v) must be convertible to bool for every argument v of type (possibly const) T, regardless of value category, and must not modify v. Thus, a parameter type of T&is not allowed, nor is T unless for T a move is equivalent to a copy(since C++11).

## Return value
The number of erased elements.

## Notes
Unlike [std::forward_list::remove](/cpp/container/forward_list/remove/), erase accepts heterogeneous types and does not force a conversion to the container's value type before invoking the == operator.

## Example
```cpp
#include <complex>
#include <iostream>
#include <numeric>
#include <string_view>
#include <forward_list>
 
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
    std::forward_list<char> cnt(10);
    std::iota(cnt.begin(), cnt.end(), '0');
    println("Initially, cnt = ", cnt);
 
    std::erase(cnt, '3');
    println("After erase '3', cnt = ", cnt);
 
    auto erased = std::erase_if(cnt, [](char x) { return (x - '0') % 2 == 0; });
    println("After erase all even numbers, cnt = ", cnt);
    std::cout << "Erased even numbers: " << erased << '\n';
 
    std::forward_list<std::complex<double>> nums{{2, 2}, {4, 2}, {4, 8}, {4, 2}};
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
- [removeremove_if](/cpp/container/forward_list/remove/)
