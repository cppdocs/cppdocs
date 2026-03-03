---
title: "std::binary_function"
source_path: "cpp/utility/functional/binary_function"
header: "<functional>"
category: "utility"
---

std::binary_function is a base class for creating function objects with two arguments.

## Declarations
```cpp
template<
class Arg1,
class Arg2,
class Result
> struct binary_function;
```
_(deprecated in C++11) (removed in C++17)_

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>
 
struct same : std::binary_function<int, int, bool>
{
    bool operator()(int a, int b) const { return a == b; }
};
 
int main()
{
    std::vector<char> v1{'A', 'B', 'C', 'D', 'E'};
    std::vector<char> v2{'E', 'D', 'C', 'B', 'A'};
    std::vector<bool> v3(v1.size());
 
    std::transform(v1.begin(), v1.end(), v2.begin(), v3.begin(), std::not2(same()));
 
    std::cout << std::boolalpha;
    for (std::size_t i = 0; i < v1.size(); ++i)
        std::cout << v1[i] << " != " << v2[i] << " : " << v3[i] << '\n';
}
```

## See also
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
- [pointer_to_binary_function](/cpp/utility/functional/pointer_to_binary_function/)
- [unary_function](/cpp/utility/functional/unary_function/)
