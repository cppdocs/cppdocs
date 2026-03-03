---
title: "std::not2"
source_path: "cpp/utility/functional/not2"
header: "<functional>"
category: "utility"
---

std::not2 is a helper function to create a function object that returns the complement of the binary predicate function passed. The function object created is of type [std::binary_negate](/cpp/utility/functional/binary_negate/)<Predicate>.

## Declarations
```cpp
template< class Predicate >
std::binary_negate<Predicate> not2( const Predicate& pred );
```
_(until C++14)_

```cpp
template< class Predicate >
constexpr std::binary_negate<Predicate> not2( const Predicate& pred );
```
_(since C++14) (deprecated in C++17) (removed in C++20)_

## Parameters
- `pred`: binary predicate

## Return value
std::not2 returns an object of type [std::binary_negate](/cpp/utility/functional/binary_negate/)<Predicate>, constructed with pred.

## Example
```cpp
#include <algorithm>
#include <cstddef>
#include <functional>
#include <iostream>
#include <vector>
 
struct old_same : std::binary_function<int, int, bool>
{
    bool operator()(int a, int b) const { return a == b; }
};
 
struct new_same
{
    bool operator()(int a, int b) const { return a == b; }
};
 
bool same_fn(int a, int b)
{
    return a == b;
}
 
int main()
{
    std::vector<int> v1{0, 1, 2};
    std::vector<int> v2{2, 1, 0};
    std::vector<bool> v3(v1.size());
 
    std::cout << "negating a binary_function:\n";
    std::transform(v1.begin(), v1.end(), v2.begin(), v3.begin(),
                   std::not2(old_same()));
 
    std::cout << std::boolalpha;
    for (std::size_t i = 0; i < v1.size(); ++i)
        std::cout << v1[i] << ' ' << v2[i] << ' ' << v3[i] << '\n';
 
    std::cout << "negating a standard functor:\n";
    std::transform(v1.begin(), v1.end(), v2.begin(), v3.begin(),
                   std::not2(std::equal_to<int>()));
 
    for (std::size_t i = 0; i < v1.size(); ++i)
        std::cout << v1[i] << ' ' << v2[i] << ' ' << v3[i] << '\n';
 
    std::cout << "negating a std::function:\n";
    std::transform(v1.begin(), v1.end(), v2.begin(), v3.begin(),
                   std::not2(std::function<bool(int, int)>(new_same())));
 
    for (std::size_t i = 0; i < v1.size(); ++i)
        std::cout << v1[i] << ' ' << v2[i] << ' ' << v3[i] << '\n';
 
    std::cout << "negating a std::reference_wrapper:\n";
    std::transform(v1.begin(), v1.end(), v2.begin(), v3.begin(),
                   std::not2(std::ref(same_fn)));
 
    for (std::size_t i = 0; i < v1.size(); ++i)
        std::cout << v1[i] << ' ' << v2[i] << ' ' << v3[i] << '\n';
}
```

## See also
- [not_fn](/cpp/utility/functional/not_fn/)
- [binary_negate](/cpp/utility/functional/binary_negate/)
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [not1](/cpp/utility/functional/not1/)
- [std::unary_negate](/cpp/utility/functional/unary_negate/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
- [binary_function](/cpp/utility/functional/binary_function/)
