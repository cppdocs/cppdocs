---
title: "std::span<T,Extent>::front"
source_path: "cpp/container/span/front"
category: "container"
since: "C++20"
---

Returns a reference to the first element in the span.

## Declarations
```cpp
constexpr reference front() const;
```
_(since C++20)_

## Return value
A reference to the first element.

## Notes
For a span c, the expression c.front() is equivalent to *c.begin().

## Example
```cpp
#include <iostream>
#include <span>
 
void print(std::span<const int> const data)
{
    for (auto offset{0U}; offset != data.size(); ++offset)
        std::cout << data.subspan(offset).front() << ' ';
    std::cout << '\n';
}
 
int main()
{
    constexpr int data[]{0, 1, 2, 3, 4, 5, 6};
    print({data, 4});
}
```

## See also
- [back](/cpp/container/span/back/)
