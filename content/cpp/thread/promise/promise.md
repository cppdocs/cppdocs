---
title: "std::promise<R>::promise"
source_path: "cpp/thread/promise/promise"
category: "thread"
since: "C++11"
---

Constructs a promise object.

## Declarations
```cpp
promise();
```
_(since C++11)_

```cpp
template< class Alloc >
promise( std::allocator_arg_t, const Alloc& alloc );
```
_(since C++11)_

```cpp
promise( promise&& other ) noexcept;
```
_(since C++11)_

```cpp
promise( const promise& other ) = delete;
```
_(since C++11)_

## Parameters
- `alloc`: allocator to use to allocate the shared state
- `other`: another promise to acquire the state from

## Example
This section is incompleteReason: no example
