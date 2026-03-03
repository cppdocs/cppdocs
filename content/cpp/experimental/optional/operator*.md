---
title: "std::experimental::optional<T>::operator->, std::experimental::optional<T>::operator*"
source_path: "cpp/experimental/optional/operator"
category: "experimental"
---

Accesses the contained value.

## Declarations
```cpp
constexpr const T* operator->() const;
```
_(library fundamentals TS)_

```cpp
constexpr T* operator->();
```
_(library fundamentals TS)_

```cpp
constexpr const T& operator*() const&;
```
_(library fundamentals TS)_

```cpp
constexpr T& operator*() &;
```
_(library fundamentals TS)_

```cpp
constexpr const T&& operator*() const&&;
```
_(library fundamentals TS)_

```cpp
constexpr T&& operator*() &&;
```
_(library fundamentals TS)_

## Return value
Pointer or reference to the contained value.

## Notes
This operator does not check whether the optional contains a value. If checked access is needed, [value()](/cpp/experimental/optional/value/) or [value_or()](/cpp/experimental/optional/value_or/) may be used.

## Example
```cpp
#include <experimental/optional>
#include <iostream>
#include <string>
using namespace std::literals;
 
int main()
{
    std::experimental::optional<int> opt1 = 1;
    std::cout << *opt1 << '\n';
 
    std::experimental::optional<std::string> opt2 = "abc"s;
    std::cout << opt2->size() << '\n';
}
```

## See also
- [value](/cpp/experimental/optional/value/)
- [value_or](/cpp/experimental/optional/value_or/)
