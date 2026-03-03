---
title: "std::experimental::erase (std::forward_list)"
source_path: "cpp/experimental/forward_list/erase"
header: "<experimental/forward_list>"
category: "experimental"
---

Erases all elements that compare equal to value from the container. Equivalent to c.remove_if([&](auto& elem) { return elem == value; });.

## Declarations
```cpp
template< class T, class A, class U >
void erase( std::forward_list<T, A>& c, const U& value );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed

## Notes
Unlike [std::forward_list::remove](/cpp/container/forward_list/remove/), this function template accepts heterogeneous types and does not force a conversion to the container's value type before invoking the == operator.

## Example
```cpp
#include <experimental/forward_list>
#include <iostream>
 
auto show = [](const auto& container)
{
    for (auto e : container)
        std::cout << e;
    std::cout << '\n';
};
 
int main()
{
    std::forward_list<int> data{1, 1, 1, 4, 1, 1, 1, 2, 1, 1, 1};
    show(data);
    std::experimental::erase(data, 1);
    show(data);
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [removeremove_if](/cpp/container/forward_list/remove/)
- [erase_if (std::forward_list)](/cpp/experimental/forward_list/erase_if/)
- [std::forward_list](/cpp/container/forward_list/)
