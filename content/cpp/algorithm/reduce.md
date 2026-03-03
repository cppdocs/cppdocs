---
title: "std::reduce"
source_path: "cpp/algorithm/reduce"
header: "<numeric>"
category: "algorithm"
since: "C++17"
---

1) Equivalent to reduce(first, last, typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<InputIt>::value_type{}).

## Declarations
```cpp
template< class InputIt >
typename std::iterator_traits<InputIt>::value_type
reduce( InputIt first, InputIt last );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
typename std::iterator_traits<ForwardIt>::value_type
reduce( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last );
```
_(since C++17)_

```cpp
template< class InputIt, class T >
T reduce( InputIt first, InputIt last, T init );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class T >
T reduce( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, T init );
```
_(since C++17)_

```cpp
template< class InputIt, class T, class BinaryOp >
T reduce( InputIt first, InputIt last, T init, BinaryOp op );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class T, class BinaryOp >
T reduce( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, T init, BinaryOp op );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to apply the algorithm to
- `init`: the initial value of the generalized sum
- `policy`: the execution policy to use
- `op`: binary FunctionObject that will be applied in unspecified order to the result of dereferencing the input iterators, the results of other op and init.

## Return value
The generalized sum of a group of elements over an binary operation binary_op is defined as follows:

## Notes
std::reduce behaves like [std::accumulate](/cpp/algorithm/accumulate/) except the elements of the range may be grouped and rearranged in arbitrary order.

## Example
```cpp
#if PARALLEL
#include <execution>
#define SEQ std::execution::seq,
#define PAR std::execution::par,
#else
#define SEQ
#define PAR
#endif
 
#include <chrono>
#include <iomanip>
#include <iostream>
#include <locale>
#include <numeric>
#include <utility>
#include <vector>
 
int main()
{
    std::cout.imbue(std::locale("en_US.UTF-8"));
    std::cout << std::fixed << std::setprecision(1);
 
    auto eval = [](auto fun)
    {
        const auto t1 = std::chrono::high_resolution_clock::now();
        const auto [name, result] = fun();
        const auto t2 = std::chrono::high_resolution_clock::now();
        const std::chrono::duration<double, std::milli> ms = t2 - t1;
        std::cout << std::setw(28) << std::left << name << "sum: "
                  << result << '\t' << "time: " << ms.count() << " ms\n";
    };
 
    {
        const std::vector<double> v(100'000'007, 0.1);
 
        eval([&v]{ return std::pair{"std::accumulate (double)",
            std::accumulate(v.cbegin(), v.cend(), 0.0)}; });
        eval([&v]{ return std::pair{"std::reduce (seq, double)",
            std::reduce(SEQ v.cbegin(), v.cend())}; });
        eval([&v]{ return std::pair{"std::reduce (par, double)",
            std::reduce(PAR v.cbegin(), v.cend())}; });
    }
 
    {
        const std::vector<long> v(100'000'007, 1);
 
        eval([&v]{ return std::pair{"std::accumulate (long)",
            std::accumulate(v.cbegin(), v.cend(), 0l)}; });
        eval([&v]{ return std::pair{"std::reduce (seq, long)",
            std::reduce(SEQ v.cbegin(), v.cend())}; });
        eval([&v]{ return std::pair{"std::reduce (par, long)",
            std::reduce(PAR v.cbegin(), v.cend())}; });
    }
}
```

## See also
- [accumulate](/cpp/algorithm/accumulate/)
- [transform](/cpp/algorithm/transform/)
- [transform_reduce](/cpp/algorithm/transform_reduce/)
- [ranges::fold_left](/cpp/algorithm/ranges/fold_left/)
