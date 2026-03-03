---
title: "std::common_iterator<I,S>::operator++"
source_path: "cpp/iterator/common_iterator/operator"
category: "iterator"
since: "C++20"
---

Increments the underlying iterator.

## Declarations
```cpp
constexpr common_iterator& operator++();
```
_(since C++20)_

```cpp
constexpr decltype(auto) operator++( int );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
class /*postfix_proxy*/ {
std::iter_value_t<I> keep_;
constexpr postfix_proxy(std::iter_reference_t<I>&& x)
: keep_(std::forward<std::iter_reference_t<I>>(x)) {}
public:
constexpr const std::iter_value_t<I>& operator*() const noexcept {
return keep_;
}
};
```
_(exposition only*)_

## Example
```cpp
#include <algorithm>
#include <initializer_list>
#include <iostream>
#include <iterator>
 
int main()
{
    const auto il = {1, 2, 3, 4, 5, 6};
 
    using CI = std::common_iterator<
                   std::counted_iterator<std::initializer_list<int>::iterator>,
                   std::default_sentinel_t
                   >;
 
    CI first{std::counted_iterator{std::begin(il), std::ssize(il) - 2}};
 
    for (; first != std::default_sentinel; ++first)
        std::cout << *first << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2259R1 | C++20 | post increment might discard its result in more situations | a proxy class is used to keep the result |
| LWG 3546 | C++20 | initialization of the proxy object was sometimes ill-formed | situation and definition adjusted |
| LWG 3574 | C++20 | variant was fully constexpr (P2231R1) but common_iterator was not | also made constexpr |
| LWG 3595 | C++20 | functions of the proxy type lacked constexpr and noexcept | added |

## See also
- [operator-]()
