---
title: "std::experimental::optional<T>::operator="
source_path: "cpp/experimental/optional/operator"
category: "experimental"
---

Replaces contents of *this with the contents of other.

## Declarations
```cpp
optional& operator=( std::experimental::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
optional& operator=( const optional& other );
```
_(library fundamentals TS)_

```cpp
optional& operator=( optional&& other ) noexcept(/* see below */);
```
_(library fundamentals TS)_

```cpp
template< class U >
optional& operator=( U&& value );
```
_(library fundamentals TS)_

## Parameters
- `other`: another optional object whose contained value to assign
- `value`: value to assign to the contained value

## Return value
*this

## Notes
An optional object op may be turned into an empty optional with both op = {}; and op = nullopt;.

## Example
```cpp
#include <experimental/optional>
#include <iostream>
 
int main()
{
    std::experimental::optional<const char*> s1 = "abc", s2; // constructor
    s2 = s1; // assignment
    s1 = "def"; // decaying assignment (U = char[4], T = const char*)
    std::cout << *s2 << ' ' << *s1 << '\n';
}
```

## See also
- [emplace](/cpp/experimental/optional/emplace/)
