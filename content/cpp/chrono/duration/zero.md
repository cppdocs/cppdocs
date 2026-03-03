---
title: "std::chrono::duration<Rep,Period>::zero"
source_path: "cpp/chrono/duration/zero"
category: "chrono"
since: "C++20"
---

Returns a zero-length duration.

## Declarations
```cpp
static constexpr duration zero();
```
_(until C++20)_

```cpp
static constexpr duration zero() noexcept;
```
_(since C++20)_

## Return value
Returns duration([std::chrono::duration_values](/cpp/chrono/duration_values/)<rep>::zero()).

## Example
```cpp
#include <chrono>
#include <ratio>
 
template<typename X, typename Y>
using dura = std::chrono::duration<X, Y>;
 
static_assert
(
    (std::chrono::hours::zero() == std::chrono::nanoseconds::zero()) &&
    (dura<short, std::nano>::zero() == dura<int, std::deci>::zero()) &&
    (dura<short, std::deca>::zero() == dura<long, std::exa>::zero()) &&
    (dura<long, std::atto>::zero().count() == dura<float, std::exa>::zero().count())
);
 
int main() {}
```

## See also
- [min](/cpp/chrono/duration/min/)
- [max](/cpp/chrono/duration/max/)
