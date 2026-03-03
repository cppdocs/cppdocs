---
title: "std::experimental::erase (std::deque)"
source_path: "cpp/experimental/deque/erase"
header: "<experimental/deque>"
category: "experimental"
---

Erases all elements that compare equal to value from the container. Equivalent to c.erase(std::remove(c.begin(), c.end(), value), c.end());.

## Declarations
```cpp
template< class T, class A, class U >
void erase( std::deque<T, A>& c, const U& value );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed

## Example
```cpp
#include <experimental/deque>
#include <iostream>
 
auto show = [](const auto& container)
{
    for (auto e : container)
        std::cout << e;
    std::cout << '\n';
};
 
int main()
{
    std::deque<int> data{1, 1, 1, 4, 1, 1, 1, 2, 1, 1, 1};
    show(data);
    std::experimental::erase(data, 1);
    show(data);
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [erase_if (std::deque)](/cpp/experimental/deque/erase_if/)
- [std::deque](/cpp/container/deque/)
