---
title: "std::binary_negate"
source_path: "cpp/utility/functional/binary_negate"
header: "<functional>"
category: "utility"
---

std::binary_negate is a wrapper function object returning the complement of the binary predicate it holds.

## Declarations
```cpp
template< class Predicate >
struct binary_negate
: public std::binary_function<
Predicate::first_argument_type,
Predicate::second_argument_type,
bool
>;
```
_(until C++11)_

```cpp
template< class Predicate >
struct binary_negate;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Parameters
- `pred`: predicate function object

## Return value
The logical complement of the result of calling pred(x, y).

## Example
```cpp
#include <algorithm>
#include <cstddef>
#include <functional>
#include <iostream>
#include <vector>
 
struct same : std::binary_function<int, int, bool>
{
    bool operator()(int a, int b) const { return a == b; }
};
 
int main()
{
    std::vector<int> v1;
    for (int i = 0; i < 7; ++i)
        v1.push_back(i);
 
    std::vector<int> v2(v1.size());
    std::reverse_copy(v1.begin(), v1.end(), v2.begin());
 
    std::vector<bool> v3(v1.size());
 
    std::binary_negate<same> not_same((same()));
 
    // C++11 solution:
    // std::function<bool (int, int)> not_same =
    //     [](int x, int y) -> bool { return !same()(x, y); };
 
    std::transform(v1.begin(), v1.end(), v2.begin(), v3.begin(), not_same);
 
    std::cout.setf(std::ios_base::boolalpha);
    for (std::size_t i = 0; i != v1.size(); ++i)
        std::cout << v1[i] << " != " << v2[i] << " : " << v3[i] << '\n';
}
```

## See also
- [binary_function](/cpp/utility/functional/binary_function/)
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [not2](/cpp/utility/functional/not2/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
- [unary_negate](/cpp/utility/functional/unary_negate/)
