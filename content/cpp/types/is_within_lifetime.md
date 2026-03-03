---
title: "std::is_within_lifetime"
source_path: "cpp/types/is_within_lifetime"
header: "<type_traits>"
category: "types"
since: "C++26"
---

Determines whether the pointer ptr points to an object that is within its [lifetime](/cpp/language/lifetime/).

## Declarations
```cpp
template< class T >
consteval bool is_within_lifetime( const T* ptr ) noexcept;
```
_(since C++26)_

## Parameters
- `p`: pointer to detect

## Return value
true if pointer ptr points to an object that is within its lifetime; otherwise false.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_is_within_lifetime
202306L
(C++26)
Checking if a union alternative is active

## Example
```cpp
#include <type_traits>
 
// an optional boolean type occupying only one byte,
// assuming sizeof(bool) == sizeof(char)
struct optional_bool
{
    union { bool b; char c; };
 
    // assuming the value representations for true and false
    // are distinct from the value representation for 2
    constexpr optional_bool() : c(2) {}
    constexpr optional_bool(bool b) : b(b) {}
 
    constexpr auto has_value() const -> bool
    {
        if consteval
        {
            return std::is_within_lifetime(&b); // during constant evaluation,
                                                // cannot read from c
        }
        else
        {
            return c != 2; // during runtime, must read from c
        }
    }
 
    constexpr auto operator*() -> bool&
    {
        return b;
    }
};
 
int main()
{
    constexpr optional_bool disengaged;
    constexpr optional_bool engaged(true);
 
    static_assert(!disengaged.has_value());
    static_assert(engaged.has_value());
    static_assert(*engaged);
}
```
