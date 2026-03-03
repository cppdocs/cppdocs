---
title: "std::vector<bool,Allocator>::swap"
source_path: "cpp/container/vector_bool/swap"
header: "<vector>"
category: "container"
---

Swaps the contents of x and y as if by bool b = x; x = y; y = b;.

## Declarations
```cpp
static void swap( reference x, reference y );
```
_(constexpr since C++20)_

## Parameters
- `x`: std::vector<bool>::reference value to swap with y
- `y`: std::vector<bool>::reference value to swap with x

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <vector>
 
void println(std::string_view fmt, std::vector<bool> const& vb = {})
{
    for (std::cout << fmt; bool const e : vb)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    println("swap elements of the same vector:");
    std::vector<bool> x{1, 0};
    println("before swap, x: ", x);
    x.swap(x[0], x[1]); // same as std::vector<bool>::swap(x[0], x[1]);
    println("after swap,  x: ", x);
 
    println("swap elements of two different vectors:");
    std::vector<bool> y{0, 0, 1};
    println("before swap, x: ", x);
    println("before swap, y: ", y);
    y.swap(x[0], y[2]); // same as std::vector<bool>::swap(x[0], y[2]);
    println("after swap,  x: ", x);
    println("after swap,  y: ", y);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 814 | C++98 | the description of this member function was missing | added |

## See also
- [reference](/cpp/container/vector_bool/reference/)
- [swap](/cpp/container/vector/swap/)
- [std::swap(std::vector)](/cpp/container/vector/swap2/)
- [std::swap](/cpp/utility/swap/)
