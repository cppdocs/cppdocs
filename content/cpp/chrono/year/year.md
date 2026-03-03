---
title: "std::chrono::year::year"
source_path: "cpp/chrono/year/year"
category: "chrono"
since: "C++20"
---

Constructs a year object.

## Declarations
```cpp
year() = default;
```
_(since C++20)_

```cpp
constexpr explicit year( int y ) noexcept;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    using namespace std::chrono;
 
    constexpr int leap_years = []
    {
        int count{};
        for (int i{year::min()}; i <= int{year::max()}; ++i)
            if (year{i}.is_leap()) // uses constructor (2)
                ++count;
        return count;
    } ();
 
    static_assert(15891 == leap_years);
 
    std::cout << "There are " << leap_years << " leap years in the range ["
              << int(year::min()) << ", " << int(year::max()) << "].\n";
}
```
