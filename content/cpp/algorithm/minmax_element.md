---
title: "std::minmax_element"
source_path: "cpp/algorithm/minmax_element"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Finds the smallest and greatest element in the range [first,last).

## Declarations
```cpp
template< class ForwardIt >
std::pair<ForwardIt, ForwardIt>
minmax_element( ForwardIt first, ForwardIt last );
```
_(since C++11) (constexpr since C++17)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
std::pair<ForwardIt, ForwardIt>
minmax_element( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last );
```
_(since C++17)_

```cpp
template< class ForwardIt, class Compare >
std::pair<ForwardIt, ForwardIt>
minmax_element( ForwardIt first, ForwardIt last, Compare comp );
```
_(since C++11) (constexpr since C++17)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class Compare >
std::pair<ForwardIt, ForwardIt>
minmax_element( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: forward iterators defining the range to examine
- `policy`: the execution policy to use
- `cmp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to both of them.

## Return value
a pair consisting of an iterator to the smallest element as the first element and an iterator to the greatest element as the second. Returns [std::make_pair](/cpp/utility/pair/make_pair/)(first, first) if the range is empty. If several elements are equivalent to the smallest element, the iterator to the first such element is returned. If several elements are equivalent to the largest element, the iterator to the last such element is returned.

## Notes
This algorithm is different from [std::make_pair](/cpp/utility/pair/make_pair/)([std::min_element](/cpp/algorithm/min_element/)(), [std::max_element](/cpp/algorithm/max_element/)()), not only in efficiency, but also in that this algorithm finds the last biggest element while [std::max_element](/cpp/algorithm/max_element/) finds the first biggest element.

## Example
```cpp
#include <algorithm>
#include <iostream>
 
int main()
{
    const auto v = {3, 9, 1, 4, 2, 5, 9};
    const auto [min, max] = std::minmax_element(begin(v), end(v));
 
    std::cout << "min = " << *min << ", max = " << *max << '\n';
}
```

## See also
- [min_element](/cpp/algorithm/min_element/)
- [max_element](/cpp/algorithm/max_element/)
- [ranges::minmax_element](/cpp/algorithm/ranges/minmax_element/)
