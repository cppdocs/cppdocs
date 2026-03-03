---
title: "std::lexicographical_compare"
source_path: "cpp/algorithm/lexicographical_compare"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Checks if the first range [first1,last1) is lexicographically less than the second range [first2,last2).

## Declarations
```cpp
template< class InputIt1, class InputIt2 >
bool lexicographical_compare( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2 );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2 >
bool lexicographical_compare( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2 );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2, class Compare >
bool lexicographical_compare( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class Compare >
bool lexicographical_compare( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
Compare comp );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first range of elements to examine
- `first2, last2`: the second range of elements to examine
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to both Type1 and Type2.

## Return value
true if the first range is lexicographically less than the second, otherwise false.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <random>
#include <vector>
 
void print(const std::vector<char>& v, auto suffix)
{
    for (char c : v)
        std::cout << c << ' ';
    std::cout << suffix;
}
 
int main()
{
    std::vector<char> v1{'a', 'b', 'c', 'd'};
    std::vector<char> v2{'a', 'b', 'c', 'd'};
 
    for (std::mt19937 g{std::random_device{}()};
         !std::lexicographical_compare(v1.begin(), v1.end(),
                                       v2.begin(), v2.end());)
    {
        print(v1, ">= ");
        print(v2, '\n');
 
        std::shuffle(v1.begin(), v1.end(), g);
        std::shuffle(v2.begin(), v2.end(), g);
    }
 
    print(v1, "<  ");
    print(v2, '\n');
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 142 | C++98 | at most \(\scriptsize \min(N_1,N_2)\)min(N1,N2) comparisons were allowed, but thatis not possible (equivalence is determined by 2 comparisons) | doubled the limit |
| LWG 1205 | C++98 | the results of lexicographical comparisons involving empty ranges were unclear | made clear |

## See also
- [equal](/cpp/algorithm/equal/)
- [lexicographical_compare_three_way](/cpp/algorithm/lexicographical_compare_three_way/)
- [ranges::lexicographical_compare](/cpp/algorithm/ranges/lexicographical_compare/)
