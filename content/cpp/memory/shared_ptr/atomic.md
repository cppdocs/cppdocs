---
title: "std::atomic_...<std::shared_ptr>"
source_path: "cpp/memory/shared_ptr/atomic"
header: "<memory>"
category: "memory"
---

If multiple threads of execution access the same [std::shared_ptr](/cpp/memory/shared_ptr/) object without synchronization and any of those accesses uses a non-const member function of shared_ptr then a data race will occur unless all such access is performed through these functions, which are overloads of the corresponding atomic access functions ([std::atomic_load](/cpp/atomic/atomic_load/), [std::atomic_store](/cpp/atomic/atomic_store/), etc.).

## Declarations
```cpp
template< class T >
bool atomic_is_lock_free( const std::shared_ptr<T>* p );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
std::shared_ptr<T> atomic_load( const std::shared_ptr<T>* p );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
std::shared_ptr<T> atomic_load_explicit
( const std::shared_ptr<T>* p, std::memory_order mo );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
void atomic_store( std::shared_ptr<T>* p, std::shared_ptr<T> r );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
void atomic_store_explicit
( std::shared_ptr<T>* p, std::shared_ptr<T> r,
std::memory_order mo );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
std::shared_ptr<T> atomic_exchange
( std::shared_ptr<T>* p, std::shared_ptr<T> r );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
std::shared_ptr<T> atomic_exchange_explicit
( std::shared_ptr<T>* p, std::shared_ptr<T> r,
std::memory_order mo );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
bool atomic_compare_exchange_weak
( std::shared_ptr<T>* p, std::shared_ptr<T>* expected,
std::shared_ptr<T> desired );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
bool atomic_compare_exchange_strong
( std::shared_ptr<T>* p, std::shared_ptr<T>* expected,
std::shared_ptr<T> desired );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
bool atomic_compare_exchange_strong_explicit
( std::shared_ptr<T>* p, std::shared_ptr<T>* expected,
std::shared_ptr<T> desired,
std::memory_order success, std::memory_order failure );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

```cpp
template< class T >
bool atomic_compare_exchange_weak_explicit
( std::shared_ptr<T>* p, std::shared_ptr<T>* expected,
std::shared_ptr<T> desired,
std::memory_order success, std::memory_order failure );
```
_(since C++11) (deprecated in C++20) (removed in C++26)_

## Parameters
- `p, expected`: a pointer to a std::shared_ptr
- `r, desired`: a std::shared_ptr
- `mo, success, failure`: memory ordering selectors of type std::memory_order

## Notes
These functions are typically implemented using mutexes, stored in a global hash table where the pointer value is used as the key.

The [Concurrency TS](/cpp/experimental/concurrency/) offers atomic smart pointer classes atomic_shared_ptr and atomic_weak_ptr as a replacement for the use of these functions.

These functions were deprecated in favor of the specializations of the [std::atomic](/cpp/atomic/atomic/) template: [std::atomic](/cpp/atomic/atomic/)<[std::shared_ptr](/cpp/memory/shared_ptr/)> and [std::atomic](/cpp/atomic/atomic/)<[std::weak_ptr](/cpp/memory/weak_ptr/)>.

These functions were removed in favor of the specializations of the [std::atomic](/cpp/atomic/atomic/) template: [std::atomic](/cpp/atomic/atomic/)<[std::shared_ptr](/cpp/memory/shared_ptr/)> and [std::atomic](/cpp/atomic/atomic/)<[std::weak_ptr](/cpp/memory/weak_ptr/)>.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2172 | C++11 | expected could be a null pointer | the behavior is undefined in this case |
| LWG 2980 | C++11 | empty shared_ptrs were never equivalent | equivalent if they store the same pointer value |

## See also
- [atomic_is_lock_free](/cpp/atomic/atomic_is_lock_free/)
- [atomic_storeatomic_store_explicit](/cpp/atomic/atomic_store/)
- [atomic_loadatomic_load_explicit](/cpp/atomic/atomic_load/)
- [atomic_exchangeatomic_exchange_explicit](/cpp/atomic/atomic_exchange/)
- [atomic_compare_exchange_weakatomic_compare_exchange_weak_explicitatomic_compare_exchange_strongatomic_compare_exchange_strong_explicit](/cpp/atomic/atomic_compare_exchange/)
