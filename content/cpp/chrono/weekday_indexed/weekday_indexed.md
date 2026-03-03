---
title: "std::chrono::weekday_indexed::weekday_indexed"
source_path: "cpp/chrono/weekday_indexed/weekday_indexed"
category: "chrono"
since: "C++20"
---

Constructs a weekday_indexed.

## Declarations
```cpp
weekday_indexed() = default;
```
_(since C++20)_

```cpp
constexpr weekday_indexed( const std::chrono::weekday& wd, unsigned index ) noexcept;
```
_(since C++20)_

## Notes
A more convenient way to construct a weekday_indexed is with weekday's operator[], i.e., wd[index].

## Example
```cpp
#include <chrono>
#include <iostream>
using namespace std::chrono;
 
int main()
{
    constexpr auto third_friday = weekday_indexed(Friday, 3); // uses constructor (2)
    static_assert(third_friday == Friday[3]);
 
    weekday_indexed wdi = Tuesday[2]; // represents the 2nd Tuesday
    std::cout << year_month_day{ wdi / October / 2019y } << '\n';
}
```

## See also
- [operator[]](/cpp/chrono/weekday/operator_at/)
- [weekday_indexed](/cpp/chrono/weekday_indexed/)
- [weekday_last](/cpp/chrono/weekday_last/)
