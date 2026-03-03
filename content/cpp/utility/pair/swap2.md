---
title: "std::swap(std::pair)"
source_path: "cpp/utility/pair/swap2"
header: "<utility>"
category: "utility"
since: "C++20"
---

Swaps the contents of x and y. Equivalent to x.swap(y).

## Declarations
```cpp
template< class T1, class T2 >
void swap( std::pair<T1,T2>& x, std::pair<T1,T2>& y )
noexcept(/* see below */);
```
_(since C++11) (until C++20)_

```cpp
template< class T1, class T2 >
constexpr void swap( std::pair<T1,T2>& x, std::pair<T1,T2>& y )
noexcept(/* see below */);
```
_(since C++20)_

```cpp
template< class T1, class T2 >
constexpr void swap( const std::pair<T1,T2>& x, const std::pair<T1,T2>& y )
noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `x, y`: pairs whose contents to swap

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <utility>
 
int main()
{
    auto p1 = std::make_pair(10, 3.14);
    auto p2 = std::pair(12, 1.23); // CTAD, since C++17
 
    auto print_p1_p2 = [&](auto msg) {
        std::cout << msg
                  << "p1 = {" << std::get<0>(p1)
                  << ", "     << std::get<1>(p1) << "}, "
                  << "p2 = {" << std::get<0>(p2)
                  << ", "     << std::get<1>(p2) << "}\n";
    };
 
    print_p1_p2("Before p1.swap(p2): ");
    p1.swap(p2);
    print_p1_p2("After  p1.swap(p2): ");
    std::swap(p1, p2);
    print_p1_p2("After swap(p1, p2): ");
}
```

## See also
- [swap](/cpp/utility/swap/)
- [std::swap(std::tuple)](/cpp/utility/tuple/swap2/)
- [std::swap](/cpp/utility/swap/)
