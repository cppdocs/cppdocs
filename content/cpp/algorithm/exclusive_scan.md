---
title: "std::exclusive_scan"
source_path: "cpp/algorithm/exclusive_scan"
header: "<numeric>"
category: "algorithm"
since: "C++17"
---

1) Equivalent to exclusive_scan(first, last, d_first, init, [std::plus](/cpp/utility/functional/plus/)<>().

## Declarations
```cpp
template< class InputIt, class OutputIt, class T >
OutputIt exclusive_scan( InputIt first, InputIt last,
OutputIt d_first, T init );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class T >
ForwardIt2 exclusive_scan( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, T init );
```
_(since C++17)_

```cpp
template< class InputIt, class OutputIt,
class T, class BinaryOp >
OutputIt exclusive_scan( InputIt first, InputIt last,
OutputIt d_first, T init, BinaryOp op );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class T, class BinaryOp >
ForwardIt2 exclusive_scan( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, T init, BinaryOp op );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to sum
- `d_first`: the beginning of the destination range; may be equal to first
- `policy`: the execution policy to use
- `init`: the initial value
- `op`: binary FunctionObject that will be applied in to the result of dereferencing the input iterators, the results of other op, and init

## Return value
Iterator to the element past the last element written.

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
 
    std::cout << "Exclusive sum: ";
    std::exclusive_scan(data.begin(), data.end(),
                        std::ostream_iterator<int>(std::cout, " "),
                        0);
 
    std::cout << "\nInclusive sum: ";
    std::inclusive_scan(data.begin(), data.end(),
                        std::ostream_iterator<int>(std::cout, " "));
 
    std::cout << "\n\nExclusive product: ";
    std::exclusive_scan(data.begin(), data.end(),
                        std::ostream_iterator<int>(std::cout, " "),
                        1, std::multiplies<>{});
 
    std::cout << "\nInclusive product: ";
    std::inclusive_scan(data.begin(), data.end(),
                        std::ostream_iterator<int>(std::cout, " "),
                        std::multiplies<>{});
}
```

## See also
- [adjacent_difference](/cpp/algorithm/adjacent_difference/)
- [accumulate](/cpp/algorithm/accumulate/)
- [partial_sum](/cpp/algorithm/partial_sum/)
- [transform_exclusive_scan](/cpp/algorithm/transform_exclusive_scan/)
- [inclusive_scan](/cpp/algorithm/inclusive_scan/)
- [std::partial_sum](/cpp/algorithm/partial_sum/)
