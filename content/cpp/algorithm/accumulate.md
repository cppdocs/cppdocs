---
title: "std::accumulate"
source_path: "cpp/algorithm/accumulate"
header: "<numeric>"
category: "algorithm"
---

Computes the sum of the given value init and the elements in the range [first,last).

## Declarations
```cpp
template< class InputIt, class T >
T accumulate( InputIt first, InputIt last, T init );
```
_(constexpr since C++20)_

```cpp
template< class InputIt, class T, class BinaryOp >
T accumulate( InputIt first, InputIt last, T init, BinaryOp op );
```
_(constexpr since C++20)_

## Parameters
- `first, last`: the range of elements to sum
- `init`: initial value of the sum
- `op`: binary operation function object that will be applied. The signature of the function should be equivalent to the following: Ret fun(const Type1 &a, const Type2 &b); The signature does not need to have const &. The type Type1 must be such that an object of type T can be implicitly converted to Type1. The type Type2 must be such that an object of type InputIt can be dereferenced and then implicitly converted to Type2. The type Ret must be such that an object of type T can be assigned a value of type Ret.

## Return value
acc after all modifications.

## Notes
std::accumulate performs a left [fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)). In order to perform a right fold, one must reverse the order of the arguments to the binary operator, and use reverse iterators.

If left to type inference, op operates on values of the same type as init which can result in unwanted casting of the iterator elements. For example, std::accumulate(v.begin(), v.end(), 0) likely does not give the result one wishes for when v is of type [std::vector](/cpp/container/vector/)<double>.

## Example
```cpp
#include <functional>
#include <iostream>
#include <numeric>
#include <string>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
 
    int sum = std::accumulate(v.begin(), v.end(), 0);
    int product = std::accumulate(v.begin(), v.end(), 1, std::multiplies<int>());
 
    auto dash_fold = [](std::string a, int b)
    {
        return std::move(a) + '-' + std::to_string(b);
    };
 
    std::string s = std::accumulate(std::next(v.begin()), v.end(),
                                    std::to_string(v[0]), // start with first element
                                    dash_fold);
 
    // Right fold using reverse iterators
    std::string rs = std::accumulate(std::next(v.rbegin()), v.rend(),
                                     std::to_string(v.back()), // start with last element
                                     dash_fold);
 
    std::cout << "sum: " << sum << '\n'
              << "product: " << product << '\n'
              << "dash-separated string: " << s << '\n'
              << "dash-separated string (right-folded): " << rs << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 242 | C++98 | op could not have side effects | it cannot modify the ranges involved |

## See also
- [adjacent_difference](/cpp/algorithm/adjacent_difference/)
- [inner_product](/cpp/algorithm/inner_product/)
- [partial_sum](/cpp/algorithm/partial_sum/)
- [reduce](/cpp/algorithm/reduce/)
- [ranges::fold_left](/cpp/algorithm/ranges/fold_left/)
