---
title: "std::ranges::adjacent_view<V,N>::adjacent_view"
source_path: "cpp/ranges/adjacent_view/adjacent_view"
category: "ranges"
since: "C++23"
---

Constructs an [adjacent_view](/cpp/ranges/adjacent_view/).

## Declarations
```cpp
adjacent_view() requires std::default_initializable<V> = default;
```
_(since C++23)_

```cpp
constexpr explicit adjacent_view( V base );
```
_(since C++23)_

## Parameters
- `base`: the underlying view

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string>
#include <tuple>
 
template<class... Ts>
void print(std::tuple<Ts...> const& tuple)
{
    std::apply([&](auto&& arg, auto&&... args)
    {
        std::cout << arg;
        ((std::cout << args), ...);
    }, tuple);
    std::cout << '\n';
}
 
int main()
{
    const std::string v{"ABCDEF"};
    constexpr int window_size{4};
 
    std::cout << "v: " << v << '\n';
 
    auto view = std::views::adjacent<window_size>(v); // overload (2)
 
    for (auto const& tuple : view)
        print(tuple);
}
```
