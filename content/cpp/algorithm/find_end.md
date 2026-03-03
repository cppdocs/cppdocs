---
title: "std::find_end"
source_path: "cpp/algorithm/find_end"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Searches for the last occurrence of the sequence [s_first,s_last) in the range [first,last).

## Declarations
```cpp
template< class ForwardIt1, class ForwardIt2 >
ForwardIt1 find_end( ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
ForwardIt1 find_end( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last );
```
_(since C++17)_

```cpp
template< class ForwardIt1, class ForwardIt2, class BinaryPred >
ForwardIt1 find_end( ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last,
BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryPred >
ForwardIt1 find_end( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last,
BinaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to examine
- `s_first, s_last`: the range of elements to search for
- `policy`: the execution policy to use
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types ForwardIt1 and ForwardIt2 can be dereferenced and then implicitly converted to Type1 and Type2 respectively.

## Return value
Iterator to the beginning of last occurrence of the sequence [s_first,s_last) in range [first,last).

## Example
```cpp
#include <algorithm>
#include <array>
#include <cmath>
#include <iostream>
 
auto print_result = [](auto result, const auto& v)
{
    result == v.end()
        ? std::cout << "Sequence not found\n"
        : std::cout << "Last occurrence is at: " << std::distance(v.begin(), result)
                    << '\n';
};
 
int main()
{
    const auto v = {1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4};
 
    for (auto const& x : {std::array{1, 2, 3}, {4, 5, 6}})
    {
        auto iter = std::find_end(v.begin(), v.end(), x.begin(), x.end()); // overload (1)
        print_result(iter, v);
    }
 
    for (auto const& x : {std::array{-1, -2, -3}, {-4, -5, -6}})
    {
        auto iter = std::find_end(v.begin(), v.end(), x.begin(), x.end(), // overload (3)
                                  [](int x, int y)
                                  {
                                      return std::abs(x) == std::abs(y);
                                  });
        print_result(iter, v);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1205 | C++98 | the return value was unclear if [s_first, s_last) is empty | returns last in this case |
| LWG 2150 | C++98 | the condition of “sequence occurence” was incorrect | corrected |

## See also
- [search](/cpp/algorithm/search/)
- [includes](/cpp/algorithm/includes/)
- [adjacent_find](/cpp/algorithm/adjacent_find/)
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [find_first_of](/cpp/algorithm/find_first_of/)
- [search_n](/cpp/algorithm/search_n/)
- [ranges::find_end](/cpp/algorithm/ranges/find_end/)
