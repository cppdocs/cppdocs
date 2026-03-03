---
title: "std::queue<T,Container>::push_range"
source_path: "cpp/container/queue/push_range"
category: "container"
since: "C++23"
---

Inserts a copy of each element of rg in queue, as if by:

## Declarations
```cpp
template< container-compatible-range<value_type> R >
void push_range( R&& rg );
```
_(since C++23)_

## Parameters
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
(none)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <queue>
 
template<typename Adaptor>
requires (std::ranges::input_range<typename Adaptor::container_type>)
void println(auto, const Adaptor& adaptor)
{
    struct Container : Adaptor // gain access to protected Adaptor::Container c;
    {
        auto const& container() const { return this->c; }
    };
 
    for (auto const& elem : static_cast<const Container&>(adaptor).container())
        std::cout << elem << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::queue<int> adaptor;
    const auto rg = {1, 3, 2, 4};
 
#ifdef __cpp_lib_containers_ranges
    adaptor.push_range(rg);
#else
    std::ranges::for_each(rg, [&adaptor](auto e){ adaptor.push(e); });
#endif
 
    println("{}", adaptor);
}
```

## See also
- [push](/cpp/container/queue/push/)
