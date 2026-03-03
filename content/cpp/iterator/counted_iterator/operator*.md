---
title: "std::counted_iterator<I>::operator*,->"
source_path: "cpp/iterator/counted_iterator/operator"
category: "iterator"
since: "C++20"
---

1,2) Returns a reference to the current element. The behavior is undefined if this->count() <= 0. The function's body is equivalent to return *current;.

## Declarations
```cpp
constexpr decltype(auto) operator*();
```
_(since C++20)_

```cpp
constexpr decltype(auto) operator*() const
requires /*dereferenceable*/<const I>;
```
_(since C++20)_

```cpp
constexpr auto operator->() const noexcept
requires std::contiguous_iterator<I>;
```
_(since C++20)_

## Return value
Reference or pointer to the current element.

## Example
```cpp
#include <complex>
#include <iostream>
#include <iterator>
using std::operator""i;
 
int main()
{
    const auto il = {1.i, 2.i, 3.i, 4.i, 5.i};
 
    for (std::counted_iterator i{il.begin() + 1, 3}; i != std::default_sentinel; ++i)
        std::cout << *i << ' ';
    std::cout << '\n';
 
    for (std::counted_iterator i{il.begin() + 1, 3}; i != std::default_sentinel; ++i)
        std::cout << i->imag() << ' ';
    std::cout << '\n';
}
```

## See also
- [operator[]](/cpp/iterator/counted_iterator/operator_at/)
