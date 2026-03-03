---
title: "std::span<T,Extent>::back"
source_path: "cpp/container/span/back"
category: "container"
since: "C++20"
---

Returns a reference to the last element in the span.

## Declarations
```cpp
constexpr reference back() const;
```
_(since C++20)_

## Return value
A reference to the back element.

## Notes
For a span c, the expression c.back() is equivalent to *(c.end() - 1).

## Example
```cpp
#include <iostream>
#include <span>
 
void print_forward(std::span<const int> const span)
{
    for (auto n{span.size()}; n != 0; --n)
        std::cout << span.last(n).front() << ' ';
    std::cout << '\n';
}
 
void print_backward(std::span<const int> const span)
{
    for (auto n{span.size()}; n != 0; --n)
        std::cout << span.first(n).back() << ' ';
    std::cout << '\n';
}
 
int main()
{
    constexpr int numbers[]{0, 1, 2, 3, 4};
    print_forward(numbers);
    print_backward(numbers);
}
```

## See also
- [front](/cpp/container/span/front/)
