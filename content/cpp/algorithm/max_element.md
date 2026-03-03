---
title: "std::max_element"
source_path: "cpp/algorithm/max_element"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Finds the greatest element in the range [first,last).

## Declarations
```cpp
template< class ForwardIt >
ForwardIt max_element( ForwardIt first, ForwardIt last );
```
_(constexpr since C++17)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
ForwardIt max_element( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last );
```
_(since C++17)_

```cpp
template< class ForwardIt, class Compare >
ForwardIt max_element( ForwardIt first, ForwardIt last,
Compare comp );
```
_(constexpr since C++17)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class Compare >
ForwardIt max_element( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: forward iterators defining the range to examine
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to both of them.

## Return value
Iterator to the greatest element in the range [first,last). If several elements in the range are equivalent to the greatest element, returns the iterator to the first such element. Returns last if the range is empty.

## Example
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v{3, 1, -14, 1, 5, 9, -14, 9};
    std::vector<int>::iterator result;
 
    result = std::max_element(v.begin(), v.end());
    std::cout << "Max element found at index "
              << std::distance(v.begin(), result)
              << " has value " << *result << '\n';
 
    result = std::max_element(v.begin(), v.end(), [](int a, int b)
    {
        return std::abs(a) < std::abs(b);
    });
    std::cout << "Absolute max element found at index "
              << std::distance(v.begin(), result)
              << " has value " << *result << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 212 | C++98 | the return value was not specified if [first, last) is empty | returns last in this case |
| LWG 2150 | C++98 | the iterator to the first non-smallest element was returned | corrected the return value |

## See also
- [min_element](/cpp/algorithm/min_element/)
- [minmax_element](/cpp/algorithm/minmax_element/)
- [max](/cpp/algorithm/max/)
- [ranges::max_element](/cpp/algorithm/ranges/max_element/)
