---
title: "std::span<T,Extent>::rend, std::span<T,Extent>::crend"
source_path: "cpp/container/span/rend"
category: "container"
since: "C++20"
---

Returns a reverse iterator to the element following the last element of the reversed span. It corresponds to the element preceding the first element of the non-reversed span. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
constexpr reverse_iterator rend() const noexcept;
```
_(since C++20)_

```cpp
constexpr const_reverse_iterator crend() const noexcept;
```
_(since C++23)_

## Return value
Reverse iterator to the element following the last element.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <span>
#include <string_view>
 
void ascending(const std::span<const std::string_view> data,
               const std::string_view term)
{
    std::for_each(data.begin(), data.end(),
        [](const std::string_view x) { std::cout << x << ' '; });
    std::cout << term;
}
 
void descending(const std::span<const std::string_view> data,
                const std::string_view term)
{
    std::for_each(data.rbegin(), data.rend(),
        [](const std::string_view x) { std::cout << x << ' '; });
    std::cout << term;
}
 
int main()
{
    constexpr std::string_view bars[]{"▁","▂","▃","▄","▅","▆","▇","█"};
    ascending(bars, " ");
    descending(bars, "\n");
}
```

## See also
- [rbegincrbegin](/cpp/container/span/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
