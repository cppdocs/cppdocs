---
title: "std::shared_ptr<T>::operator="
source_path: "cpp/memory/shared_ptr/operator"
category: "memory"
---

Replaces the managed object with the one managed by r.

## Declarations
```cpp
shared_ptr& operator=( const shared_ptr& r ) noexcept;
```

```cpp
template< class Y >
shared_ptr& operator=( const shared_ptr<Y>& r ) noexcept;
```

```cpp
shared_ptr& operator=( shared_ptr&& r ) noexcept;
```

```cpp
template< class Y >
shared_ptr& operator=( shared_ptr<Y>&& r ) noexcept;
```

```cpp
template< class Y >
shared_ptr& operator=( std::auto_ptr<Y>&& r );
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Y, class Deleter >
shared_ptr& operator=( std::unique_ptr<Y, Deleter>&& r );
```

## Parameters
- `r`: another smart pointer to share the ownership to or acquire the ownership from

## Return value
*this

## Notes
The implementation may meet the requirements without creating a temporary shared_ptr object.

## Example
This section is incompleteReason: no example

## See also
- [reset](/cpp/memory/shared_ptr/reset/)
