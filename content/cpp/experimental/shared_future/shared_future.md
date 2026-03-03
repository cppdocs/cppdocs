---
title: "std::experimental::shared_future<T>::shared_future"
source_path: "cpp/experimental/shared_future/shared_future"
category: "experimental"
---

1) Default constructor. Constructs an empty shared_future object that does not refer to a shared state.

## Declarations
```cpp
shared_future() noexcept;
```

```cpp
shared_future( std::experimental::shared_future<T>&& f ) noexcept;
```

```cpp
shared_future( const std::experimental::shared_future<T>& f );
```

```cpp
shared_future( std::experimental::future<std::experimental::shared_future<T>> && other ) noexcept;
```

```cpp
shared_future( std::experimental::future<T>&& f ) noexcept;
```

## Parameters
- `f`: another future object to initialize with
- `other`: a std::experimental::future object to unwrap

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2697 | Concurrency TS | behavior of unwrapping constructor is unclear with an invalid future | constructs an empty future |

## See also
- [(constructor)](/cpp/thread/shared_future/shared_future/)
