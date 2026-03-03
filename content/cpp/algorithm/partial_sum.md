---
title: "std::partial_sum"
source_path: "cpp/algorithm/partial_sum"
header: "<numeric>"
category: "algorithm"
---

1) If [first,last) is empty, does nothing.

## Declarations
```cpp
template< class InputIt, class OutputIt >
OutputIt partial_sum( InputIt first, InputIt last,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class InputIt, class OutputIt, class BinaryOp >
OutputIt partial_sum( InputIt first, InputIt last,
OutputIt d_first, BinaryOp op );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the range of elements to sum
- `d_first`: the beginning of the destination range; may be equal to first
- `op`: binary operation function object that will be applied. The signature of the function should be equivalent to the following: Ret fun(const Type1 &a, const Type2 &b); The signature does not need to have const &. The type Type1 must be such that an object of type std::iterator_traits<InputIt>::value_type can be implicitly converted to Type1. The type Type2 must be such that an object of type InputIt can be dereferenced and then implicitly converted to Type2. The type Ret must be such that an object of type InputIt can be dereferenced and assigned a value of type Ret.

## Return value
Iterator to the element past the last element written, or d_first if [first,last) is empty.

## Notes
acc was introduced because of the resolution of [LWG issue 539](https://cplusplus.github.io/LWG/issue539). The reason of using acc rather than directly summing up the results (i.e. *(d_first + 2) = (*first + *(first + 1)) + *(first + 2);) is because the semantic of the latter is confusing if the following types mismatch:

acc serves as the intermediate object to store and provide the values for each step of the computation:

## Example
```cpp
#include <functional>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector<int> v(10, 2); // v = {2, 2, 2, 2, 2, 2, 2, 2, 2, 2}
 
    std::cout << "The first " << v.size() << " even numbers are: ";
    // write the result to the cout stream
    std::partial_sum(v.cbegin(), v.cend(), 
                     std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    // write the result back to the vector v
    std::partial_sum(v.cbegin(), v.cend(),
                     v.begin(), std::multiplies<int>());
 
    std::cout << "The first " << v.size() << " powers of 2 are: ";
    for (int n : v)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 242 | C++98 | op could not have side effects | it cannot modify the ranges involved |
| LWG 539 | C++98 | the type requirements needed for the resultevaluations and assignments to be valid were missing | added |

## See also
- [adjacent_difference](/cpp/algorithm/adjacent_difference/)
- [accumulate](/cpp/algorithm/accumulate/)
- [inclusive_scan](/cpp/algorithm/inclusive_scan/)
- [exclusive_scan](/cpp/algorithm/exclusive_scan/)
