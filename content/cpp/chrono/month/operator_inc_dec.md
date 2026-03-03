---
title: "std::chrono::month::operator++, std::chrono::month::operator--"
source_path: "cpp/chrono/month/operator"
category: "chrono"
since: "C++20"
---

Adds or subtracts 1 from the month value, reducing the result modulo 12 to an integer in the range [1,12].

## Declarations
```cpp
constexpr std::chrono::month& operator++() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::month operator++( int ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::month& operator--() noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::month operator--( int ) noexcept;
```
_(since C++20)_

## Notes
After a call to one of these functions, ok() is always true.

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
 
int main()
{
    std::chrono::month m{6};
 
    ++m;
    assert(m == std::chrono::month(7));
 
    --m;
    assert(m == std::chrono::month(6));
 
    m = std::chrono::December;
    m++; // rounds up to January
    assert(m.ok());
    std::cout << unsigned(m) << '\n';
 
    m = std::chrono::January;
    m--; // rounds down to December
    assert(m.ok());
    std::cout << unsigned(m) << '\n';
}
```

## See also
- [operator+=operator-=](/cpp/chrono/month/operator_arith/)
- [operator+operator-](/cpp/chrono/month/operator_arith_2/)
