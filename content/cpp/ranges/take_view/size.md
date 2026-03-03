---
title: "std::ranges::take_view<V>::size"
source_path: "cpp/ranges/take_view/size"
category: "ranges"
since: "C++20"
---

Returns the number of elements, which is the smaller of the count passed to the constructor and the size of the underlying view.

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<V>;
```
_(since C++20)_

```cpp
constexpr auto size() const requires ranges::sized_range<const V>;
```
_(since C++20)_

## Return value
The number of elements.

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    constexpr int arr[]{1, 2, 3};
 
    for (int i = 0; i != 6; ++i)
    {
        const auto tv = std::ranges::take_view{arr, i};
        std::cout << tv.size() << ' ';
    }
    std::cout << '\n';
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
