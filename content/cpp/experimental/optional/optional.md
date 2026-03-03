---
title: "std::experimental::optional<T>::optional"
source_path: "cpp/experimental/optional/optional"
category: "experimental"
---

Constructs a new optional object.

## Declarations
```cpp
constexpr optional() noexcept;
constexpr optional( std::experimental::nullopt_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
optional( const optional& other );
```
_(library fundamentals TS)_

```cpp
optional( optional&& other ) noexcept(/* see below */);
```
_(library fundamentals TS)_

```cpp
constexpr optional( const T& value );
```
_(library fundamentals TS)_

```cpp
constexpr optional( T&& value );
```
_(library fundamentals TS)_

```cpp
template< class... Args >
constexpr explicit optional( std::experimental::in_place_t, Args&&... args );
```
_(library fundamentals TS)_

```cpp
template< class U, class... Args >
constexpr explicit optional( std::experimental::in_place_t,
std::initializer_list<U> ilist,
Args&&... args );
```
_(library fundamentals TS)_

## Parameters
- `other`: another optional object whose contained value to copy
- `value`: value to initialize the contained value with
- `args...`: arguments to initialize the contained value with
- `ilist`: initializer list to initialize the contained value with

## Example
```cpp
#include <experimental/optional>
#include <iostream>
#include <string>
 
int main()
{
    std::experimental::optional<int> o1,      // empty
                                     o2 = 1,  // init from rvalue
                                     o3 = o2; // copy-constructor
 
    std::experimental::optional<std::string> o4(std::experimental::in_place,
                                                {'a', 'b', 'c'});
 
    std::cout << *o2 << ' ' << *o3 << ' ' << *o4 << '\n';
}
```

## See also
- [make_optional](/cpp/experimental/optional/make_optional/)
