---
title: "std::partial_sort_copy"
source_path: "cpp/algorithm/partial_sort_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Sorts some of the elements in the range [first,last) in ascending order, storing the result in the range [d_first,d_last).

## Declarations
```cpp
template< class InputIt, class RandomIt >
RandomIt partial_sort_copy( InputIt first, InputIt last,
RandomIt d_first, RandomIt d_last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class RandomIt >
RandomIt partial_sort_copy( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
RandomIt d_first, RandomIt d_last );
```
_(since C++17)_

```cpp
template< class InputIt, class RandomIt, class Compare >
RandomIt partial_sort_copy( InputIt first, InputIt last,
RandomIt d_first, RandomIt d_last,
Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class RandomIt, class Compare >
RandomIt partial_sort_copy( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
RandomIt d_first, RandomIt d_last,
Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to sort
- `d_first, d_last`: random access iterators defining the destination range
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Return value
An iterator to the element defining the upper boundary of the sorted range, i.e. d_first + [std::min](/cpp/algorithm/min/)([std::distance](/cpp/iterator/distance/)(first, last), d_last - d_first).

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <string_view>
#include <type_traits>
#include <vector>
 
void println(std::string_view rem, const auto& v)
{
    std::cout << rem;
    if constexpr (std::is_scalar_v<std::decay_t<decltype(v)>>)
        std::cout << v;
    else
        for (int e : v)
            std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    const auto v0 = {4, 2, 5, 1, 3};
    std::vector<int> v1{10, 11, 12};
    std::vector<int> v2{10, 11, 12, 13, 14, 15, 16};
    std::vector<int>::iterator it;
 
    it = std::partial_sort_copy(v0.begin(), v0.end(), v1.begin(), v1.end());
    println("Writing to the smaller vector in ascending order gives: ", v1);
 
    if (it == v1.end())
        println("The return value is the end iterator", ' ');
 
    it = std::partial_sort_copy(v0.begin(), v0.end(), v2.begin(), v2.end(),
                                std::greater<int>());
 
    println("Writing to the larger vector in descending order gives: ", v2);
    println("The return value is the iterator to ", *it);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0896R4 | C++98 | *first was not required to be writable to d_first | the program is ill-formed if not writable |

## See also
- [partial_sort](/cpp/algorithm/partial_sort/)
- [sort](/cpp/algorithm/sort/)
- [stable_sort](/cpp/algorithm/stable_sort/)
- [ranges::partial_sort_copy](/cpp/algorithm/ranges/partial_sort_copy/)
