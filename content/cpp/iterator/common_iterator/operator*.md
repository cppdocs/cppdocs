---
title: "std::common_iterator<I,S>::operator*,->"
source_path: "cpp/iterator/common_iterator/operator"
category: "iterator"
since: "C++20"
---

Returns pointer or reference to the current element, or a proxy holding it.

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
constexpr auto operator->() const
requires /* see description */;
```
_(since C++20)_

```cpp
Helper types
```

```cpp
class /*proxy*/ {
std::iter_value_t<I> keep_;
constexpr proxy(std::iter_reference_t<I>&& x)
: keep_(std::move(x)) {}
public:
constexpr const std::iter_value_t<I>* operator->() const noexcept {
return std::addressof(keep_);
}
};
```
_(exposition only*)_

## Example
```cpp
#include <complex>
#include <initializer_list>
#include <iostream>
#include <iterator>
 
using std::complex_literals::operator""i;
 
int main()
{
    const auto il = {1i, 3.14 + 2i, 3i, 4i, 5i};
 
    using CI = std::common_iterator<
        std::counted_iterator<decltype(il)::iterator>,
        std::default_sentinel_t>;
 
    CI ci{std::counted_iterator{std::next(begin(il), 1), std::ssize(il) - 1}};
 
    std::cout << *ci << ' ' << ci->real() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3574 | C++20 | variant was fully constexpr (P2231R1) but common_iterator was not | also made constexpr |
| LWG 3595 | C++20 | functions of the proxy type lacked constexpr and noexcept | added |
| LWG 3672 | C++20 | operator-> might return by reference in usual cases | always returns by value |

## See also
- [(constructor)](/cpp/iterator/common_iterator/common_iterator/)
