---
title: "std::swap_ranges"
source_path: "cpp/algorithm/swap_ranges"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Exchanges elements between range [first1,last1) and another range of [std::distance](/cpp/iterator/distance/)(first1, last1) elements starting at first2.

## Declarations
```cpp
template< class ForwardIt1, class ForwardIt2 >
ForwardIt2 swap_ranges( ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2 );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2 >
ForwardIt2 swap_ranges( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2 );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first range of elements to swap
- `first2`: beginning of the second range of elements to swap
- `policy`: the execution policy to use

## Return value
Iterator to the element past the last element exchanged in the range beginning with first2.

## Notes
Implementations (e.g. [MSVC STL](https://github.com/microsoft/STL/blob/main/stl/src/vector_algorithms.cpp)) may enable vectorization when the iterator type satisfies [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/) and swapping its value type calls neither non-trivial special member function nor [ADL](/cpp/language/adl/)-found swap.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <list>
#include <vector>
 
auto print = [](auto comment, auto const& seq)
{
    std::cout << comment;
    for (const auto& e : seq)
        std::cout << e << ' ';
    std::cout << '\n';
};
 
int main()
{
    std::vector<char> v{'a', 'b', 'c', 'd', 'e'};
    std::list<char> l{'1', '2', '3', '4', '5'};
 
    print("Before swap_ranges:\n" "v: ", v);
    print("l: ", l);
 
    std::swap_ranges(v.begin(), v.begin() + 3, l.begin());
 
    print("After swap_ranges:\n" "v: ", v);
    print("l: ", l);
}
```

## See also
- [iter_swap](/cpp/algorithm/iter_swap/)
- [swap](/cpp/utility/swap/)
- [ranges::swap_ranges](/cpp/algorithm/ranges/swap_ranges/)
