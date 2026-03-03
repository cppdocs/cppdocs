---
title: "std::reference_wrapper<T>::get, std::reference_wrapper<T>::operator T&"
source_path: "cpp/utility/functional/reference_wrapper/get"
category: "utility"
---

Returns the stored reference.

## Declarations
```cpp
operator T& () const noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
T& get() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
The stored reference.

## Example
```cpp
#include <cassert>
#include <functional>
#include <map>
#include <optional>
#include <string_view>
 
using Map = std::map<std::string_view, int>;
using Opt = std::optional<std::reference_wrapper<Map::value_type>>;
 
Opt find(Map& m, std::string_view s)
{
    auto it = m.find(s);
    return it == m.end() ? Opt{} : Opt{*it};
}
 
int main()
{
    Map m{{"A", 1}, {"B", 2}, {"C", 3}};
 
    if (auto opt = find(m, "C"); opt)
        opt->get().second = 42;
        // std::optional::operator->() returns reference to std::reference_wrapper, then
        // reference_wrapper::get() returns reference to map::value_type, i.e. std::pair
 
    assert(m["C"] == 42);
}
```

## See also
- [operator()](/cpp/utility/functional/reference_wrapper/operator/)
