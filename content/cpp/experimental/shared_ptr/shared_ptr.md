---
title: "std::experimental::shared_ptr<T>::shared_ptr"
source_path: "cpp/experimental/shared_ptr/shared_ptr"
category: "experimental"
---

Constructs new shared_ptr from a variety of pointer types that refer to an object to manage.

## Declarations
```cpp
constexpr shared_ptr() noexcept;
```

```cpp
constexpr shared_ptr( std::nullptr_t ) noexcept;
```

```cpp
template< class Y >
explicit shared_ptr( Y* ptr );
```

```cpp
template< class Y, class Deleter >
shared_ptr( Y* ptr, Deleter d );
```

```cpp
template< class Deleter >
shared_ptr( std::nullptr_t ptr, Deleter d );
```

```cpp
template< class Y, class Deleter, class Alloc >
shared_ptr( Y* ptr, Deleter d, Alloc alloc );
```

```cpp
template< class Deleter, class Alloc >
shared_ptr( std::nullptr_t ptr, Deleter d, Alloc alloc );
```

```cpp
template< class Y >
shared_ptr( const shared_ptr<Y>& r, element_type *ptr ) noexcept;
```

```cpp
shared_ptr( const shared_ptr& r ) noexcept;
```

```cpp
template< class Y >
shared_ptr( const shared_ptr<Y>& r ) noexcept;
```

```cpp
shared_ptr( shared_ptr&& r ) noexcept;
```

```cpp
template< class Y >
shared_ptr( shared_ptr<Y>&& r ) noexcept;
```

```cpp
template< class Y >
explicit shared_ptr( const std::weak_ptr<Y>& r );
```

```cpp
template< class Y >
shared_ptr( std::auto_ptr<Y>&& r );
```

```cpp
template< class Y, class Deleter >
shared_ptr( std::unique_ptr<Y,Deleter>&& r );
```

## Parameters
- `ptr`: a pointer to an object to manage
- `d`: a deleter to use to destroy the object
- `alloc`: an allocator to use for allocations of data for internal use
- `r`: another smart pointer to share the ownership to or acquire the ownership from

## Notes
When constructing a shared_ptr from a raw pointer to an object of a type derived from std::experimental::enable_shared_from_this, the constructors of shared_ptr update the private weak_ptr member of the std::experimental::enable_shared_from_this base so that future calls to [shared_from_this()](/cpp/memory/enable_shared_from_this/shared_from_this/) would share ownership with the shared_ptr created by this raw pointer constructor.

The raw pointer overloads assume ownership of the pointed-to object, and so constructing a shared_ptr using the raw pointer overload for an object that is already managed by a shared_ptr may lead to undefined behavior, even if the object is of a type derived from std::experimental::enable_shared_from_this.

## Example
This section is incompleteReason: no example

## See also
- [make_sharedmake_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/)
- [allocate_sharedallocate_shared_for_overwrite](/cpp/memory/shared_ptr/allocate_shared/)
