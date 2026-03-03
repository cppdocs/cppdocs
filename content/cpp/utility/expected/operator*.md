---
title: "std::expected<T,E>::operator->, std::expected<T,E>::operator*"
source_path: "cpp/utility/expected/operator"
category: "utility"
since: "C++23"
---

Accesses the expected value contained in *this.

## Declarations
```cpp
Primary template
```

```cpp
constexpr const T* operator->() const noexcept;
```
_(since C++23)_

```cpp
constexpr T* operator->() noexcept;
```
_(since C++23)_

```cpp
constexpr const T& operator*() const& noexcept;
```
_(since C++23)_

```cpp
constexpr T& operator*() & noexcept;
```
_(since C++23)_

```cpp
constexpr const T&& operator*() const&& noexcept;
```
_(since C++23)_

```cpp
constexpr T&& operator*() && noexcept;
```
_(since C++23)_

```cpp
void partial specialization
```

```cpp
constexpr void operator*() const noexcept;
```
_(since C++23)_

## Notes
These operators do not check whether the optional represents an expected value! You can do so manually by using [has_value()](/cpp/utility/expected/operator_bool/) or simply [operator bool()](/cpp/utility/expected/operator_bool/). Alternatively, if checked access is needed, [value()](/cpp/utility/expected/value/) or [value_or()](/cpp/utility/expected/value_or/) may be used.

## Example
```cpp
#include <cassert>
#include <expected>
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    using namespace std::string_literals;
 
    std::expected<int, std::string> ex1 = 6;
    assert(*ex1 == 6);
 
    *ex1 = 9;
    assert(*ex1 == 9);
 
    // *ex1 = "error"s; // error, ex1 contains an expected value of type int
    ex1 = std::unexpected("error"s);
    // *ex1 = 13; // UB, ex1 contains an unexpected value
    assert(ex1.value_or(42) == 42);
 
    std::expected<std::string, bool> ex2 = "Moon"s;
    std::cout << "ex2: " << std::quoted(*ex2) << ", size: " << ex2->size() << '\n';
 
    // You can "take" the expected value by calling operator* on an std::expected rvalue
 
    auto taken = *std::move(ex2);
    std::cout << "taken " << std::quoted(taken) << "\n"
                 "ex2: " << std::quoted(*ex2) << ", size: " << ex2->size() << '\n';
}
```

## See also
- [value](/cpp/utility/expected/value/)
- [value_or](/cpp/utility/expected/value_or/)
- [operator boolhas_value](/cpp/utility/expected/operator_bool/)
- [error](/cpp/utility/expected/error/)
