---
title: "std::not1"
source_path: "cpp/utility/functional/not1"
header: "<functional>"
category: "utility"
---

std::not1 is a helper function to create a function object that returns the complement of the unary predicate function passed. The function object created is of type [std::unary_negate](/cpp/utility/functional/unary_negate/)<Predicate>.

## Declarations
```cpp
template< class Predicate >
std::unary_negate<Predicate> not1( const Predicate& pred );
```
_(until C++14)_

```cpp
template< class Predicate >
constexpr std::unary_negate<Predicate> not1( const Predicate& pred );
```
_(since C++14) (deprecated in C++17) (removed in C++20)_

## Parameters
- `pred`: unary predicate

## Return value
std::not1 returns an object of type [std::unary_negate](/cpp/utility/functional/unary_negate/)<Predicate>, constructed with pred.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
struct LessThan7 : std::unary_function<int, bool>
{
    bool operator()(int i) const { return i < 7; }
};
 
int main()
{
    std::vector<int> v(10);
    std::iota(std::begin(v), std::end(v), 0);
 
    std::cout << std::count_if(begin(v), end(v), std::not1(LessThan7())) << '\n';
 
    // the same as above using std::function
    std::function<bool(int)> less_than_9 = [](int x) { return x < 9; };
    std::cout << std::count_if(begin(v), end(v), std::not1(less_than_9)) << '\n';
}
```

## See also
- [not_fn](/cpp/utility/functional/not_fn/)
- [unary_negate](/cpp/utility/functional/unary_negate/)
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [not2](/cpp/utility/functional/not2/)
- [std::binary_negate](/cpp/utility/functional/binary_negate/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
- [unary_function](/cpp/utility/functional/unary_function/)
