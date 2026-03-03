---
title: "std::experimental::weak_ptr<T>::weak_ptr"
source_path: "cpp/experimental/weak_ptr/weak_ptr"
category: "experimental"
---

Constructs a new weak_ptr that potentially shares an object with r.

## Declarations
```cpp
constexpr weak_ptr() noexcept;
```
_(library fundamentals TS)_

```cpp
weak_ptr( const weak_ptr& r ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class Y >
weak_ptr( const weak_ptr<Y>& r ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class Y >
weak_ptr( const std::experimental::shared_ptr<Y>& r ) noexcept;
```
_(library fundamentals TS)_

```cpp
weak_ptr( weak_ptr&& r ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class Y >
weak_ptr( weak_ptr<Y>&& r ) noexcept;
```
_(library fundamentals TS)_

## Parameters
- `r`: a std::experimental::shared_ptr or std::experimental::weak_ptr that will be viewed by this std::experimental::weak_ptr

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/memory/weak_ptr/weak_ptr/)
- [operator=](/cpp/memory/weak_ptr/operator/)
