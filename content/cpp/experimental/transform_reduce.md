---
title: "std::experimental::parallel::transform_reduce"
source_path: "cpp/experimental/transform_reduce"
header: "<experimental/numeric>"
category: "experimental"
---

Applies unary_op to each element in the range [first,last) and reduces the results (possibly permuted and aggregated in unspecified manner) along with the initial value init over binary_op.

## Declarations
```cpp
template< class InputIt, class UnaryOp, class T, class BinaryOp >
T transform_reduce( InputIt first, InputIt last,
UnaryOp unary_op, T init, BinaryOp binary_op );
```
_(parallelism TS)_

```cpp
template< class ExecutionPolicy,
class InputIt, class UnaryOp, class T, class BinaryOp >
T transform_reduce( ExecutionPolicy&& policy,
InputIt first, InputIt last,
UnaryOp unary_op, T init, BinaryOp binary_op );
```
_(parallelism TS)_

## Parameters
- `first, last`: the range of elements to apply the algorithm to
- `init`: the initial value of the generalized sum
- `policy`: the execution policy
- `unary_op`: unary FunctionObject that will be applied to each element of the input range. The return type must be acceptable as input to binary_op
- `binary_op`: binary FunctionObject that will be applied in unspecified order to the results of unary_op, the results of other binary_op and init

## Return value
Generalized sum of init and unary_op(*first), unary_op(*(first + 1)), ... unary_op(*(last - 1)) over binary_op,
where generalized sum GSUM(op, a1, ..., aN) is defined as follows:

## Notes
unary_op is not applied to init.

If the range is empty, init is returned, unmodified.

## Example
```cpp
#include <boost/iterator/zip_iterator.hpp>
#include <boost/tuple.hpp>
#include <experimental/execution_policy>
#include <experimental/numeric>
#include <functional>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<double> xvalues(10007, 1.0), yvalues(10007, 1.0);
 
    double result = std::experimental::parallel::transform_reduce(
        std::experimental::parallel::par,
        boost::iterators::make_zip_iterator(
            boost::make_tuple(std::begin(xvalues), std::begin(yvalues))),
        boost::iterators::make_zip_iterator(
            boost::make_tuple(std::end(xvalues), std::end(yvalues))),
        [](auto r) { return boost::get<0>(r) * boost::get<1>(r); }
        0.0,
        std::plus<>()
    );
    std::cout << result << '\n';
}
```

## See also
- [accumulate](/cpp/algorithm/accumulate/)
- [transform](/cpp/algorithm/transform/)
- [reduce](/cpp/experimental/reduce/)
- [std::accumulate](/cpp/algorithm/accumulate/)
