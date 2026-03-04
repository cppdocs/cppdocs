---
title: "std::accumulate"
source_path: "cpp/algorithm/accumulate"
header: "<numeric>"
category: "algorithm"
since: "C++98"
---

`std::accumulate` accumulates elements in `[first, last)` as a left fold, starting from `init`.

The first overload updates the accumulator with `operator+`. The second overload updates it with a user-provided binary operation.

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
- `first, last`: the input range
- `init`: initial accumulator value
- `op`: binary operation object used by overload (2). It must be callable with the current accumulator and an input element, and its result must be assignable to `T`.

`op` must not invalidate iterators or subranges in `[first, last)`, and must not modify elements in that range.

## Type requirements
- `InputIt` must meet the requirements of LegacyInputIterator.
- `T` must be CopyConstructible and CopyAssignable.

## Semantics
Let `acc` be the accumulator initialized from `init`.

- Overload (1): for each iterator `i` in `[first,last)`, performs `acc = std::move(acc) + *i` (since C++20; before C++20, `acc + *i`).
- Overload (2): for each iterator `i` in `[first,last)`, performs `acc = op(std::move(acc), *i)` (since C++20; before C++20, `op(acc, *i)`).

## Return value
Final value of the accumulator after processing all elements.

## Complexity
Let `N = std::distance(first, last)`.

- Overload (1): exactly `N` applications of `operator+`
- Overload (2): exactly `N` applications of `op`

## Exceptions
Any exception thrown by `operator+`, `op`, iterator operations, or assignments to the accumulator is propagated.

## Notes
`std::accumulate` performs a left [fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)). To emulate a right fold, use reverse iterators and a matching operation order.

Type deduction for `init` matters. For example, `std::accumulate(v.begin(), v.end(), 0)` with `v` of type [`std::vector<double>`](/cpp/container/vector/) performs integer accumulation and truncates intermediate results.

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
