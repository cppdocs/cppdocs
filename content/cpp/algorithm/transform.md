---
title: "std::transform"
source_path: "cpp/algorithm/transform"
header: "<algorithm>"
category: "algorithm"
since: "C++98"
---

`std::transform` applies a unary or binary operation to input elements and writes the produced values to an output range beginning at `d_first`.

The unary overload transforms one input range. The binary overload combines elements from two input ranges element-by-element.

`std::transform` writes exactly `std::distance(first1, last1)` results through the output iterator.

Whether this overwrites existing elements or appends new ones depends on the behavior of the output iterator.

## Declarations
```cpp
template< class InputIt, class OutputIt, class UnaryOp >
OutputIt transform( InputIt first1, InputIt last1,
OutputIt d_first, UnaryOp unary_op );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class UnaryOp >
ForwardIt2 transform( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 d_first, UnaryOp unary_op );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2,
class OutputIt, class BinaryOp >
OutputIt transform( InputIt1 first1, InputIt1 last1, InputIt2 first2,
OutputIt d_first, BinaryOp binary_op );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class ForwardIt3, class BinaryOp >
ForwardIt3 transform( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2,
ForwardIt3 d_first, BinaryOp binary_op );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first input range to transform
- `first2`: the beginning of the second input range for the binary overloads
- `d_first`: the beginning of the destination range; it may be equal to `first1` or `first2`
- `policy`: the [execution policy](/cpp/algorithm/execution_policy_tag_t/) to use
- `unary_op`: unary operation object applied to each element from `[first1, last1)`. It must be callable with an argument obtained by dereferencing `InputIt`, and its result must be writable through `OutputIt`.
- `binary_op`: binary operation object applied to corresponding elements from the two input ranges. It must be callable with arguments obtained by dereferencing `InputIt1` and `InputIt2`, and its result must be writable through `OutputIt`

If `unary_op` or `binary_op` invalidates an iterator or modifies an element in any of the input or output ranges involved, the behavior is undefined.

For the unary overloads, the destination range must be able to hold at least `std::distance(first1, last1)` elements.

For the binary overloads, the second input range must contain at least `std::distance(first1, last1)` elements.

## Return value
Iterator to the element past the last element written to the destination range.

## Complexity
Let `N = std::distance(first1, last1)`.

- Unary overloads: exactly `N` applications of `unary_op`
- Binary overloads: exactly `N` applications of `binary_op`

## Exceptions
The overloads with a template parameter named `ExecutionPolicy` report errors as follows:

- If execution of a function invoked as part of the algorithm throws an exception and `ExecutionPolicy` is one of the standard policies, [`std::terminate`](/cpp/error/terminate/) is called
- If the algorithm fails to allocate memory, [`std::bad_alloc`](/cpp/memory/new/bad_alloc/) is thrown

## Notes
`std::transform` does not guarantee in-order application of `unary_op` or `binary_op`. To process a sequence strictly in order, or to apply an operation for its side effects on the visited elements, use [std::for_each](/cpp/algorithm/for_each/).

In-place transformation is supported when the destination begins at the same position as one of the input ranges. More general overlapping of source and destination ranges is not supported unless it follows directly from that allowed case.

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <iomanip>
#include <iostream>
#include <string>
#include <utility>
#include <vector>
 
void print_ordinals(const std::vector<unsigned>& ordinals)
{
    std::cout << "ordinals: ";
    for (unsigned ord : ordinals)
        std::cout << std::setw(3) << ord << ' ';
    std::cout << '\n';
}
 
char to_uppercase(unsigned char c)
{
    return std::toupper(c);
}
 
void to_uppercase_inplace(char& c)
{
    c = to_uppercase(c);
}
 
void unary_transform_example(std::string& hello, std::string world)
{
    // Transform string to uppercase in-place
 
    std::transform(hello.cbegin(), hello.cend(), hello.begin(), to_uppercase);
    std::cout << "hello = " << std::quoted(hello) << '\n';
 
    // for_each version (see Notes above)
    std::for_each(world.begin(), world.end(), to_uppercase_inplace);
    std::cout << "world = " << std::quoted(world) << '\n';
}
 
void binary_transform_example(std::vector<unsigned> ordinals)
{
    // Transform numbers to doubled values
 
    print_ordinals(ordinals);
 
    std::transform(ordinals.cbegin(), ordinals.cend(), ordinals.cbegin(),
                   ordinals.begin(), std::plus<>{});
 
    print_ordinals(ordinals);
}
 
int main()
{
    std::string hello("hello");
    unary_transform_example(hello, "world");
 
    std::vector<unsigned> ordinals;
    std::copy(hello.cbegin(), hello.cend(), std::back_inserter(ordinals));
    binary_transform_example(std::move(ordinals));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 242 | C++98 | unary_op and binary_op could not have side effects | they cannot modify the ranges involved |

## See also
- [for_each](/cpp/algorithm/for_each/)
- [ranges::transform](/cpp/algorithm/ranges/transform/)
