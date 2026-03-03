---
title: "std::experimental::observer_ptr<W>::observer_ptr"
source_path: "cpp/experimental/observer_ptr/observer_ptr"
category: "experimental"
---

1) Constructs an observer_ptr that has no corresponding watched object.

## Declarations
```cpp
constexpr observer_ptr() noexcept;
constexpr observer_ptr( nullptr_t ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
constexpr explicit observer_ptr( element_type* p ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
template< class W2 >
constexpr observer_ptr( observer_ptr<W2> other ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
observer_ptr( const observer_ptr& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

```cpp
observer_ptr( observer_ptr&& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

## Parameters
- `p`: a pointer to an object to watch
- `other`: another observer_ptr to copy from
