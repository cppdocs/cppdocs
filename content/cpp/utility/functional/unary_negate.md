---
title: "std::unary_negate"
source_path: "cpp/utility/functional/unary_negate"
header: "<functional>"
category: "utility"
---

std::unary_negate is a wrapper function object returning the complement of the unary predicate it holds.

## Declarations
```cpp
template< class Predicate >
struct unary_negate : public std::unary_function<Predicate::argument_type, bool>;
```
_(until C++11)_

```cpp
template< class Predicate >
struct unary_negate;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Parameters
- `pred`: predicate function object

## Return value
The logical complement of the result of calling pred(x).

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
    std::vector<int> v(7, 7);
    v[0] = v[1] = v[2] = 6;
 
    std::unary_negate<less_than_7> not_less_than_7((less_than_7()));
    // C++11 solution:
    // Use std::function<bool (int)>
    // std::function<bool (int)> not_less_than_7 =
    //     [](int x)->bool { return !less_than_7()(x); };
 
    std::cout << std::count_if(v.begin(), v.end(), not_less_than_7);
}
```

## See also
- [binary_negate](/cpp/utility/functional/binary_negate/)
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [not1](/cpp/utility/functional/not1/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
- [unary_function](/cpp/utility/functional/unary_function/)
