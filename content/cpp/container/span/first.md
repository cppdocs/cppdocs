---
title: "std::span<T,Extent>::first"
source_path: "cpp/container/span/first"
category: "container"
since: "C++20"
---

Obtains a span that is a view over the first Count elements of this span. The program is ill-formed if Count > Extent. The behavior is undefined if Count > size().

## Declarations
```cpp
template< std::size_t Count >
constexpr std::span<element_type, Count> first() const;
```
_(since C++20)_

```cpp
constexpr std::span<element_type, std::dynamic_extent> first( size_type Count ) const;
```
_(since C++20)_

## Return value
A span r that is a view over the first Count elements of *this, such that r.data() == this->data() && r.size() == Count.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <span>
#include <string_view>
 
void print(std::string_view const title,
           std::ranges::forward_range auto const& container)
{
    auto size{std::size(container)};
    std::cout << title << '[' << size << "]{";
    for (auto const& elem : container)
        std::cout << elem << (--size ? ", " : "");
    std::cout << "};\n";
}
 
void run_game(std::span<const int> span)
{
    print("span: ", span);
 
    std::span<const int, 5> span_first = span.first<5>();
    print("span.first<5>(): ", span_first);
 
    std::span<const int, std::dynamic_extent> span_first_dynamic = span.first(4);
    print("span.first(4): ", span_first_dynamic);
}
 
int main()
{
    int a[8]{1, 2, 3, 4, 5, 6, 7, 8};
    print("int a", a);
    run_game(a);
}
```

## See also
- [last](/cpp/container/span/last/)
- [subspan](/cpp/container/span/subspan/)
