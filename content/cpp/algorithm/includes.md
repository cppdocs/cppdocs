---
title: "std::includes"
source_path: "cpp/algorithm/includes"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Returns true if the sorted range [first2,last2) is a [subsequence](https://en.wikipedia.org/wiki/subsequence) of the sorted range [first1,last1) (a subsequence need not be contiguous).

## Declarations
```cpp
template< class InputIt1, class InputIt2 >
bool includes( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2 );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2 >
bool includes( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2 );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2, class Compare >
bool includes( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2, Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class Compare >
bool includes( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2, Compare comp );
```
_(since C++17)_

## Parameters
- `first1, last1`: the sorted range of elements to examine
- `first2, last2`: the sorted range of elements to search for
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type InputIt can be dereferenced and then implicitly converted to both of them.

## Return value
true if [first2,last2) is a subsequence of [first1,last1); otherwise false.

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <iostream>
 
template<class Os, class Co>
Os& operator<<(Os& os, const Co& v)
{
    for (const auto& i : v)
        os << i << ' ';
    return os << '\t';
}
 
int main()
{
    const auto
        v1 = {'a', 'b', 'c', 'f', 'h', 'x'},
        v2 = {'a', 'b', 'c'},
        v3 = {'a', 'c'},
        v4 = {'a', 'a', 'b'},
        v5 = {'g'},
        v6 = {'a', 'c', 'g'},
        v7 = {'A', 'B', 'C'};
 
    auto no_case = [](char a, char b) { return std::tolower(a) < std::tolower(b); };
 
    std::cout
    << v1 << "\nincludes:\n" << std::boolalpha
    << v2 << ": " << std::includes(v1.begin(), v1.end(), v2.begin(), v2.end()) << '\n'
    << v3 << ": " << std::includes(v1.begin(), v1.end(), v3.begin(), v3.end()) << '\n'
    << v4 << ": " << std::includes(v1.begin(), v1.end(), v4.begin(), v4.end()) << '\n'
    << v5 << ": " << std::includes(v1.begin(), v1.end(), v5.begin(), v5.end()) << '\n'
    << v6 << ": " << std::includes(v1.begin(), v1.end(), v6.begin(), v6.end()) << '\n'
    << v7 << ": " << std::includes(v1.begin(), v1.end(), v7.begin(), v7.end(), no_case)
          << " (case-insensitive)\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1205 | C++98 | the return value was unclear if [first2, last2) is empty | returns true in this case |

## See also
- [set_difference](/cpp/algorithm/set_difference/)
- [search](/cpp/algorithm/search/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
