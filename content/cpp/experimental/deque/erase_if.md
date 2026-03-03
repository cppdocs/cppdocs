---
title: "std::experimental::erase_if (std::deque)"
source_path: "cpp/experimental/deque/erase_if"
header: "<experimental/deque>"
category: "experimental"
---

Erases all elements that satisfy the predicate pred from the container. Equivalent to c.erase([std::remove_if](/cpp/algorithm/remove/)(c.begin(), c.end(), pred), c.end());.

## Declarations
```cpp
template< class T, class Alloc, class Pred >
void erase_if( std::deque<T, Alloc>& c, Pred pred );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `pred`: predicate that determines which elements should be erased

## Example
```cpp
#include <experimental/deque>
#include <iostream>
 
template<typename Os, typename Container>
inline Os& operator<<(Os& os, Container const& container)
{
    os << "{ ";
    for (const auto& item : container)
        os << item << ' ';
    return os << '}';
}
 
int main()
{
    std::deque<int> data{3, 3, 4, 5, 5, 6, 6, 7, 2, 1, 0};
    std::cout << "Original:\n" << data << '\n';
    auto divisible_by_3 = [](auto const& x) { return (x % 3) == 0; };
    std::experimental::erase_if(data, divisible_by_3);
    std::cout << "Erase all items divisible by 3:\n" << data << '\n';
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [erase (std::deque)](/cpp/experimental/deque/erase/)
- [std::deque](/cpp/container/deque/)
