---
title: "std::chrono::operator==,<=>(std::chrono::month)"
source_path: "cpp/chrono/month/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compare the two std::chrono::month x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::month& x,
const std::chrono::month& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering operator<=>( const std::chrono::month& x,
const std::chrono::month& y ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
 
int main()
{
    constexpr std::chrono::month m1{6}, m2{8};
 
    static_assert
    (
        m1 < m2 && m1 == m1 && m1 <= m2 &&
        m2 > m1 && m2 != m1 && m2 >= m1 &&
        m1 <=> m2 != 0
    );
}
```
