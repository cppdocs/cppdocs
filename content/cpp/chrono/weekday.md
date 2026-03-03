---
title: "std::chrono::weekday"
source_path: "cpp/chrono/weekday"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

The class weekday represent a day of the week in the [proleptic Gregorian calendar](https://en.wikipedia.org/wiki/proleptic_Gregorian_calendar). Its normal range is [0,6], for Sunday through Saturday, but it can hold any value in the range [0,255]. Seven named constants are predefined in the std::chrono namespace for the seven days of the week.

## Declarations
```cpp
class weekday;
```
_(since C++20)_

```cpp
inline constexpr std::chrono::weekday Sunday{0};
```
_(since C++20)_

```cpp
inline constexpr std::chrono::weekday Monday{1};
```
_(since C++20)_

```cpp
inline constexpr std::chrono::weekday Tuesday{2};
```
_(since C++20)_

```cpp
inline constexpr std::chrono::weekday Wednesday{3};
```
_(since C++20)_

```cpp
inline constexpr std::chrono::weekday Thursday{4};
```
_(since C++20)_

```cpp
inline constexpr std::chrono::weekday Friday{5};
```
_(since C++20)_

```cpp
inline constexpr std::chrono::weekday Saturday{6};
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::chrono::weekday x{42 / 13};
    std::cout << x++ << '\n';
    std::cout << x << '\n';
    std::cout << ++x << '\n';
}
```

## See also
- [weekday_indexed](/cpp/chrono/weekday_indexed/)
