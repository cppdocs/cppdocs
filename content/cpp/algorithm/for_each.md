---
title: "std::for_each"
source_path: "cpp/algorithm/for_each"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Applies the given function object f to the result of dereferencing every iterator in the range [first,last). If f returns a result, the result is ignored.

## Declarations
```cpp
template< class InputIt, class UnaryFunc >
UnaryFunc for_each( InputIt first, InputIt last, UnaryFunc f );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class UnaryFunc >
void for_each( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, UnaryFunc f );
```
_(since C++17)_

## Parameters
- `first, last`: the range to apply the function to
- `policy`: the execution policy to use
- `f`: function object, to be applied to the result of dereferencing every iterator in the range [first, last) The signature of the function should be equivalent to the following: void fun(const Type &a); The signature does not need to have const &. The type Type must be such that an object of type InputIt can be dereferenced and then implicitly converted to Type.

## Notes
For overload (1), f can be a stateful function object. The return value can be considered as the final state of the batch operation.

For overload (2), multiple copies of f may be created to perform parallel invocation. No value is returned because parallelization often does not permit efficient state accumulation.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v{3, -4, 2, -8, 15, 267};
 
    auto print = [](const int& n) { std::cout << n << ' '; };
 
    std::cout << "before:\t";
    std::for_each(v.cbegin(), v.cend(), print);
    std::cout << '\n';
 
    // increment elements in-place
    std::for_each(v.begin(), v.end(), [](int &n) { n++; });
 
    std::cout << "after:\t";
    std::for_each(v.cbegin(), v.cend(), print);
    std::cout << '\n';
 
    struct Sum
    {
        void operator()(int n) { sum += n; }
        int sum {0};
    };
 
    // invoke Sum::operator() for each element
    Sum s = std::for_each(v.cbegin(), v.cend(), Sum());    
    std::cout << "sum:\t" << s.sum << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 475 | C++98 | it was unclear whether f can modify the elementsof the sequence being iterated over (for_each isclassified as “non-modifying sequence operations”) | made clear (allowed if theiterator type is mutable) |
| LWG 2747 | C++11 | overload (1) returned std::move(f) | returns f (which implicitly moves) |

## See also
- [transform](/cpp/algorithm/transform/)
- [for_each_n](/cpp/algorithm/for_each_n/)
- [ranges::for_each](/cpp/algorithm/ranges/for_each/)
- [ranges::for_each_n](/cpp/algorithm/ranges/for_each_n/)
- [range-for loop](/cpp/language/range-for/)
