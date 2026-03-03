---
title: "std::adjacent_difference"
source_path: "cpp/algorithm/adjacent_difference"
header: "<numeric>"
category: "algorithm"
since: "C++17"
---

Let T be the value type of decltype(first).

## Declarations
```cpp
template< class InputIt, class OutputIt >
OutputIt adjacent_difference( InputIt first, InputIt last,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2 >
ForwardIt2 adjacent_difference( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first );
```
_(since C++17)_

```cpp
template< class InputIt, class OutputIt, class BinaryOp >
OutputIt adjacent_difference( InputIt first, InputIt last,
OutputIt d_first, BinaryOp op );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryOp >
ForwardIt2 adjacent_difference( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, BinaryOp op );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements
- `d_first`: the beginning of the destination range
- `policy`: the execution policy to use
- `op`: binary operation function object that will be applied. The signature of the function should be equivalent to the following: Ret fun(const Type1 &a, const Type2 &b); The signature does not need to have const &. The types Type1 and Type2 must be such that an object of type iterator_traits<InputIt>::value_type can be implicitly converted to both of them. The type Ret must be such that an object of type OutputIt can be dereferenced and assigned a value of type Ret.

## Return value
Iterator to the element past the last element written, or d_first if [first,last) is empty.

## Notes
acc was introduced because of the resolution of [LWG issue 539](https://cplusplus.github.io/LWG/issue539). The reason of using acc rather than directly calculating the differences is because the semantic of the latter is confusing if the following types mismatch:

acc serves as the intermediate object to cache values of the iterated elements:

## Example
```cpp
#include <array>
#include <functional>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
void println(auto comment, const auto& sequence)
{
    std::cout << comment;
    for (const auto& n : sequence)
        std::cout << n << ' ';
    std::cout << '\n';
};
 
int main()
{
    // Default implementation - the difference between two adjacent items
    std::vector v{4, 6, 9, 13, 18, 19, 19, 15, 10};
    println("Initially, v = ", v);
    std::adjacent_difference(v.begin(), v.end(), v.begin());
    println("Modified v = ", v);
 
    // Fibonacci
    std::array<int, 10> a {1};
    std::adjacent_difference(std::begin(a), std::prev(std::end(a)),
                             std::next(std::begin(a)), std::plus<>{});
    println("Fibonacci, a = ", a);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 242 | C++98 | op could not have side effects | it cannot modifythe ranges involved |
| LWG 539 | C++98 | the type requirements needed for the resultevaluations and assignments to be valid were missing | added |
| LWG 3058 | C++17 | for overloads (2,4), the result of each invocationof operator- or op was assigned to a temporaryobject, and that object is assigned to the output range | assign the resultsto the outputrange directly |

## See also
- [partial_sum](/cpp/algorithm/partial_sum/)
- [accumulate](/cpp/algorithm/accumulate/)
