---
title: "std::optional<T>::operator->, std::optional<T>::operator*"
source_path: "cpp/utility/optional/operator"
category: "utility"
since: "C++17"
---

Accesses the contained value.

## Declarations
```cpp
constexpr const T* operator->() const noexcept;
```
_(since C++17)_

```cpp
constexpr T* operator->() noexcept;
```
_(since C++17)_

```cpp
constexpr const T& operator*() const& noexcept;
```
_(since C++17)_

```cpp
constexpr T& operator*() & noexcept;
```
_(since C++17)_

```cpp
constexpr const T&& operator*() const&& noexcept;
```
_(since C++17)_

```cpp
constexpr T&& operator*() && noexcept;
```
_(since C++17)_

## Return value
Pointer or reference to the contained value.

## Notes
This operator does not check whether the optional contains a value! You can do so manually by using [has_value()](/cpp/utility/optional/operator_bool/) or simply [operator bool()](/cpp/utility/optional/operator_bool/). Alternatively, if checked access is needed, [value()](/cpp/utility/optional/value/) or [value_or()](/cpp/utility/optional/value_or/) may be used.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <optional>
#include <string>
 
int main()
{
    using namespace std::string_literals;
 
    std::optional<int> opt1 = 1;
    std::cout << "opt1: " << *opt1 << '\n';
 
    *opt1 = 2;
    std::cout << "opt1: " << *opt1 << '\n';
 
    std::optional<std::string> opt2 = "abc"s;
    std::cout << "opt2: " << std::quoted(*opt2) << ", size: " << opt2->size() << '\n';
 
    // You can "take" the contained value by calling operator* on an rvalue to optional
 
    auto taken = *std::move(opt2);
    std::cout << "taken: " << std::quoted(taken) << "\n"
                 "opt2: " << std::quoted(*opt2) << ", size: " << opt2->size()  << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2762 | C++17 | operator-> and operator* might be potentially-throwing | made noexcept |

## See also
- [value](/cpp/utility/optional/value/)
- [value_or](/cpp/utility/optional/value_or/)
