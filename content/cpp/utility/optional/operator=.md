---
title: "std::optional<T>::operator="
source_path: "cpp/utility/optional/operator"
category: "utility"
since: "C++17"
---

Replaces contents of *this with the contents of other.

## Declarations
```cpp
optional& operator=( std::nullopt_t ) noexcept;
```
_(since C++17) (constexpr since C++20)_

```cpp
constexpr optional& operator=( const optional& other );
```
_(since C++17)_

```cpp
constexpr optional& operator=( optional&& other ) noexcept(/* see below */);
```
_(since C++17)_

```cpp
template< class U = T >
optional& operator=( U&& value );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class U >
optional& operator=( const optional<U>& other );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class U >
optional& operator=( optional<U>&& other );
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `other`: another optional object whose contained value to assign
- `value`: value to assign to the contained value

## Return value
*this

## Notes
An optional object op may be turned into an empty optional with both op = {}; and op = nullopt;. The first expression constructs an empty optional object with {} and assigns it to op.

## Example
```cpp
#include <iostream>
#include <optional>
 
int main()
{
    std::optional<const char*> s1 = "abc", s2; // constructor
    s2 = s1; // assignment
    s1 = "def"; // decaying assignment (U = char[4], T = const char*)
    std::cout << *s2 << ' ' << *s1 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0602R4 | C++17 | copy/move assignment operator may not be trivialeven if underlying operations are trivial | required to propagate triviality |
| P2231R1 | C++20 | converting assignment operators (1) and (4-6) were not constexprwhile the required operations can be in C++20 | made constexpr |

## See also
- [emplace](/cpp/utility/optional/emplace/)
