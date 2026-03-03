---
title: "std::allocator<T>::allocator"
source_path: "cpp/memory/allocator/allocator"
category: "memory"
since: "C++20"
---

Constructs the default allocator. Since the default allocator is stateless, the constructors have no visible effect.

## Declarations
```cpp
allocator() throw();
```
_(until C++11)_

```cpp
allocator() noexcept;
```
_(since C++11) (until C++20)_

```cpp
constexpr allocator() noexcept;
```
_(since C++20)_

```cpp
allocator( const allocator& other ) throw();
```
_(until C++11)_

```cpp
allocator( const allocator& other ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
constexpr allocator( const allocator& other ) noexcept;
```
_(since C++20)_

```cpp
template< class U >
allocator( const allocator<U>& other ) throw();
```
_(until C++11)_

```cpp
template< class U >
allocator( const allocator<U>& other ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class U >
constexpr allocator( const allocator<U>& other ) noexcept;
```
_(since C++20)_

## Parameters
- `other`: another allocator to construct with
