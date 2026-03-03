---
title: "std::unary_function"
source_path: "cpp/utility/functional/unary_function"
header: "<functional>"
category: "utility"
---

std::unary_function is a base class for creating function objects with one argument.

## Declarations
```cpp
template< typename ArgumentType, typename ResultType >
struct unary_function;
```
_(deprecated in C++11) (removed in C++17)_

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>
 
struct less_than_7 : std::unary_function<int, bool>
{
    bool operator()(int i) const { return i < 7; }
};
 
int main()
{
    std::vector<int> v(10, 7);
    v[0] = v[1] = v[2] = 6;
 
    std::cout << std::count_if(v.begin(), v.end(), std::not1(less_than_7()));
 
    // C++11 solution:
    // Cast to std::function<bool (int)> somehow - even with a lambda
    // std::cout << std::count_if(v.begin(), v.end(),
    //     std::not1(std::function<bool (int)>([](int i) { return i < 7; })));
}
```

## See also
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
- [pointer_to_unary_function](/cpp/utility/functional/pointer_to_unary_function/)
- [binary_function](/cpp/utility/functional/binary_function/)
