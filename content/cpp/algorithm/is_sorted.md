---
title: "std::is_sorted"
source_path: "cpp/algorithm/is_sorted"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Checks if the elements in range [first,last) are sorted in non-descending order.

## Declarations
```cpp
template< class ForwardIt >
bool is_sorted( ForwardIt first, ForwardIt last );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
bool is_sorted( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last );
```
_(since C++17)_

```cpp
template< class ForwardIt, class Compare >
bool is_sorted( ForwardIt first, ForwardIt last, Compare comp );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class Compare >
bool is_sorted( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to examine
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to both of them.

## Return value
true if the elements in the range are sorted in non-descending order, false otherwise.

## Notes
std::is_sorted returns true for empty ranges and ranges of length one.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <functional>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v;
    assert(std::is_sorted(v.cbegin(), v.cend()) && "an empty range is always sorted");
    v.push_back(42);
    assert(std::is_sorted(v.cbegin(), v.cend()) && "a range of size 1 is always sorted");
 
    int data[] = {3, 1, 4, 1, 5};
    assert(not std::is_sorted(std::begin(data), std::end(data)));
 
    std::sort(std::begin(data), std::end(data));
    assert(std::is_sorted(std::begin(data), std::end(data)));
    assert(not std::is_sorted(std::begin(data), std::end(data), std::greater<>{}));
}
```

## See also
- [is_sorted_until](/cpp/algorithm/is_sorted_until/)
- [ranges::is_sorted](/cpp/algorithm/ranges/is_sorted/)
