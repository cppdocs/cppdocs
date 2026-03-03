---
title: "std::inner_product"
source_path: "cpp/algorithm/inner_product"
header: "<numeric>"
category: "algorithm"
---

Computes inner product (i.e. sum of products) or performs ordered map/reduce operation on the range [first1,last1) and the range of [std::distance](/cpp/iterator/distance/)(first1, last1) elements beginning at first2.

## Declarations
```cpp
template< class InputIt1, class InputIt2, class T >
T inner_product( InputIt1 first1, InputIt1 last1,
InputIt2 first2, T init );
```
_(constexpr since C++20)_

```cpp
template< class InputIt1, class InputIt2, class T,
class BinaryOp1, class BinaryOp2 >
T inner_product( InputIt1 first1, InputIt1 last1,
InputIt2 first2, T init,
BinaryOp1 op1, BinaryOp2 op2 );
```
_(constexpr since C++20)_

## Parameters
- `first1, last1`: the first range of elements
- `first2`: the beginning of the second range of elements
- `init`: initial value of the sum of the products
- `op1`: binary operation function object that will be applied. This "sum" function takes a value returned by op2 and the current value of the accumulator and produces a new value to be stored in the accumulator. The signature of the function should be equivalent to the following: Ret fun(const Type1 &a, const Type2 &b); The signature does not need to have const &. The types Type1 and Type2 must be such that objects of types T and Type3 can be implicitly converted to Type1 and Type2 respectively. The type Ret must be such that an object of type T can be assigned a value of type Ret.
- `op2`: binary operation function object that will be applied. This "product" function takes one value from each range and produces a new value. The signature of the function should be equivalent to the following: Ret fun(const Type1 &a, const Type2 &b); The signature does not need to have const &. The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to Type1 and Type2 respectively. The type Ret must be such that an object of type Type3 can be assigned a value of type Ret.

## Return value
acc after all modifications.

## Notes
The parallelizable version of this algorithm, [std::transform_reduce](/cpp/algorithm/transform_reduce/), requires op1 and op2 to be commutative and associative, but std::inner_product makes no such requirement, and always performs the operations in the order given.

## Example
```cpp
#include <functional>
#include <iostream>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector<int> a{0, 1, 2, 3, 4};
    std::vector<int> b{5, 4, 2, 3, 1};
 
    int r1 = std::inner_product(a.begin(), a.end(), b.begin(), 0);
    std::cout << "Inner product of a and b: " << r1 << '\n';
 
    int r2 = std::inner_product(a.begin(), a.end(), b.begin(), 0,
                                std::plus<>(), std::equal_to<>());
    std::cout << "Number of pairwise matches between a and b: " <<  r2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 242 | C++98 | op1 and op2 could not have side effects | they cannot modify the ranges involved |

## See also
- [transform_reduce](/cpp/algorithm/transform_reduce/)
- [accumulate](/cpp/algorithm/accumulate/)
- [partial_sum](/cpp/algorithm/partial_sum/)
