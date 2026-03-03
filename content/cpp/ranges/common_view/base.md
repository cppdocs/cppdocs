---
title: "std::ranges::common_view<V>::base"
source_path: "cpp/ranges/common_view/base"
category: "ranges"
since: "C++20"
---

Returns a copy of the underlying view.

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++20)_

```cpp
constexpr V base() &&;
```
_(since C++20)_

## Return value
A copy of the underlying view.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string>
 
int main()
{
    std::string str { "C++20" };
    auto view = std::views::common(str);
 
    std::string copy_of_str = view.base();
    std::cout << "copy of str: [" << copy_of_str << "]\n";
    std::cout << "view.base(): [" << view.base() << "]\n";
 
    std::string move_str = std::move(view.base());
    std::cout << "moved str:   [" << move_str << "]\n";
    std::cout << "view.base(): [" << view.base() << "]\n"; // unspecified
}
```
