---
title: "std::span<T,Extent>::last"
source_path: "cpp/container/span/last"
category: "container"
since: "C++20"
---

Obtains a span that is a view over the last Count elements of this span. The program is ill-formed if Count > Extent. The behavior is undefined if Count > size().

## Declarations
```cpp
template< std::size_t Count >
constexpr std::span<element_type, Count> last() const;
```
_(since C++20)_

```cpp
constexpr std::span<element_type, std::dynamic_extent> last( size_type Count ) const;
```
_(since C++20)_

## Return value
A span r that is a view over the last Count elements of *this, such that r.data() == this->data() + (this->size() - Count) && r.size() == Count.

## Example
```cpp
#include <iostream>
#include <span>
#include <string_view>
 
void println(std::string_view const title, auto const& container)
{
    std::cout << title << '[' << std::size(container) << "]{ ";
    for (auto const& elem : container)
        std::cout << elem << ", ";
    std::cout << "};\n";
};
 
void run(std::span<const int> span)
{
    println("span: ", span);
 
    std::span<const int, 3> span_last = span.last<3>();
    println("span.last<3>(): ", span_last);
 
    std::span<const int, std::dynamic_extent> span_last_dynamic = span.last(2);
    println("span.last(2): ", span_last_dynamic);
}
 
int main()
{
    int a[8]{1, 2, 3, 4, 5, 6, 7, 8};
    println("int a", a);
    run(a);
}
```

## See also
- [first](/cpp/container/span/first/)
- [subspan](/cpp/container/span/subspan/)
