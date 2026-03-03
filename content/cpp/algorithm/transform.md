---
title: "std::transform"
source_path: "cpp/algorithm/transform"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

std::transform applies the given function to the elements of the given input range(s), and stores the result in an output range starting from d_first.

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
- `first1, last1`: the first range of elements to transform
- `first2`: the beginning of the second range of elements to transform
- `d_first`: the beginning of the destination range, may be equal to first1 or first2
- `policy`: the execution policy to use
- `unary_op`: unary operation function object that will be applied. The signature of the function should be equivalent to the following: Ret fun(const Type &a); The signature does not need to have const &. The type Type must be such that an object of type InputIt can be dereferenced and then implicitly converted to Type. The type Ret must be such that an object of type OutputIt can be dereferenced and assigned a value of type Ret.
- `binary_op`: binary operation function object that will be applied. The signature of the function should be equivalent to the following: Ret fun(const Type1 &a, const Type2 &b); The signature does not need to have const &. The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to Type1 and Type2 respectively. The type Ret must be such that an object of type OutputIt can be dereferenced and assigned a value of type Ret.

## Return value
Output iterator to the element that follows the last element transformed.

## Notes
std::transform does not guarantee in-order application of unary_op or binary_op. To apply a function to a sequence in-order or to apply a function that modifies the elements of a sequence, use [std::for_each](/cpp/algorithm/for_each/).

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
