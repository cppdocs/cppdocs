---
title: "std::nth_element"
source_path: "cpp/algorithm/nth_element"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

nth_element rearranges elements in [first,last) such that after the rearrangement:

## Declarations
```cpp
template< class RandomIt >
void nth_element( RandomIt first, RandomIt nth, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt >
void nth_element( ExecutionPolicy&& policy,
RandomIt first, RandomIt nth, RandomIt last );
```
_(since C++17)_

```cpp
template< class RandomIt, class Compare >
void nth_element( RandomIt first, RandomIt nth, RandomIt last,
Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt, class Compare >
void nth_element( ExecutionPolicy&& policy,
RandomIt first, RandomIt nth, RandomIt last,
Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: random access iterators defining the range sort
- `nth`: random access iterator defining the sort partition point
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Notes
The algorithm used is typically [Introselect](https://en.wikipedia.org/wiki/Introselect) although other [Selection algorithm](https://en.wikipedia.org/wiki/Selection_algorithm) with suitable average-case complexity are allowed.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <functional>
#include <iostream>
#include <numeric>
#include <vector>
 
void printVec(const std::vector<int>& vec)
{
    std::cout << "v = {";
    for (char sep[]{0, ' ', 0}; const int i : vec)
        std::cout << sep << i, sep[0] = ',';
    std::cout << "};\n";
}
 
int main()
{
    std::vector<int> v{5, 10, 6, 4, 3, 2, 6, 7, 9, 3};
    printVec(v);
 
    auto m = v.begin() + v.size() / 2;
    std::nth_element(v.begin(), m, v.end());
    std::cout << "\nThe median is " << v[v.size() / 2] << '\n';
    // The consequence of the inequality of elements before/after the Nth one:
    assert(std::accumulate(v.begin(), m, 0) < std::accumulate(m, v.end(), 0));
    printVec(v);
 
    // Note: comp function changed
    std::nth_element(v.begin(), v.begin() + 1, v.end(), std::greater{});
    std::cout << "\nThe second largest element is " << v[1] << '\n';
    std::cout << "The largest element is " << v[0] << '\n';
    printVec(v);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2150 | C++98 | after the rearrangement, only one element before nthwas required to be not greater than one element after nth | corrected therequirement |
| LWG 2163 | C++98 | overload (1) used operator> to compare the elements | changed to operator< |
| P0896R4 | C++98 | [first, nth) and [nth, last)were not required to be valid ranges | the behavior is undefinedif any of them is invalid |

## See also
- [max_element](/cpp/algorithm/max_element/)
- [min_element](/cpp/algorithm/min_element/)
- [partial_sort_copy](/cpp/algorithm/partial_sort_copy/)
- [stable_sort](/cpp/algorithm/stable_sort/)
- [sort](/cpp/algorithm/sort/)
- [ranges::nth_element](/cpp/algorithm/ranges/nth_element/)
