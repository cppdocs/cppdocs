---
title: "std::transform_exclusive_scan"
source_path: "cpp/algorithm/transform_exclusive_scan"
header: "<numeric>"
category: "algorithm"
since: "C++17"
---

1) Computes the exclusive prefix sum using op.

## Declarations
```cpp
template< class InputIt, class OutputIt, class T,
class BinaryOp, class UnaryOp >
OutputIt transform_exclusive_scan
( InputIt first, InputIt last, OutputIt d_first, T init,
BinaryOp binary_op, UnaryOp unary_op );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class T,
class BinaryOp, class UnaryOp >
ForwardIt2 transform_exclusive_scan
( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first, T init,
BinaryOp binary_op, UnaryOp unary_op );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to sum
- `d_first`: the beginning of the destination range, may be equal to first
- `policy`: the execution policy to use
- `init`: the initial value
- `unary_op`: unary FunctionObject that will be applied to each element of the input range. The return type must be acceptable as input to binary_op.
- `binary_op`: binary FunctionObject that will be applied in to the result of unary_op, the results of other binary_op, and init.

## Return value
Iterator to the element past the last element written.

## Notes
unary_op is never applied to init.

## Example
```cpp
#include <functional>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector data{3, 1, 4, 1, 5, 9, 2, 6};
 
    auto times_10 = [](int x) { return x * 10; };
 
    std::cout << "10 times exclusive sum: ";
    std::transform_exclusive_scan(data.begin(), data.end(),
                                  std::ostream_iterator<int>(std::cout, " "),
                                  0, std::plus<int>{}, times_10);
    std::cout << "\n10 times inclusive sum: ";
    std::transform_inclusive_scan(data.begin(), data.end(),
                                  std::ostream_iterator<int>(std::cout, " "),
                                  std::plus<int>{}, times_10);
    std::cout << '\n';
}
```

## See also
- [partial_sum](/cpp/algorithm/partial_sum/)
- [exclusive_scan](/cpp/algorithm/exclusive_scan/)
- [std::partial_sum](/cpp/algorithm/partial_sum/)
- [transform_inclusive_scan](/cpp/algorithm/transform_inclusive_scan/)
