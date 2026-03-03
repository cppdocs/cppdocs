---
title: "std::chrono::weekday::operator[]"
source_path: "cpp/chrono/weekday/operator_at"
category: "chrono"
since: "C++20"
---

1) Constructs a weekday_indexed from *this and index. The result represents the index-th weekday in some yet-to-be-specified month. If index is not in the range [0,7] or if !ok() the values (an underlying weekday and an index) held in the result are unspecified.

## Declarations
```cpp
constexpr std::chrono::weekday_indexed
operator[]( unsigned index ) const noexcept;
```
_(since C++20)_

```cpp
constexpr std::chrono::weekday_last
operator[]( std::chrono::last_spec ) const noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    constexpr auto second_tuesday_in_October_2019 =
        year_month_day{Tuesday[2] / October / 2019y};
 
    constexpr auto last_tuesday_in_October_2019 =
        year_month_day{Tuesday[last] / October / 2019y};
 
    std::cout << second_tuesday_in_October_2019 << '\n'
              << last_tuesday_in_October_2019 << '\n'; 
}
```
