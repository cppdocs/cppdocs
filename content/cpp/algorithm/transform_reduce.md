---
title: "std::transform_reduce"
source_path: "cpp/algorithm/transform_reduce"
header: "<numeric>"
category: "algorithm"
since: "C++17"
---

1) Equivalent to transform_reduce(first1, last1, first2, init,[std::plus](/cpp/utility/functional/plus/)<>(), [std::multiplies](/cpp/utility/functional/multiplies/)<>()), effectively parallelized version of the default [std::inner_product](/cpp/algorithm/inner_product/).

## Declarations
```cpp
template< class InputIt1, class InputIt2, class T >
T transform_reduce( InputIt1 first1, InputIt1 last1,
InputIt2 first2, T init );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class T >
T transform_reduce( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, T init );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2, class T,
class BinaryOp1, class BinaryOp2 >
T transform_reduce( InputIt1 first1, InputIt1 last1,
InputIt2 first2, T init,
BinaryOp1 reduce, BinaryOp2 transform );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class T,
class BinaryOp1, class BinaryOp2 >
T transform_reduce( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, T init,
BinaryOp1 reduce, BinaryOp2 transform );
```
_(since C++17)_

```cpp
template< class InputIt, class T,
class BinaryOp, class UnaryOp >
T transform_reduce( InputIt first, InputIt last, T init,
BinaryOp reduce, UnaryOp transform );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class T,
class BinaryOp, class UnaryOp >
T transform_reduce( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, T init,
BinaryOp reduce, UnaryOp transform );
```
_(since C++17)_

## Parameters
- `first1, last1`: the range of elements to be taken as the left operand of transform
- `first2`: the start of range of elements to be taken as the right operand of transform
- `first, last`: the range of elements to be taken as the operand of transform
- `init`: the initial value of the generalized sum
- `policy`: the execution policy to use
- `reduce`: binary FunctionObject that will be applied in unspecified order to the results of transform, the results of other reduce and init.
- `transform`: unary or binary FunctionObject that will be applied to each element of the input range(s). The return type must be acceptable as input to reduce.

## Return value
The generalized sum of a group of elements over an binary operation binary_op is defined as follows:

## Notes
transform is never applied to init.

If first == last or first1 == last1, init is returned, unmodified.

## Example
```cpp
#if PARALLEL
#include <execution>
#define PAR std::execution::par,
#else
#define PAR
#endif
 
#include <algorithm>
#include <functional>
#include <iostream>
#include <iterator>
#include <locale>
#include <numeric>
#include <vector>
 
// to parallelize non-associate accumulative operation, you'd better choose
// transform_reduce instead of reduce; e.g., a + b * b != b + a * a
void print_sum_squared(long const num)
{
    std::cout.imbue(std::locale{"en_US.UTF8"});
    std::cout << "num = " << num << '\n';
 
    // create an immutable vector filled with pattern: 1,2,3,4, 1,2,3,4 ...
    const std::vector<long> v{[n = num * 4] {
        std::vector<long> v;
        v.reserve(n);
        std::generate_n(std::back_inserter(v), n,
            [i = 0]() mutable { return 1 + i++ % 4; });
        return v;
    }()};
 
    auto squared_sum = [](auto sum, auto val) { return sum + val * val; };
 
    auto sum1 = std::accumulate(v.cbegin(), v.cend(), 0L, squared_sum);
    std::cout << "accumulate(): " << sum1 << '\n';
 
    auto sum2 = std::reduce(PAR v.cbegin(), v.cend(), 0L, squared_sum);
    std::cout << "reduce(): " << sum2 << '\n';
 
    auto sum3 = std::transform_reduce(PAR v.cbegin(), v.cend(), 0L, std::plus{},
                                      [](auto val) { return val * val; });
    std::cout << "transform_reduce(): " << sum3 << "\n\n";
}
 
int main()
{
    print_sum_squared(1);
    print_sum_squared(1'000);
    print_sum_squared(1'000'000);
}
```

## See also
- [accumulate](/cpp/algorithm/accumulate/)
- [transform](/cpp/algorithm/transform/)
- [reduce](/cpp/algorithm/reduce/)
- [std::accumulate](/cpp/algorithm/accumulate/)
