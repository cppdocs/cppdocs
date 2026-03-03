---
title: "std::span<T,Extent>::subspan"
source_path: "cpp/container/span/subspan"
category: "container"
since: "C++20"
---

Obtains a span that is a view over the Count elements of this span starting at offset Offset. If Count is std::dynamic_extent, the number of elements in the subspan is size() - offset (i.e., it ends at the end of *this).

## Declarations
```cpp
template< std::size_t Offset,
std::size_t Count = std::dynamic_extent >
constexpr std::span<element_type, E /* see below */>
subspan() const;
```
_(since C++20)_

```cpp
constexpr std::span<element_type, std::dynamic_extent>
subspan( size_type Offset,
size_type Count = std::dynamic_extent ) const;
```
_(since C++20)_

## Return value
The requested subspan r, such that r.data() == this->data() + Offset. If Count is std::dynamic_extent, r.size() == this->size() - Offset; otherwise r.size() == Count.

## Example
```cpp
#include <algorithm>
#include <cstdio>
#include <numeric>
#include <ranges>
#include <span>
 
void display(std::span<const char> abc)
{
    const auto columns{20U};
    const auto rows{abc.size() - columns + 1};
 
    for (auto offset{0U}; offset < rows; ++offset)
    {
        std::ranges::for_each(abc.subspan(offset, columns), std::putchar);
        std::putchar('\n');
    }
}
 
int main()
{
    char abc[26];
    std::iota(std::begin(abc), std::end(abc), 'A');
    display(abc);
}
```

## See also
- [first](/cpp/container/span/first/)
- [last](/cpp/container/span/last/)
