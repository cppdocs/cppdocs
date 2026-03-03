---
title: "std::experimental::erase (std::list)"
source_path: "cpp/experimental/list/erase"
header: "<experimental/list>"
category: "experimental"
---

Erases all elements that compare equal to value from the container. Equivalent to c.remove_if([&](auto& elem) { return elem == value; });.

## Declarations
```cpp
template< class T, class A, class U >
void erase( std::list<T, A>& c, const U& value );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed

## Notes
Unlike [std::list::remove](/cpp/container/list/remove/), this function template accepts heterogeneous types and does not force a conversion to the container's value type before invoking the == operator.

## Example
```cpp
#include <experimental/list>
#include <iostream>
 
auto show = [](const auto& container)
{
    for (auto e : container)
        std::cout << e;
    std::cout << '\n';
};
 
int main()
{
    std::list<int> data{1, 1, 1, 4, 1, 1, 1, 2, 1, 1, 1};
    show(data);
    std::experimental::erase(data, 1);
    show(data);
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [removeremove_if](/cpp/container/list/remove/)
- [erase_if (std::list)](/cpp/experimental/list/erase_if/)
- [std::list](/cpp/container/list/)
