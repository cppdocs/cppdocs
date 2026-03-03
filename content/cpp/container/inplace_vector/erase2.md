---
title: "std::erase, std::erase_if(std::inplace_vector)"
source_path: "cpp/container/inplace_vector/erase2"
header: "<inplace_vector>"
category: "container"
since: "C++26"
---

1) Erases all elements that compare equal to value from the container. Equivalent to
auto it = std::remove(c.begin(), c.end(), value);
auto r = [std::distance](/cpp/iterator/distance/)(it, c.end());
c.erase(it, c.end());
return r;

## Declarations
```cpp
template< class T, std::size_t N, class U = T >
constexpr typename std::inplace_vector<T, N>::size_type
erase( std::inplace_vector<T, N>& c, const U& value );
```
_(since C++26)_

```cpp
template< class T, std::size_t N, class Pred >
constexpr typename std::inplace_vector<T, N>::size_type
erase_if( std::inplace_vector<T, N>& c, Pred pred );
```
_(since C++26)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed
- `pred`: unary predicate which returns true if the element should be erased. The expression pred(v) must be convertible to bool for every argument v of type (possibly const) T, regardless of value category, and must not modify v. Thus, a parameter type of T&is not allowed, nor is T unless for T a move is equivalent to a copy(since C++11).

## Return value
The number of erased elements.

## Example
```cpp
#include <cassert>
#include <complex>
#include <inplace_vector>
#include <numeric>
#include <print>
 
int main()
{
    std::inplace_vector<int, 10> v(10, 0);
    std::ranges::iota(v, 0);
    std::println("Initially, v = {}", v);
 
    auto erased = std::erase(v, 3);
    std::println("After erase(v, 3), v = {}", v);
    assert(erased == 1);
 
    erased = std::erase_if(v, [](int x) { return x % 2 == 0; });
    std::println("After erasing all even numbers, v = {}", v);
    std::println("Erased even numbers: {}", erased);
 
    std::inplace_vector<std::complex<double>> nums{{2, 2}, {4, 2}, {4, 8}, {4, 2}};
    std::erase(nums, {4, 2}); // since U = T, the value type can be ommited
    std::println("After erase {4, 2}, nums = {}", nums);
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
