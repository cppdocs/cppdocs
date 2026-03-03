---
title: "std::experimental::parallel::reduce"
source_path: "cpp/experimental/reduce"
header: "<experimental/numeric>"
category: "experimental"
---

1) Same as reduce(first, last, typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<InputIt>::value_type{}).

## Declarations
```cpp
template< class InputIt >
typename std::iterator_traits<InputIt>::value_type reduce(
InputIt first, InputIt last );
```
_(parallelism TS)_

```cpp
template< class ExecutionPolicy, class InputIterator >
typename std::iterator_traits<InputIt>::value_type reduce(
ExecutionPolicy&& policy, InputIt first, InputIt last );
```
_(parallelism TS)_

```cpp
template< class InputIt, class T >
T reduce( InputIt first, InputIt last, T init );
```
_(parallelism TS)_

```cpp
template< class ExecutionPolicy, class InputIt, class T >
T reduce( ExecutionPolicy&& policy, InputIt first, InputIt last, T init );
```
_(parallelism TS)_

```cpp
template< class InputIt, class T, class BinaryOp >
T reduce( InputIt first, InputIt last, T init, BinaryOp binary_op );
```
_(parallelism TS)_

```cpp
template< class ExecutionPolicy, class InputIt, class T, class BinaryOp >
T reduce( ExecutionPolicy&& policy,
InputIt first, InputIt last, T init, BinaryOp binary_op );
```
_(parallelism TS)_

## Parameters
- `first, last`: the range of elements to apply the algorithm to
- `init`: the initial value of the generalized sum
- `policy`: the execution policy
- `binary_op`: binary FunctionObject that will be applied in unspecified order to the result of dereferencing the input iterators, the results of other binary_op and init

## Return value
Generalized sum of init and *first, *(first + 1), ... *(last - 1) over binary_op,

## Notes
If the range is empty, init is returned, unmodified.

## Example
```cpp
#include <chrono>
#include <experimental/execution_policy>
#include <experimental/numeric>
#include <iostream>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector<double> v(10'000'007, 0.5);
 
    {
        auto t1 = std::chrono::high_resolution_clock::now();
        double result = std::accumulate(v.begin(), v.end(), 0.0);
        auto t2 = std::chrono::high_resolution_clock::now();
        std::chrono::duration<double, std::milli> ms = t2 - t1;
        std::cout << std::fixed << "std::accumulate result " << result
                  << " took " << ms.count() << " ms\n";
    }
 
    {
        auto t1 = std::chrono::high_resolution_clock::now();
        double result = std::experimental::parallel::reduce(
                            std::experimental::parallel::par,
                            v.begin(), v.end());
        auto t2 = std::chrono::high_resolution_clock::now();
        std::chrono::duration<double, std::milli> ms = t2 - t1;
        std::cout << "parallel::reduce result "
                  << result << " took " << ms.count() << " ms\n";
    }
}
```

## See also
- [accumulate](/cpp/algorithm/accumulate/)
- [transform](/cpp/algorithm/transform/)
- [transform_reduce](/cpp/experimental/transform_reduce/)
