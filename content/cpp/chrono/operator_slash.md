---
title: "std::chrono::operator/(calendar)"
source_path: "cpp/chrono/operator"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

These operator/ overloads provide a conventional syntax for the creation of [Proleptic Gregorian calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar) dates.

## Declarations
```cpp
year_month
```

```cpp
constexpr auto operator/( const std::chrono::year& y,
const std::chrono::month& m ) noexcept
-> std::chrono::year_month;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::year& y, int m ) noexcept
-> std::chrono::year_month;
```
_(since C++20)_

```cpp
month_day
```

```cpp
constexpr auto operator/( const std::chrono::month& m,
const std::chrono::day& d ) noexcept
-> std::chrono::month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month& m, int d ) noexcept
-> std::chrono::month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( int m, const std::chrono::day& d ) noexcept
-> std::chrono::month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::day& d,
const std::chrono::month& m ) noexcept
-> std::chrono::month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::day& d, int m ) noexcept
-> std::chrono::month_day;
```
_(since C++20)_

```cpp
month_day_last
```

```cpp
constexpr auto operator/( const std::chrono::month& m,
std::chrono::last_spec ) noexcept
-> std::chrono::month_day_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( int m, std::chrono::last_spec ) noexcept
-> std::chrono::month_day_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( std::chrono::last_spec,
const std::chrono::month& m ) noexcept
-> std::chrono::month_day_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( std::chrono::last_spec, int m ) noexcept
-> std::chrono::month_day_last;
```
_(since C++20)_

```cpp
month_weekday
```

```cpp
constexpr auto operator/( const std::chrono::month& m,
const std::chrono::weekday_indexed& wdi ) noexcept
-> std::chrono::month_weekday;
```
_(since C++20)_

```cpp
constexpr auto operator/( int m, const std::chrono::weekday_indexed& wdi ) noexcept
-> std::chrono::month_weekday;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::weekday_indexed& wdi,
const std::chrono::month& m ) noexcept
-> std::chrono::month_weekday;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::weekday_indexed& wdi, int m ) noexcept
-> std::chrono::month_weekday;
```
_(since C++20)_

```cpp
month_weekday_last
```

```cpp
constexpr auto operator/( const std::chrono::month& m,
const std::chrono::weekday_last& wdl ) noexcept
-> std::chrono::month_weekday_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( int m, const std::chrono::weekday_last& wdl ) noexcept
-> std::chrono::month_weekday_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::weekday_last& wdl,
const std::chrono::month& m ) noexcept
-> std::chrono::month_weekday_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::weekday_last& wdl, int m ) noexcept
-> std::chrono::month_weekday_last;
```
_(since C++20)_

```cpp
year_month_day
```

```cpp
constexpr auto operator/( const std::chrono::year_month& ym,
const std::chrono::day& d ) noexcept
-> std::chrono::year_month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::year_month& ym, int d ) noexcept
-> std::chrono::year_month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::year& y,
const std::chrono::month_day& md ) noexcept
-> std::chrono::year_month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( int y, const std::chrono::month_day& md ) noexcept
-> std::chrono::year_month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_day& md,
const std::chrono::year& y ) noexcept
-> std::chrono::year_month_day;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_day& md, int y ) noexcept
-> std::chrono::year_month_day;
```
_(since C++20)_

```cpp
year_month_day_last
```

```cpp
constexpr auto operator/( const std::chrono::year_month& ym,
std::chrono::last_spec ) noexcept
-> std::chrono::year_month_day_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::year& y,
const std::chrono::month_day_last& mdl ) noexcept
-> std::chrono::year_month_day_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( int y, const std::chrono::month_day_last& mdl ) noexcept
-> std::chrono::year_month_day_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_day_last& mdl,
const std::chrono::year& y ) noexcept
-> std::chrono::year_month_day_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_day_last& mdl, int y ) noexcept
-> std::chrono::year_month_day_last;
```
_(since C++20)_

```cpp
year_month_weekday
```

```cpp
constexpr auto operator/( const std::chrono::year_month& ym,
const std::chrono::weekday_indexed& wdi ) noexcept
-> std::chrono::year_month_weekday;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::year& y,
const std::chrono::month_weekday& mwd ) noexcept
-> std::chrono::year_month_weekday;
```
_(since C++20)_

```cpp
constexpr auto operator/( int y, const std::chrono::month_weekday& mwd ) noexcept
-> std::chrono::year_month_weekday;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_weekday& mwd,
const std::chrono::year& y ) noexcept
-> std::chrono::year_month_weekday;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_weekday& mwd, int y ) noexcept
-> std::chrono::year_month_weekday;
```
_(since C++20)_

```cpp
year_month_weekday_last
```

```cpp
constexpr auto operator/( const std::chrono::year_month& ym,
const std::chrono::weekday_last& wdl ) noexcept
-> std::chrono::year_month_weekday_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::year& y,
const std::chrono::month_weekday_last& mwdl ) noexcept
-> std::chrono::year_month_weekday_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( int y, const std::chrono::month_weekday_last& mwdl ) noexcept
-> std::chrono::year_month_weekday_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_weekday_last& mwdl,
const std::chrono::year& y ) noexcept
-> std::chrono::year_month_weekday_last;
```
_(since C++20)_

```cpp
constexpr auto operator/( const std::chrono::month_weekday_last& mwdl, int y ) noexcept
-> std::chrono::year_month_weekday_last;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
using namespace std::chrono;
 
constexpr auto ym{2021y/8};
static_assert(ym == year_month(year(2021), August));
 
constexpr auto md{9/15d};
static_assert(md == month_day(September, day(15)));
 
constexpr auto mdl{October/last};
static_assert(mdl == month_day_last(month(10)));
 
constexpr auto mw{11/Monday[3]};
static_assert(mw == month_weekday(November, Monday[3]));
 
constexpr auto mwdl{December/Sunday[last]};
static_assert(mwdl == month_weekday_last(month(12), weekday_last(Sunday)));
 
// Those 3 year/month/day orders that people actually use on this planet and beyond:
constexpr auto ymd{year(2021)/January/day(23)};
static_assert(ymd == month{1}/23/2021);
static_assert(ymd == day{23}/1/2021);
static_assert(ymd == year_month_day(2021y, month(January), 23d));
 
int main() {}
```
