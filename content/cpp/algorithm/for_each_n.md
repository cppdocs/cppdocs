---
title: "std::for_each_n"
source_path: "cpp/algorithm/for_each_n"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Applies the given function object f to the result of dereferencing every iterator in the range [first,first + n). If f returns a result, the result is ignored.

## Declarations
```cpp
template< class InputIt, class Size, class UnaryFunc >
InputIt for_each_n( InputIt first, Size n, UnaryFunc f );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class Size, class UnaryFunc >
ForwardIt for_each_n( ExecutionPolicy&& policy,
ForwardIt first, Size n, UnaryFunc f );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the range to apply the function to
- `n`: the number of elements to apply the function to
- `policy`: the execution policy to use
- `f`: function object, to be applied to the result of dereferencing every iterator in the range [first, first + n) The signature of the function should be equivalent to the following: void fun(const Type &a); The signature does not need to have const &. The type Type must be such that an object of type InputIt can be dereferenced and then implicitly converted to Type.

## Return value
An iterator equal to first + n, or more formally, to [std::advance](/cpp/iterator/advance/)(first, n).

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
void println(auto const& v)
{
    for (auto count{v.size()}; const auto& e : v)
        std::cout << e << (--count ? ", " : "\n");
}
 
int main()
{
    std::vector<int> vi{1, 2, 3, 4, 5};
    println(vi);
 
    std::for_each_n(vi.begin(), 3, [](auto& n) { n *= 2; });
    println(vi);
}
```

## See also
- [transform](/cpp/algorithm/transform/)
- [range-for loop](/cpp/language/range-for/)
- [for_each](/cpp/algorithm/for_each/)
- [ranges::for_each_n](/cpp/algorithm/ranges/for_each_n/)
