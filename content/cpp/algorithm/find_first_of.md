---
title: "std::find_first_of"
source_path: "cpp/algorithm/find_first_of"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Searches the range [first,last) for any of the elements in the range [s_first,s_last).

## Declarations
```cpp
template< class InputIt, class ForwardIt >
InputIt find_first_of( InputIt first, InputIt last,
ForwardIt s_first, ForwardIt s_last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
ForwardIt1 find_first_of( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last );
```
_(since C++17)_

```cpp
template< class InputIt, class ForwardIt, class BinaryPred >
InputIt find_first_of( InputIt first, InputIt last,
ForwardIt s_first, ForwardIt s_last,
BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryPred >
ForwardIt1 find_first_of( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt last,
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
Iterator to the first element in the range [first,last) that is equal to an element from the range [s_first,s_last).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
auto print_sequence = [](const auto id, const auto& seq, int pos = -1)
{
    std::cout << id << "{ ";
    for (int i{}; auto const& e : seq)
    {
        const bool mark{i == pos};
        std::cout << (i++ ? ", " : "");
        std::cout << (mark ? "[ " : "") << e << (mark ? " ]" : "");
    }
    std::cout << " }\n";
};
 
int main()
{
    const std::vector<int> v{0, 2, 3, 25, 5};
    const auto t1 = {19, 10, 3, 4};
    const auto t2 = {1, 6, 7, 9};
 
    auto find_any_of = [](const auto& v, const auto& t)
    {
        const auto result = std::find_first_of(v.begin(), v.end(),
                                               t.begin(), t.end());
        if (result == v.end())
        {
            std::cout << "No elements of v are equal to any element of ";
            print_sequence("t = ", t);
            print_sequence("v = ", v);
        }
        else
        {
            const auto pos = std::distance(v.begin(), result);
            std::cout << "Found a match (" << *result << ") at position " << pos;
            print_sequence(", where t = ", t);
            print_sequence("v = ", v, pos);
        }
    };
 
    find_any_of(v, t1);
    find_any_of(v, t2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 576 | C++98 | first and last needed to be LegacyForwardIterators | they only need to beLegacyInputIterators |
| LWG 1205 | C++98 | the return value was unclear if [s_first, s_last) is empty | returns last in this case |

## See also
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [ranges::find_first_of](/cpp/algorithm/ranges/find_first_of/)
