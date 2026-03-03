---
title: "std::transform_inclusive_scan"
source_path: "cpp/algorithm/transform_inclusive_scan"
header: "<numeric>"
category: "algorithm"
since: "C++17"
---

1) Computes the inclusive prefix sum using op.

## Declarations
```cpp
template< class InputIt, class OutputIt,
class BinaryOp, class UnaryOp >
OutputIt transform_inclusive_scan
( InputIt first, InputIt last, OutputIt d_first,
BinaryOp binary_op, UnaryOp unary_op );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class BinaryOp, class UnaryOp >
ForwardIt2 transform_inclusive_scan
( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first,
BinaryOp binary_op, UnaryOp unary_op );
```
_(since C++17)_

```cpp
template< class InputIt, class OutputIt,
class BinaryOp, class UnaryOp, class T >
OutputIt transform_inclusive_scan
( InputIt first, InputIt last, OutputIt d_first,
BinaryOp binary_op, UnaryOp unary_op, T init );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class BinaryOp, class UnaryOp, class T >
ForwardIt2 transform_inclusive_scan
( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first,
BinaryOp binary_op, UnaryOp unary_op, T init );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to sum
- `d_first`: the beginning of the destination range; may be equal to first
- `policy`: the execution policy to use
- `init`: the initial value
- `unary_op`: unary FunctionObject that will be applied to each element of the input range. The return type must be acceptable as input to binary_op.
- `binary_op`: binary FunctionObject that will be applied in to the result of unary_op, the results of other binary_op, and init if provided

## Return value
Iterator to the element past the last element written.

## Notes
unary_op is never applied to init.

The parameter init appears last, differing from [std::transform_exclusive_scan](/cpp/algorithm/transform_exclusive_scan/), because it is optional for this function.

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
- [transform](/cpp/algorithm/transform/)
- [inclusive_scan](/cpp/algorithm/inclusive_scan/)
- [std::partial_sum](/cpp/algorithm/partial_sum/)
- [transform_exclusive_scan](/cpp/algorithm/transform_exclusive_scan/)
