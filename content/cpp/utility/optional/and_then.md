---
title: "std::optional<T>::and_then"
source_path: "cpp/utility/optional/and_then"
category: "utility"
since: "C++23"
---

If *this contains a value, invokes f with the contained value as an argument, and returns the result of that invocation; otherwise, returns an empty std::optional.

## Declarations
```cpp
template< class F >
constexpr auto and_then( F&& f ) &;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) const&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) &&;
```
_(since C++23)_

```cpp
template< class F >
constexpr auto and_then( F&& f ) const&&;
```
_(since C++23)_

## Parameters
- `f`: a suitable function or Callable object that returns an std::optional

## Return value
The result of f or an empty [std::optional](/cpp/utility/optional/), as described above.

## Notes
Some languages call this operation flatmap.

## Example
```cpp
#include <charconv>
#include <iomanip>
#include <iostream>
#include <optional>
#include <ranges>
#include <string>
#include <string_view>
#include <vector>
 
std::optional<int> to_int(std::string_view sv)
{
    int r{};
    auto [ptr, ec]{std::from_chars(sv.data(), sv.data() + sv.size(), r)};
    if (ec == std::errc())
        return r;
    else
        return std::nullopt;
}
 
int main()
{
    using namespace std::literals;
 
    const std::vector<std::optional<std::string>> v
    {
        "1234", "15 foo", "bar", "42", "5000000000", " 5", std::nullopt, "-43"
    };
 
    for (auto&& x : v | std::views::transform(
        [](auto&& o)
        {
            // debug print the content of input optional<string>
            std::cout << std::left << std::setw(13)
                      << std::quoted(o.value_or("nullopt")) << " -> ";
 
            return o
                // if optional is nullopt convert it to optional with "" string
                .or_else([]{ return std::optional{""s}; })
                // flatmap from strings to ints (making empty optionals where it fails)
                .and_then(to_int)
                // map int to int + 1
                .transform([](int n) { return n + 1; })
                // convert back to strings
                .transform([](int n) { return std::to_string(n); })
                // replace all empty optionals that were left by
                // and_then and ignored by transforms with "NaN"
                .value_or("NaN"s);
        }))
        std::cout << x << '\n';
}
```

## See also
- [value_or](/cpp/utility/optional/value_or/)
- [transform](/cpp/utility/optional/transform/)
- [or_else](/cpp/utility/optional/or_else/)
