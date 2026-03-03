---
title: "std::expected<T,E>::expected"
source_path: "cpp/utility/expected/expected"
category: "utility"
since: "C++23"
---

Constructs a new expected object.

## Declarations
```cpp
Main template
```

```cpp
constexpr expected();
```
_(since C++23)_

```cpp
constexpr expected( const expected& other );
```
_(since C++23)_

```cpp
constexpr expected( expected&& other ) noexcept(/* see below */);
```
_(since C++23)_

```cpp
template< class U, class G >
constexpr expected( const expected<U, G>& other );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class U, class G >
constexpr expected( expected<U, G>&& other );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class U = T >
constexpr explicit(!std::is_convertible_v<U, T>) expected( U&& v );
```
_(since C++23)_

```cpp
template< class G >
constexpr explicit(!std::is_convertible_v<const G&, E>)
expected( const std::unexpected<G>& e );
```
_(since C++23)_

```cpp
template< class G >
constexpr explicit(!std::is_convertible_v<G, E>)
expected( std::unexpected<G>&& e );
```
_(since C++23)_

```cpp
template< class... Args >
constexpr explicit expected( std::in_place_t, Args&&... args );
```
_(since C++23)_

```cpp
template< class U, class... Args >
constexpr explicit
expected( std::in_place_t,
std::initializer_list<U> il, Args&&... args );
```
_(since C++23)_

```cpp
template< class... Args >
constexpr explicit expected( std::unexpect_t, Args&&... args );
```
_(since C++23)_

```cpp
template< class U, class... Args >
constexpr explicit
expected( std::unexpect_t,
std::initializer_list<U> il, Args&&... args );
```
_(since C++23)_

```cpp
void partial specialization
```

```cpp
constexpr expected();
```
_(since C++23)_

```cpp
constexpr expected( const expected& other );
```
_(since C++23)_

```cpp
constexpr expected( expected&& other )
noexcept(std::is_nothrow_move_constructible_v<E>);
```
_(since C++23)_

```cpp
template< class U, class G >
constexpr explicit(!std::is_convertible_v<const G&, E>)
expected( const expected<U, G>& other );
```
_(since C++23)_

```cpp
template< class U, class G >
constexpr explicit(!std::is_convertible_v<G, E>)
expected( expected<U, G>&& other );
```
_(since C++23)_

```cpp
template< class G >
constexpr explicit(!std::is_convertible_v<const G&, E>)
expected( const std::unexpected<G>& e );
```
_(since C++23)_

```cpp
template< class G >
constexpr explicit(!std::is_convertible_v<G, E>)
expected( std::unexpected<G>&& e );
```
_(since C++23)_

```cpp
template< class... Args >
constexpr explicit expected( std::in_place_t );
```
_(since C++23)_

```cpp
template< class... Args >
constexpr explicit expected( std::unexpect_t, Args&&... args );
```
_(since C++23)_

```cpp
template< class U, class... Args >
constexpr explicit
expected( std::unexpect_t,
std::initializer_list<U> il, Args&&... args );
```
_(since C++23)_

## Parameters
- `other`: another expected object whose contained value is copied
- `e`: std::unexpected object whose contained value is copied
- `v`: value with which to initialize the contained value
- `args`: arguments with which to initialize the contained value
- `il`: initializer list with which to initialize the contained value

## Example
This section is incompleteReason: no example

## See also
- [unexpected](/cpp/utility/expected/unexpected/)
- [in_placein_place_typein_place_indexin_place_tin_place_type_tin_place_index_t](/cpp/utility/in_place/)
- [unexpectunexpect_t](/cpp/utility/expected/unexpect_t/)
