---
title: "std::chrono::is_clock"
source_path: "cpp/chrono/is_clock"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

If T satisfies the [Clock](/cpp/named_req/clock/) requirements, provides the member constant value equal true. For any other type, value is false.

## Declarations
```cpp
template< class T >
struct is_clock;
```
_(since C++20)_

## Notes
If T otherwise meets the [Clock](/cpp/named_req/clock/) requirements, but T::is_steady is not of type const bool, or T::now() is not of type T::time_point, the result of is_clock_v<T> is unspecified.

## Example
```cpp
#include <chrono>
#include <ratio>
 
static_assert
(
    std::chrono::is_clock_v<std::chrono::utc_clock> and
    not std::chrono::is_clock_v<std::chrono::duration<int, std::exa>>
);
 
int main() {}
```
